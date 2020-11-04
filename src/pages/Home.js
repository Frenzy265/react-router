import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import WishlistItem from '../components/WishlistItem';
import { getLists } from '../Api/lists';

export default function Home() {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <>
      <h1>Wishlists</h1>
      <div>
        {lists?.map((list) => (
          <Link key={list.id} to={`/${list.id}`}>
            <WishlistItem title={list.title} />
          </Link>
        ))}
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
      </div>
    </>
  );
}
