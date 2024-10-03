import React from 'react';
import ImgNavigate from './navigation/img-navigate/img-navigate';
import Our_Details from "./excursions/details/details"
import Video from './video/video';
import Activities_Details from './activities/details/details';
import Yacht_Details from './yacht-charter/details/details';
import Helicopter_Details from './helicopter/details/details';

export default function Home() {
  return (
    <main>
      <Video/>
      <ImgNavigate/>
      <Our_Details />
      <Activities_Details/>
      <Yacht_Details/>
      <Helicopter_Details/>
    </main>
  );
}
