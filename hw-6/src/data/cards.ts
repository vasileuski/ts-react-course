import { ICard } from "../models";

// const [cards, setCards] = useState<ICard[]>();

//   async function fetchCards() {
//     const response = await axios.get<ICard[]>(
//       "https://fakestoreapi.com/products"
//     );
//     setCards(response.data);
//   }

//   useEffect(() => {
//     fetchCards();
//   }, []);

export const cards: ICard[] = [
  {
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    text: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    date: "2022-03-11",
    lesson_num: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    author: 2,
  },
  {
    id: 2,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    text: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    date: "2033-01-22",
    lesson_num: 6,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    author: 7,
  },
  {
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    text: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    date: "2019-11-01",
    lesson_num: 0,
    title: "Mens Cotton Jacket",
    author: 3,
  },
  {
    id: 4,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    text: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    date: "2018-01-02",
    lesson_num: 9,
    title: "Mens Casual Slim Fit",
    author: 9,
  },
];
