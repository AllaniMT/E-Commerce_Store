import { createStore } from "redux";

const initialState = {
  cart: [
    {
      product: {
        id: 4,
        name: "Volkswagen",
        price: 220,
        image: "/images/4.png",
        description:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
      },
      quantity: 8,
    },
  ],
};
function reducerFunction(theState) {
  return theState;
}
const store = createStore(reducerFunction, initialState);

export default store;
