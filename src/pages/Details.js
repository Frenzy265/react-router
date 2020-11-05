import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navlink from '../components/Button';
import { getListById } from '../Api/lists';
import DetailsItem from '../components/DetailsItem';
import DangerButton from '../components/DangerButton';

export default function Details() {
  const { listId } = useParams();
  const [list, setList] = useState();

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  function handleDelete() {
    alert('Danger: Delete!');
  }

  return (
    <>
      <h1> {list?.title} in detail</h1>
      <ul>
        {list?.items.map((item) => (
          <DetailsItem key={item}> {item} </DetailsItem>
        ))}
      </ul>
      <DangerButton onClick={handleDelete}>Delete</DangerButton>
      <Link to="/">
        <Navlink>
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
      </Link>
    </>
  );
}
