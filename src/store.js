import create from 'zustand';
import env from 'react-dotenv';

const monthlyExpenses = [
  {
    id: 11,
    description: 'Electrity',
    cost: 100,
    assignTo: '',
  },
  {
    id: 12,
    description: 'Internet',
    cost: 45,
    assignTo: '',
  },
  {
    id: 13,
    description: 'Gym',
    cost: 60,
    assignTo: '',
  },
  {
    id: 14,
    description: 'Netflix',
    cost: 12,
    assignTo: '',
  },
  {
    id: 14,
    description: 'Rent',
    cost: 1200,
    assignTo: '',
  },
  {
    id: 15,
    description: 'Savings',
    cost: 800,
    assignTo: '',
  },
];

const useStore = create((set, get) => ({
  expenses: monthlyExpenses,
  setExpenses: async (newExpenses) => {
    console.log('Getting expenses', get, get().expenses);
    const newExpense = await fetch(`${env.API_URL}expense/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpenses),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
    if (newExpense) set({ expenses: [...get().expenses, newExpenses] });
  },
  removeExpenses: (id) => {
    set({ expenses: get().expenses.filter((expense) => expense.id !== id) });
  },
  assignExpenses: async (expenseId, payer) => {
    const updatedExpense = await fetch(`${env.API_URL}expenses/expenseId`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedExpense),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
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
      console.log('logging response', response);
      if (response.hasOwnProperty('ok')) {
        return null;
      }
      return response.json();
    });
    console.log('Loggin loginUser', loginUser);
    if (loginUser) {
      set({ loggedInUser: loginUser });
    } else {
      set({ loggedInUser: null });
      console.log('It was null');
    }
  },
  setLogoutUser: async () => {
    const logUserOut = await fetch(`${env.API_URL}logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (logUserOut) {
      set({ loggedInUser: null });
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
  totalExpensesYou: [],
  setTotalExpensesYou: (totalExpensesYou) => {
    set({ totalExpensesYou });
  },
  totalExpensesPartner: [],
  setTotalExpensesPartner: (totalExpensesPartner) => {
    set({ totalExpensesPartner });
  },
}));

export default useStore;
