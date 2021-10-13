import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState, useContext } from 'react';
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TracksContext } from '../../../services/tracks/tracks.context';

const SearchForm = styled.form`
  width: 500px;
  height: 48px;
  border: 1px solid ${props => props.theme.colors.ui.primary};
  border-radius: 10px 10px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 40px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 1rem;
`

const SubmitButton = styled.button`
  background-color: transparent;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.ui.primary};
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function Search() {
  const { searchTracks } = useContext(TracksContext);
  const [search, setSearch] = useState({ search: '' });
  const formRef = useRef();

  function handleChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value.trimLeft(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch({
      search: search.search.trim(),
    });
    searchTracks(search.search);
    formRef.current.reset();
    setSearch({ search: '' });
  }

  return (
    <SearchForm onSubmit={handleSubmit} ref={formRef}>
      <SearchInput placeholder="Canciones..." onChange={handleChange} value={search.search} name="search" />
      <SubmitButton>
        <FontAwesomeIcon icon={faSearch} />
      </SubmitButton>
    </SearchForm>
  );
}