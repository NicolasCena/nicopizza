import { CardServices } from '../components/CardServices';
import { dataStadistic } from '../Mock/dataServices';

export const StadisticsContainer = () => {

  return (
    <div id="stadistics_section">
        <div className="image_stadistic-section"></div>
        <div className="contact">
        {
            dataStadistic.map( (item,index) => 
            <CardServices 
                key={`service-${index}`} 
                textCard={item.text} 
                source={item.icono}
                counter={item.quantity}
            />
            )
        }
        </div>
    </div>
  )
}
