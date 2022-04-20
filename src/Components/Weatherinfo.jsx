
const Weatherinfo = ({forecast}) => {
    return(
        <div>
            <h2>{forecast.dt_txt}</h2>
            <h2>{1.8*(((forecast.main.temp))-273) + 32}</h2>
            <h2>{forecast.weather[0].icon}</h2>
        </div>
    )
}
export default Weatherinfo;