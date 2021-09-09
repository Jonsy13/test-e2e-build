import { createStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const StyledTableCell = withStyles((theme) =>
  createStyles({
    root: {
      borderBottom: `1px solid ${theme.palette.border.main}`,
    },
  })
)(TableCell);
