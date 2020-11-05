import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navlink from '../components/Navlink';
import Inputfield from '../components/Inputfield';
import { postListById } from '../Api/lists';
import AddButton from '../components/AddButton';

export default function Add() {
  const [title, setTitle] = useState('');
  const history = useHistory();

  function handleChange(event) {
    setTitle(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newList = await postListById({
      title,
      items: [],
    });
    history.push(`/${newList.id}`);
  };

  return (
    <>
      <h1>Add new wishlist</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Inputfield
            type="text"
            placeholder="Enter the name"
            value={title}
            onChange={handleChange}
            required
          />
        </label>
        <AddButton type="submit" value="Add" />
      </form>
      <Navlink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Navlink>
    </>
  );
}
