import axios from "axios";

export async function getCartItems(endpoint, setState) {
  try {
    const response = await axios.get(
      `https://66f3c87777b5e8897096ced1.mockapi.io/${endpoint}`
    );
    setState(response.data);
  } catch (error) {
    console.log(error);
  }
}
