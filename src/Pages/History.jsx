import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { formatDate, URL } from '../core-utils/constt';
import { Navebar } from '../components/Navebar';

export const History = () => {
    const [data, setData] = useState([]);
    const intitalizeData = async () => {
        let history = axios.get(`${URL}history`);

        await Promise.all([history])
            .then((res) => {
                // console.log(res[0].data);
                setData(res[0].data.reverse());
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        intitalizeData();
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <div>
            <Navebar></Navebar>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Category</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <StyledTableRow key={row?.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row?.category}</StyledTableCell>
                                <StyledTableCell align="right">{formatDate(row?.lastSeenAt)}</StyledTableCell>
                                <StyledTableCell align="right">{row?.lastSeenAt.split('T')[1].slice(0, 8)}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
