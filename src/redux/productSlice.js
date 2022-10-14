import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	products: [],
	loading: false,
	error: false,
};

export const currentProduct = (state) => {
	const products = state.product.products;
	return products.length !== 0 ? products[0] : [];
};

export const getProducts = createAsyncThunk(
	"products/getProducts",
	async (_, thunkAPI) => {
		try {
			const res = await axios.get(
				"./data/stackline_frontend_assessment_data_2021.json"
			);
			return res.data;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state, _) => {
			state.loading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.loading = false;
		});
		builder.addCase(getProducts.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		});
	},
});

export default productSlice.reducer;
