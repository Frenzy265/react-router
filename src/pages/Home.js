import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishlistItem from '../components/WishlistItem';

export default function Home() {
  return (
    <>
      <h1>Wishlist</h1>
      <Link to="/details">
        <WishlistItem title="Franzi" />
      </Link>
      <Link to="/add">
        <Button>
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
      </Link>
    </>
  );
}
