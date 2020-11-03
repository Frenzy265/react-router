import React from 'react';
import { Link } from 'react-router-dom';
import Navlink from '../components/Button';

export default function Add() {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter the name" />
      </form>
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
