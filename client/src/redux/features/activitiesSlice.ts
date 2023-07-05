import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Activity, Empresa } from "../../utils/demodb";

interface initSate {
	activities: Array<Activity>
	originalCopy: Array<Activity>
	selectEmpresa: Empresa
	status: string
}

const initialState:initSate = {
	activities: [],
	originalCopy: [],
    selectEmpresa: {
		id: 0,
		name: '',
		nit: 0
	},
	status: 'idle'
};

///
export const fetchActivities = createAsyncThunk('activities/fetchActivities', async () => {
	try {
		const { data } = await axios(`http://localhost:3001/activities`);
		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
} ) 

export const getEmpresaActivities = createAsyncThunk('activities/getEmpresaActivities', async (id: number) => {
	try {
		const { data } = await axios(`http://localhost:3001/activities/${id}`);
		return data;
	} catch (error: any) {
		throw new Error(error.message);
	}
}) ;

const activitiesSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		resetActivities: (state) =>{
			state.activities = [];
			state.originalCopy = [];
			state.status = 'idle'
		},
		setEmpresa: (state, action: PayloadAction<Empresa>) =>{
			state.selectEmpresa = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchActivities.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(fetchActivities.fulfilled, (state, action: PayloadAction<Activity[]>) => {
			state.status = 'success';
			state.activities = action.payload;
			state.originalCopy = action.payload;
		});
		builder.addCase(fetchActivities.rejected, (state, action) => {
			state.status = 'rejected';
		});
		builder.addCase(getEmpresaActivities.pending, (state, action) => {
			state.status = 'loading';
		});
		builder.addCase(getEmpresaActivities.fulfilled, (state, action: PayloadAction<Activity[]>) => {
			state.status = 'success';
			state.activities = action.payload;
			state.originalCopy = action.payload;
		});
		builder.addCase(getEmpresaActivities.rejected, (state, action) => {
			state.status = 'rejected';
		});
	},
});

export const {
	resetActivities,
	setEmpresa
} = activitiesSlice.actions;
export default activitiesSlice.reducer;
export const allActivities = (state: RootState) =>	state.activities;
