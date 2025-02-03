import Car from "../Car";
import Bike from "../../Bike/Bike";
import step from"./img/step.jpg";
export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="mercedes" color="black" />
      <Car brand="Opel" color="Yellow" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="green" />
      <Car brand="Audi" color="pink" />
     <h1>Первый способ загрузить изображение через импорт </h1>
     <img src={step} alt="" />
      <Bike gears={6} brand="Harley-Davidson" price={20000} />
      <Bike gears={5} brand="Yamaha" price={15000} />
      <Bike gears={6} brand="Ducati" price={25000} />
      <Bike gears={5} brand="Kawasaki" price={18000} />
      <Bike gears={6} brand="Honda" price={16000} />
      <h1> Второй способ загрузить изображение из папки public</h1>
      <img src="/public/Bike.jpg"alt="" />
    </div>
  );
}
