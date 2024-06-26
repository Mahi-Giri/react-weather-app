import "./current_weather.css";

const Current_weather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div className="">
                    <p className="city">Pune</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src="icons/01d.png" alt="weather" className="weather-icon" />
            </div>
            <div className="bottom">
                <p className="temp">25°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">25°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">2 m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">25%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">25 hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Current_weather;
