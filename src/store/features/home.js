import { getHomeGoodPriceData } from '@/services/modules/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  async (info, store) => {
    const data = await getHomeGoodPriceData()
    store.dispatch(changeGoodPriceInfoAction(data))
    // return data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    // 高性价比房源
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
  //     state.goodPriceInfo = payload
  //   })
  // },
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
