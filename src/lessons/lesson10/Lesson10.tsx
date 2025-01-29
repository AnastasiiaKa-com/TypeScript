import { useEffect, useState } from "react";
import styles from "../../components/catInfo/CatInfo.module.css"
import Loader from "../../components/loader/Loader";
import CatInfo from "../../components/catInfo/CatInfo";
// Интерфейс для получения данных об изображении кота
interface ICatImageData {
  url: string;// URL изображения кота
}
// Интерфейс для получения фактов о котах
interface ICatFactData {
  fact: string;// Факт о котах
}
// Основной компонент для отображения котов и фактов
export default function Lesson10(): JSX.Element {
  let isExist:boolean = true;// Переменная для отслеживания существования фактов
  const [catImg, setCatImage] = useState<string>(""); // Состояние для хранения URL изображения кота
  const [catText, setCatText] = useState<string>("");// Состояние для хранения текста факта о котах
  const [isLoading, setIsLoading] = useState<boolean>(true); // Состояние для управления индикатором загрузки
  const [catArray, setCatArray] = useState<string[]>([]);// Состояние для хранения массива фактов о котах
   // Функция для получения изображения кота
  const fetchCatImage = async (): Promise<void> => {
    setIsLoading(true);// Устанавливаем индикатор загрузки в true
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );// Выполняем запрос к API для получения изображения
    const data: ICatImageData[] = await res.json(); // Парсим ответ в JSON
    setCatImage(data[0].url); // Устанавливаем URL изображения кота
    setIsLoading(false); // Устанавливаем индикатор загрузки в false
  };
    // Функция для удаления всех фактов о котах
  const delFacts = (): void => {
    setCatArray([]);// Очищаем массив фактов
    isExist = false;// Устанавливаем переменную isExist в false
  };
  // Функция для получения факта о котах
  const fetchTextCat = async (): Promise<void> => {
    const res = await fetch("https://catfact.ninja/fact"); // Выполняем запрос к API для получения факта
    const data: ICatFactData = await res.json();// Парсим ответ в JSON
    setCatText(data.fact);// Устанавливаем текст факта о котах
    setCatArray((prevArray) => [...prevArray, data.fact]);// Добавляем новый факт в массив
    isExist = true;// Устанавливаем переменную isExist в true
  };
  // Функция для получения изображения и факта о котах с задержкой
  const handleGetCat = (): void => {
    setIsLoading(true);// Устанавливаем индикатор загрузки в true
    setTimeout(() => {
      fetchCatImage(); // Получаем новое изображение
      fetchTextCat();// Получаем новый факт
    }, 1500);// Задержка в 1.5 секунды
  };

  // Эффект для первоначальной загрузки
  useEffect(() => {
    handleGetCat(); // Загружаем изображение и факт при монтировании компонента
  }, []);
    // Функция для получения нового изображения и факта о котах
  const handleGetCatAndFact = (): void => {
    fetchCatImage();
    fetchTextCat();
  };
  return (
    <div className={styles.catsWrapper}>
      {isLoading ? (// Проверяем, загружаются ли данные
        <Loader /> // Показываем индикатор загрузки
      ) : (
        <>
          <div className={styles.catWrapper}>
            <img src={catImg} alt="A random cat"
            className={styles.catImage}/> {/* Изображение кота */}
          </div>
        </>
      )}
      <button onClick={handleGetCatAndFact}>Get more info!</button>{/* Кнопка для получения новой информации */}
      
      {catArray.length > 0 && (// Проверяем, есть ли факты в массиве
        <button onClick={delFacts}>
          DELETE ALL DATA
        </button> // Кнопка для удаления фактов, если они существуют
      )}
      
      <ul>
        {catArray.map((fact, index) => (// Отображаем каждый факт о котах
          <CatInfo key={index} info={fact} /> // Компонент для отображения факта
        ))}
      </ul>
    </div>
  );} 