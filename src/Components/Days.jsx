import Weatherinfo from './Weatherinfo.jsx';
const Days = ({day}) => {

    return(
        <div >
            {day && (
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {
                        day.map( (forecast, index) => {
                            return(
                                <Weatherinfo forecast={forecast} key={index}/>
                            )
                        })
                    }
                </div>
            )}
        </div>
    )
}
export default Days;