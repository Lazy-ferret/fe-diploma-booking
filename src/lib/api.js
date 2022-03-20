const REACT_APP_BASE_URL = 'https://fe-diplom.herokuapp.com'

export const requestLastRoutes = async () => {
    const response = await fetch(`${REACT_APP_BASE_URL}/routes/last`);
    if (!response.ok) {
        throw new Error(response.statusText);
    };
    const data = await response.json();
    console.log(data);
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
    // if (params.filters.have_first_class) routesURL += `&have_first_class=true`

    // {
    //      routesURL += `&have_first_class=${have_first_class}`;
    //      routesURL += `&have_second_class=${have_second_class}`;
    //      routesURL += `&have_third_class=${have_third_class}`;
    //      routesURL += `&have_fourth_class=${have_fourth_class}`;
    //      routesURL += `&have_wifi=${have_wifi}`;
    //      routesURL += `&is_express=${is_express}`;
    // }

    console.log(routesURL)
    
    
    const response = await fetch(routesURL);
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

