import * as React from "react";

const MonoloithicLocationContext = React.createContext();


export const useLocation = () => {
    const context = React.useContext(MonoloithicLocationContext);

    if(context === undefined) {
        throw new Error("Could not find monolithic context");
    }

    return context;
}

const LOCATION_MODEL_DEFAULT = {
	location:"N/A",
    lat:0.0,
    lon:0.0
};

export const LOCATION_DISPATCH_ACTION = {
	SET_LOCATION: "SETLOCATION",
	SET_LON: "SET_LON",
    SET_LAT: "SET_LAT"
};

const locationReducer = (prevState, action) => {
	if(Array.isArray(action)) {
		return action.reduce((state, current) => {
			const func = reduction[current.action];

			if(func === undefined) {
				return state
			}

			return func(state, current);
		}, prevState);
	} else {
		const actionable = reduction[action.action];
	
		if(actionable === undefined) {
			console.warn(`Invalid UserDispatAction ${action.action}`);
		} else {
			return actionable(prevState, action);
		}
	}

	return prevState;
};

const updateLocation = (state, action) => {
	if(typeof action.payload === "string") {
		return {
			...state,
			location: action.payload
		};
	} else {
		console.warn(`Payload must be of type string`);
	}

	return state;
};

const updateLon = (state, action) => {
	if(typeof action.payload === "number") {
		return {
			...state,
			longitude: action.payload
		};
	} else {
		console.warn(`Payload must be of type string`);
	}

	return state;
};

const updateLat = (state, action) => {
	if(typeof action.payload === "number") {
		return {
			...state,
			latitude: action.payload
		};
	} else {
		console.warn(`Payload must be of type string`);
	}

	return state;
};

const reduction = {
	[LOCATION_DISPATCH_ACTION.SET_LOCATION]: updateLocation,
	[LOCATION_DISPATCH_ACTION.SET_LON]: updateLon,
    [LOCATION_DISPATCH_ACTION.SET_LAT]: updateLat
};

const LocationContext = ({ children }) => {

	const [ location, setLocation ] = React.useReducer(locationReducer, LOCATION_MODEL_DEFAULT);



	return (
		<MonoloithicLocationContext.Provider value={[ location, setLocation ]}>
			{ children }
		</MonoloithicLocationContext.Provider>
	)
 };

 export default LocationContext;

