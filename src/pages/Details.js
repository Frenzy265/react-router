import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Details() {
  return (
    <>
      <div>Hier sollen alle Details stehen</div>
      <Link to="/">
        <Button>Back Home</Button>
      </Link>
    </>
  );
}
