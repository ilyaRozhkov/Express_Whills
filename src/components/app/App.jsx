
import Services from '../../service/getInfo';
import { useState, useEffect} from 'react';
import { YMaps, Map, ObjectManager } from '@pbe/react-yandex-maps';
import List from '../list/list';
import './App.scss'


 const App = () => {
  const service = new Services();
  const url = 'https://express-shina.ru/vacancy/geo-state';
  const [data, setData] = useState();
  const [point, setPoint] = useState();

  const getNewPoints=(el)=>{
    setPoint({center:[el.latitude, el.longitude], zoom: 15})
  }

  useEffect(()=>{
    const getData = async () => {
      const dataUser =await service.getInfo(url);
    setData(dataUser);

  };
  getData();
  },[])

    const collection = {
      type: "FeatureCollection",
      features: data?.map((el, id)=>{
        return {
          id: id,
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [el.latitude, el.longitude]
          },
          properties: {
            balloonContent: `
            <div>${el.address}</div>
          `
          }
        };
      })
    }


  return (
    <div className='main'>
      <div className='main_side'>
        <List items = {data} getItem = {getNewPoints}></List>
      </div>
      <div className='main_side'>
        <YMaps>
            <Map   width= '100%'
             height='100vh'
            state={point}
            defaultState={{ center: [55, 56], zoom: 5}}>
     <ObjectManager
            objects={{
              openBalloonOnClick: true
            }}
            clusters={{}}
            options={{
              clusterize: true,
              gridSize: 32
            }}
            defaultFeatures={collection}
            modules={[
              "objectManager.addon.objectsBalloon",
              "objectManager.addon.clustersBalloon"
            ]}
          />
    </Map> 
        </YMaps>
      </div>
    </div>

  )

  };

export default App;
