import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  Bio,
  Mbr,
  Daf,
  BeltPress,
  Alarm,
  PumpDetails,
  RootLayout,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='bio' element={<Bio />} />
          <Route path='daf' element={<Daf />} />
          <Route path='mbr' element={<Mbr />} />
          <Route path='beltPress' element={<BeltPress />} />
          <Route path='alarm' element={<Alarm />} />
          <Route path='pumpDetails' element={<PumpDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
