import create from 'zustand';
import env from 'react-dotenv';
// const apiUrl = process.env.API_URL;

const monthlyExpenses = [
  {
    description: 'Electrity',
    cost: 100,
  },
  {
    description: 'Internet',
    cost: 45,
  },
  {
    description: 'Gym',
    cost: 60,
  },
  {
    description: 'Netflix',
    cost: 12,
  },
  {
    description: 'Rent',
    cost: 1200,
  },
  {
    description: 'Savings',
    cost: 800,
  },
];
const useStore = create((set, get) => ({
  // MAX_INCOME: 75000,
  expenses: monthlyExpenses,
  setExpenses: (expenses) => set({ ...expenses, expenses }),
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
