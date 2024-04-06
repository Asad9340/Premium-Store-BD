import { useLoaderData } from 'react-router-dom';
function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {
        data.map
      }
    </div>
  );
}

export default Home;
