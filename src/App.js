import './App.css';
import Card from './components/card'
import Layout from './components/layouts';
import { useSelector, useDispatch } from "react-redux";
import PhotoView from './components/photos/photo-view';
import Text from './components/typography/text';
import { useEffect } from 'react';
import { fetchImages,updateLikes } from './redux/actions';
import { HeartFillIcon, HeartLightIcon } from './assets/api/svg';
import { Loading } from './components/loading';

function App() {
  const data = useSelector(  state => (  state.imageFetch));
  const {loading} = useSelector(  state => (  state.loadingReducer));
  const dispatch = useDispatch();
  let list = data.photos;
  const updateLike = () => {
    dispatch(updateLikes());
  }

  useEffect(() => {
    dispatch(fetchImages())
  }, ['dispatch']);
  return (
    <Layout>
      <div className="flex flex-wrap ">
        <div className={`flex flex-wrap p-10 w-full mb-4 transition-all ${data.isOpen ? 'lg:w-8/12 md:w-9/12' : ''}`}>
          {
            loading ? <div className="flex flex-wrap ">
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
        <div className={ data.isOpen ? 'lg:w-4/12 md:w-2/5 mb-4' : 'hidden transition-all'}>
          <div className="bg-white p-5 lg:mx-5 h-full">
            <PhotoView src={data.photo?.url} size="w-full h-56"/>
            <div className="flex justify-between items-center my-3">
              <Text attr="text-md" value={data.photo?.title}/>
              <div className="animate-pulse cursor-pointer" onClick={updateLike}>
              {data.photo?.likes ? 
                <HeartFillIcon />
                :
                <HeartLightIcon />
                }
              </div>
            </div>
            <div className="">
              <Text attr="text-sm font-bold" value="Information"/>
              <div className="flex justify-between my-3">
                <Text attr="text-sm" value="Copyright"/>
                <Text attr="text-sm" value={data.photo?.copyright}/>
              </div>
              <div className="flex justify-between my-3">
                <Text attr="text-sm" value="Date"/>
                <Text attr="text-sm" value={data.photo?.date}/>
              </div>
              <div className=" my-5">
                <Text attr="text-sm" value={data.photo?.explanation}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}

export default App;
