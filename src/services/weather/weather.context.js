import { createContext, useCallback, useContext } from "react";
import { OfflineContext } from "../offline/offline.context";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
    const { online } = useContext(OfflineContext);

    const getCurrentWeather = useCallback(async function getWeather() {
        try {
            let weather = {main: '', description: ''};
            if (online) {
                const rawData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Tehuacan&appid=d4bc67030b98e74dd4d3503d3e2d5c32');
                const jsonData = await rawData.json();
                if (jsonData) {
                    const weatherObj = jsonData.weather[0];
                    const currentWeather = { main: weatherObj.main, description: weatherObj.description };
                    weather = currentWeather;
                    localStorage.setItem('currentWeather', JSON.stringify(currentWeather));
                }
            } else {
                if (localStorage.getItem('currentWeather')) {
                    const currentWeather = JSON.parse(localStorage.getItem(''));
                    weather = currentWeather;
                }
            }
            return weather
        } catch (error) {
            return error;
        }
    }, [online]);

    const childProps = {
        getCurrentWeather,
    }

    return (
        <WeatherContext.Provider value={childProps}>
            { children }
        </WeatherContext.Provider>
    );
}
