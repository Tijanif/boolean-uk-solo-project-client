import create from 'zustand';
import env from 'react-dotenv';
// const apiUrl = process.env.API_URL;

const monthlyExpenses = [
  {
    id: 11,
    description: 'Electrity',
    cost: 100,
  },
  {
    id: 12,
    description: 'Internet',
    cost: 45,
  },
  {
    id: 13,
    description: 'Gym',
    cost: 60,
  },
  {
    id: 14,
    description: 'Netflix',
    cost: 12,
  },
  {
    id: 14,
    description: 'Rent',
    cost: 1200,
  },
  {
    id: 15,
    description: 'Savings',
    cost: 800,
  },
];
const useStore = create((set, get) => ({
  expenses: monthlyExpenses,
  setExpenses: (newExpenses) => {
    console.log('Getting expenses', get, get().expenses);
    set({ expenses: [...get().expenses, newExpenses] });
  },
  removeExpenses: (id) => {
    set({ expenses: get().expenses.filter((expense) => expense.id !== id) });
  },
  signUpUserCredentials: {
    name: null,
    email: null,
    password: null,
  },
  setSignUpUserCredentials: (signUpUserCredentials) =>
    set({ signUpUserCredentials }),
  signedUpUser: null,
  setSignupUser: async (signUpUserCredentials) => {
    const signupUser = await fetch(`${env.API_URL}signup`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signUpUserCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (signupUser) set({ loggedInUser: signupUser });
  },
  logOut: () => {
    set({
      loggedInUser: null,
    });
  },
  userCredentials: {
    email: null,
    password: null,
  },
  setUserCredentials: (userCredentials) => set({ userCredentials }),
  loggedInUser: null,
  setLoginUser: async (userCredentials) => {
    const loginUser = await fetch(`${env.API_URL}login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (loginUser) {
      set({ loggedInUser: loginUser.user });
    } else {
      alert('Wrong password');
    }
  },
  youValue: 0,
  setYouValue: (youValue) => {
    set({ youValue });
  },
  partnerValue: 0,
  setPartnerValue: (partnerValue) => {
    set({ partnerValue });
  },
}));

export default useStore;
