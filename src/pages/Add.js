import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Add() {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter the name" />
      </form>
      <Link to="/">
        <Button>Back Home</Button>
      </Link>
    </>
  );
}
