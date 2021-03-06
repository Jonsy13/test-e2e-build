import { Typography, useTheme } from '@material-ui/core';
import Done from '@material-ui/icons/DoneAllTwoTone';
import { ButtonOutlined, Icon } from 'litmus-ui';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './styles';

interface InstallProps {
  title: string;
  description: string;
  yamlLink: string;
  isPredefined?: boolean;
}

const InstallChaos: React.FC<InstallProps> = ({
  title,
  description,
  yamlLink,
  isPredefined,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation();
  const [copying, setCopying] = useState(false);
  const yaml = isPredefined ? yamlLink : `kubectl apply -f ${yamlLink}`;

  function fallbackCopyTextToClipboard(text: string) {
    // eslint-disable-next-line no-alert
    window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
  }

  function copyTextToClipboard(text: string) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    setCopying(true);
    navigator.clipboard
      .writeText(text)
      .catch((err) => console.error('Async: Could not copy text: ', err));

    setTimeout(() => setCopying(false), 3000);
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.linkBox}>
        <Typography variant="subtitle1" className={classes.yamlLink}>
          {isPredefined ? yamlLink : `kubectl apply -f ${yamlLink}`}
        </Typography>

        <div className={classes.buttonBox}>
          <ButtonOutlined onClick={() => copyTextToClipboard(yaml)}>
            {!copying ? (
              <div className={classes.rowDiv}>
                <Icon
                  name="copy"
                  size="lg"
                  color={theme.palette.primary.main}
                />
                <Typography className={classes.spacing}>
                  {t('myhub.installChaos.copy')}
                </Typography>
              </div>
            ) : (
              <div className={classes.rowDiv}>
                <Done className={classes.done} />
                <Typography>{t('myhub.installChaos.copied')}</Typography>
              </div>
            )}
          </ButtonOutlined>
        </div>
      </div>
    </div>
  );
};
export default InstallChaos;
