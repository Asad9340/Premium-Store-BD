import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';
function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-5xl text-center my-10 font-bold bg-[#2D2D2D] text-white p-6 rounded-lg">
        Streaming Sites
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {data.map(item => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
