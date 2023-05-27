import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import SearchBar from '../components/Search';

const link_base = 'http://www.omdbapi.com/?apikey=c8ed8ebe&s=';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  useEffect(() => {
    if (searchTerm) {
      fetch(link_base + encodeURIComponent(searchTerm))
        .then(res => res.json())
        .then(data => {
          if (data.Response === "True") {
            setMovies(data.Search);
            setIsError(false);
          } else {
            setMovies([]);
            setIsError(true);
          }
        })
        .catch(error => {
          console.log('Error fetching movies:', error);
          setMovies([]);
          setIsError(true);
        });
    }
  }, [searchTerm]);

  return (
    <Layout.Content>
      <SearchBar onSearch={handleSearch} />
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {isError ? (
              <h1>Ничего не найдено</h1>
            ) : movies.length ? (
              <Movies movies={movies} />
            ) : (
              <h1>Loading...</h1>
            )}
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;
