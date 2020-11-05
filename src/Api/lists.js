export async function getLists() {
  const response = await fetch('http://localhost:5000/lists');
  const lists = await response.json();
  return lists;
}

export async function getListById(id) {
  const response = await fetch(`http://localhost:5000/lists/${id}`);
  const list = await response.json();
  return list;
}

export async function deleteListById(id) {
  await fetch(`http://localhost:5000/lists/${id}`, { method: 'DELETE' });
}

export async function postListById(list) {
  const response = await fetch('http://localhost:5000/lists', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(list),
  });
  const newList = await response.json();
  return newList;
}
