const REACT_APP_BASE_URL = 'https://fe-diplom.herokuapp.com';

export const requestLastRoutes = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/routes/last`);
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    const data = await response.json();
    return data;
}

export const requestCities = async (name) => {
    const response = await fetch(`${REACT_APP_BASE_URL}/routes/cities?name=${name}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    const data = await response.json();
    return data
}

export const requestRoutes = async (params) => {
    let routesURL = `${REACT_APP_BASE_URL}/routes?from_city_id=${params.from_city_id}&to_city_id=${params.to_city_id}`
    if (params.date_start) routesURL = `${routesURL}&date_start=${params.date_start}`
    if (params.date_end) routesURL = `${routesURL}&date_end=${params.date_end}`
    const response = await fetch(routesURL);
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    const data = await response.json();
    return data
}

export const requestSeats = async (id, filters) => {
    let seatsURL = `${REACT_APP_BASE_URL}/routes/${id}/seats?`
    if (filters.have_wifi) seatsURL += `&have_wifi=true`;
    if (filters.is_express) seatsURL += `&is_express=true`;
    if (filters.have_first_class) seatsURL += `&have_first_class=true`
    if (filters.have_second_class) seatsURL += `&have_second_class=true`
    if (filters.have_third_class) seatsURL += `&have_third_class=true`
    if (filters.have_fourth_class) seatsURL += `&have_fourth_class=true`
    const response = await fetch(seatsURL);
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    const data = await response.json();
    return data
}

export const setSubscription = async (email) => {
    const response = await fetch(`${REACT_APP_BASE_URL}/subscribe?email=${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    };
}

export const setOrder = async (id, seats, user) => {
    const data = {
        user: user,
        departure: {
            route_direction_id: id,
            seats: seats
        }
    }
    const response = await fetch(`${REACT_APP_BASE_URL}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    console.log(data)
}
