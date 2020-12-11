import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'

const columns = [
  { id: 'projectid', label: 'Project ID', minWidth: 90 },
 
  {
    id: 'location',
    label: 'Location',
    minWidth: 90,
    align: 'right',
    
  },
  {
    id: 'information',
    label: 'Information',
    minWidth: 340,
    align: 'right',
    
  },
];

function createData(projectid, location, information ) {
  
  return { projectid, location, information };
}

const rows = [
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  createData('shd345', 'Ontario', 'proecessing. 2 supervisor and 4 workers'),
  
  
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function AdminPageWorksiteTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={8}>
        <Typography>Work-Site</Typography>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}