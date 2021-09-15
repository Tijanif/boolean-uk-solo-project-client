import React from 'react';
import create from 'zustand';

const useStore = create((set, get) => ({
  modal: '',
  setModal: (modal) => set({ modal }),
}));

export default useStore;
