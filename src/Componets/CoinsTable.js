import React, { useState, useEffect } from 'react';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  createTheme,
  LinearProgress,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  Table,
  TableBody
} from '@material-ui/core';
import { Classnames } from 'react-alice-carousel';

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(" ")

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
      console.log(coins);
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: "dark"
    },
  })
  const handleSearch = () => {
    return coins.filter((coin) => (
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.includes(search)
    ))
  }

  const navigate = useNavigate();

  return (

    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant='h4' style={{ margin: 18, fontFamily: "monospace" }}>
          CryptoCurenty Prices by Market Cap

        </Typography>

        <TextField
          label="Search for a crypt currency.."

          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        >
        </TextField>
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: '#0000' }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat"
                      }}
                      key={head}
                    // align = {head === "Coin" ? " " : "right"}

                    >
                      {head}

                    </TableCell>
                  ))}
                </TableRow>

              </TableHead>
              <TableBody>
                {handleSearch().map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  return (
                    <TableRow
                    onClick={() => navigate(`/coins/${row.id}`)}
                      className={classes.row}
                      key={row.name}>


                    <TableCell 
                    component="th"
                    scope='row'
                    style={{
                      display:"flex",
                      gap:15,
                    }}
                    >

                    </TableCell>
                    </TableRow>
                  )

                })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>

    </ThemeProvider>

  );
};

export default CoinsTable;
