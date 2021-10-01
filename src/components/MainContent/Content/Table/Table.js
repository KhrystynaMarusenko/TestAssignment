import React from 'react';
import {useTable} from 'react-table';
import classes from "./Table.module.css";

function Table() {

    const data = React.useMemo(
        () => [
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },
            {
                col1: '',
                col2: '',
                col3: '',
                col4: '',
                col5: '',
                col6: '',
            },

        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                accessor: 'col1',
            },
            {
                accessor: 'col2',
            },
            {
                Header: 'TABLE',
                accessor: 'col3',
            },
            {
                accessor: 'col4',
            },
            {
                accessor: 'col5',
            },
            {
                accessor: 'col6', // accessor is the "key" in the data
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})

    return (
        <div className={classes.tableHolder}>
            <table {...getTableProps()} style={{border: 'solid 1px black'}}>
                < thead>
                {

                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        color: 'black',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            width: '200px',
                                            height: '30px',
                                            border: 'solid 1px gray',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;