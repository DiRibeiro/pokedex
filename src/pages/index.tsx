import { useEffect, useState } from 'react';
import { get } from '../api/services/pokedex/controller';
import { Card, CardContent } from '@mui/material';

interface Pokemon {
  name: string;
  url: string;
}

interface Pokedex {
  count: number;
  results: Pokemon[];
}

export function View() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Pokedex | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    get()
      .then((response: Pokedex) => {
        setData(response);
        setLoading(false);
        // console.log(response);
      })
      .catch((error: Error) => {
        console.error(`Error fetching data: ${error.message}`);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      });
  }, []);
  
  return (
    <Card>
        <CardContent>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingInlineStart: 0
                }}>
                {data && data.results && data.results.map((pokemon, index) => (
                    <Card style={{
                        width: '300px',
                        height: '350px',
                        marginBottom: '10px',
                        border: '1px solid black'
                    }}>
                        <li key={index}>
                        <strong>Name:</strong> {pokemon.name}<br />
                        <strong>URL:</strong> {pokemon.url}
                        </li>
                    </Card>
                ))}
                </ul>
            )}
        </CardContent>
    </Card>
    );
}

export default View;
