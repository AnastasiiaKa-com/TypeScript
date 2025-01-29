interface Props {
   gears:number;
    brand:string;
    price:number;
}
export default function Bike(props:Props): JSX.Element{
    const{gears,brand,price} = props;
    return(
        <div >
            Gears:{gears} Brand: {brand} Price: {price}
        </div>
    )
}