import { AppBar, Typography } from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme';
import Tabs from '@material-ui/core/Tabs';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { StyledTab, TabPanel } from '../../components/Tabs';
import Center from '../../containers/layouts/Center';
import Scaffold from '../../containers/layouts/Scaffold';
import useActions from '../../redux/actions';
import * as TabActions from '../../redux/actions/tabs';
import { RootState } from '../../redux/reducers';
import useStyles from './styles';

const Overview = lazy(() => import('../../views/Analytics/Overview'));
const DashboardTable = lazy(
  () => import('../../views/Analytics/ApplicationDashboards/Table')
);
const DataSourceTable = lazy(
  () => import('../../views/Analytics/DataSources/Table')
);
const WorkflowComparisonTable = lazy(
  () =>
    import('../../views/Analytics/WorkflowDashboard/WorkflowComparisonTable')
);

const AnalyticsDashboard = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const analyticsTabValue = useSelector(
    (state: RootState) => state.tabNumber.analytics
  );
  const tabs = useActions(TabActions);

  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    tabs.changeAnalyticsDashboardTabs(newValue);
  };

  return (
    <Scaffold>
      <section>
        <div className={classes.header}>
          <Typography variant="h3">
            {t('analyticsDashboard.heading')}
          </Typography>
        </div>
      </section>
      <AppBar className={classes.appBar}>
        <Tabs
          value={analyticsTabValue}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.primary.main,
            },
          }}
          variant="fullWidth"
        >
          <StyledTab
            label={t('analyticsDashboard.overview')}
            data-cy="overview"
          />
          <StyledTab
            label={t('analyticsDashboard.workflowDashboard')}
            data-cy="litmusDashboard"
          />
          <StyledTab
            label={t('analyticsDashboard.applicationDashboard')}
            data-cy="kubernetesDashboard"
          />
          <StyledTab
            label={t('analyticsDashboard.dataSource')}
            data-cy="data source"
          />
        </Tabs>
      </AppBar>

      <TabPanel value={analyticsTabValue} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={analyticsTabValue} index={1}>
        <WorkflowComparisonTable />
      </TabPanel>
      <TabPanel value={analyticsTabValue} index={2}>
        <DashboardTable />
      </TabPanel>
      <TabPanel value={analyticsTabValue} index={3}>
        <DataSourceTable />
      </TabPanel>
    </Scaffold>
  );
};

export default AnalyticsDashboard;
