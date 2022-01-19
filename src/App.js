import './App.css';
import Card from './components/card'
import Layout from './components/layouts';
import { useSelector, useDispatch } from "react-redux";
import PhotoView from './components/photos/photo-view';
import Text from './components/typography/text';
import { useEffect,useState } from 'react';
import { fetchImages,updateLikes,closeImage } from './redux/actions';
import { HeartFillIcon, HeartLightIcon, CloseIcon } from './assets/api/svg';
import { Loading } from './components/loading';

function App() {
  let randomDate = '';
  const data = useSelector(  state => ( state?.imageFetch));
  const {loading} = useSelector(  state => (  state?.loadingReducer));

  const dispatch = useDispatch();
  let list = data.photos;
  const updateLike = (position) => {
    dispatch(updateLikes({id: position}));
  }
  
  const randomDateGen = (start, end) => {
    randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  let [activeMobileScreen, setActiveMobileScreen] = useState(false);

  const close = () => {
    dispatch(closeImage());
  }
  useEffect(() => {
    dispatch(fetchImages())
    if(window.screen.width <= 690) setActiveMobileScreen(true);
    // console.log(activeMobileScreen);
    // randomDateGen(new Date(2012, 0, 1), new Date());
  }, ['dispatch','setActiveMobileScreen']);
  
  return (
    <Layout>
      <div className="flex flex-wrap ">
        <div className={`flex flex-wrap lg:p-10 md:p-6 p-4 w-full mb-4 ${data.isOpen ? 'lg:w-8/12 md:w-9/12 w-full' : ''}`}>
          {
            loading ? <div className="flex flex-wrap ">
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </div> : 
              list.map((item,index) => {
                return (
                  <Card key={index} attr={`${data.isOpen ? 'lg:w-1/3' : 'lg:w-1/4'} md:w-1/3 sm:w-1/2 w-full p-5 `} data={item} position={index}/>
                );
              })
          }
        </div>
        <div className={ data.isOpen ? ` lg:w-4/12 md:w-2/5 w-full mb-4 transition-all bg-black h-full` : 'hidden '}>
          <div className={`fixed top-0 bg-white`} style={{height:'100vh'}}>
            <div className="flex justify-end p-3 cursor-pointer" onClick={close}><CloseIcon /></div>
            <div className="bg-white p-5 lg:mx-5">
              <PhotoView src={data.photo?.[10]} size="w-full h-56"/>
              <div className="flex justify-between items-center my-3">
                <Text attr="text-md" value={data.photo?.[1]}/>
                <div className="animate-pulse cursor-pointer" onClick={() => updateLike(data.id)}>
                {data.photo?.[13] ? 
                  <HeartFillIcon />
                  :
                  <HeartLightIcon />
                  }
                </div>
              </div>
              <div className="h-72 overflow-y-scroll">
                <Text attr="text-sm font-bold" value="Information"/>
                <div className="flex justify-between my-3">
                  <Text attr="text-sm" value="Copyright"/>
                  <Text attr="text-sm" value={data.photo?.copyright}/>
                </div>
                <div className="flex justify-between my-3">
                  <Text attr="text-sm" value="Date"/>
                  <Text attr="text-sm" value={randomDate}/>
                </div>
                <div className=" my-5">
                  <div className="text-sm" dangerouslySetInnerHTML={{ __html: data.photo?.[3]}}></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}

export default App;
