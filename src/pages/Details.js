import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Navlink from '../components/Navlink';
import { getListById, deleteListById } from '../Api/lists';
import DetailsItem from '../components/DetailsItem';
import DangerButton from '../components/DangerButton';
import Button from '../components/Button';

export default function Details() {
  const { listId } = useParams();
  const [list, setList] = useState();
  const history = useHistory();

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  function addWish() {
    alert('Add a new wish!');
  }

  return (
    <>
      <h1> {list?.title} in detail</h1>
      <ul>
        {list?.items.map((item) => (
          <DetailsItem key={item}> {item} </DetailsItem>
        ))}
      </ul>
      <Button onClick={addWish}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </Button>

      <DangerButton onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </DangerButton>

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
