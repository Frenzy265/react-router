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
        <Button>+</Button>
      </Link>
    </>
  );
}
