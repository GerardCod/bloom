import { createContext, useCallback, useContext, useState } from "react";
import { OfflineContext } from "../offline/offline.context";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
    const [ weather, setWeather] = useState({main: '', description: ''});
    const { online } = useContext(OfflineContext);

    const getCurrentWeather = useCallback(async function getWeather() {
        if (online) {
            const rawData = await fetch('api.openweathermap.org/data/2.5/weather?q=Tehuacan&appid=d4bc67030b98e74dd4d3503d3e2d5c32');
            const jsonData = await rawData.json();
            if (jsonData) {
                const weatherObj = jsonData.weather[0];
                const currentWeather = { main: weatherObj.main, description: weatherObj.description };
                setWeather(currentWeather);
                localStorage.setItem('currentWeather', JSON.stringify(currentWeather));
            }
        } else {
            if (localStorage.getItem('currentWeather')) {
                const currentWeather = JSON.parse(localStorage.getItem(''));
                setWeather(currentWeather);
            }
        }
    });

    const childProps = {
        weather,
        getCurrentWeather,
    }

    return (
        <WeatherContext.Provider value={childProps}>
            { children }
        </WeatherContext.Provider>
    );
}
