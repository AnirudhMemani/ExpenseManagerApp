import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITagProps} from '../../components/types';
import {ITransactionProps} from '../types';

const initialState: ITransactionProps = {
  displayImageUri: undefined,
  tags: [
    {
      id: 1,
      tag: 'online🛒',
      isDummy: true,
    },
    {
      id: 2,
      tag: 'vacation🌳',
      isDummy: true,
    },
    {
      id: 3,
      tag: 'sports⚽',
      isDummy: true,
    },
    {
      id: 4,
      tag: 'business💰',
      isDummy: true,
    },
    {
      id: 5,
      tag: 'groceries🧋',
      isDummy: true,
    },
  ],
};

const TransactionSlice = createSlice({
  name: 'Transaction',
  initialState,
  reducers: {
    setDisplayImageUri: (state, action: PayloadAction<string | undefined>) => {
      state.displayImageUri = action.payload;
    },
    setTags: (state, action: PayloadAction<ITagProps[]>) => {
      state.tags = action.payload;
    },
  },
});

export const {setDisplayImageUri, setTags} = TransactionSlice.actions;
export default TransactionSlice.reducer;
