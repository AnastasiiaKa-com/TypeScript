import Bike from "../Bike/Bike";


export default function BikeSchop(): JSX.Element {
  return (
    <div>
      <h1>Bike Schop</h1>
      <h2>Bike🏍</h2>
      <Bike gears={6} brand="Harley-Davidson" price={20000} />
      <Bike gears={5} brand="Yamaha" price={15000} />
      <Bike gears={6} brand="Ducati" price={25000} />
      <Bike gears={5} brand="Kawasaki" price={18000} />
      <Bike gears={6} brand="Honda" price={16000} />
    </div>
  );
}
