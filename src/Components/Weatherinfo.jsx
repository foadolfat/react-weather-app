const Weatherinfo = ({forecast}) => {

    return(
        <div style={{margin:'20px', padding:'10px', borderStyle: 'solid', 
                    borderRadius: '25px', boxShadow: '5px 5px', minWidth: '300px', height: '100%'}}>
            <h2>{forecast.dt_txt}</h2>
            <h2>{(1.8*(((forecast.main.temp))-273) + 32).toFixed(2)} F</h2>
            <h2><img src={forecast.weather[0].icon} alt="weather icon" /></h2>
        </div>
    )
}
export default Weatherinfo;