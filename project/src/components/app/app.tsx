import MainScreen from '../main-screen/main-screen';


type AppScreenProps = {
  userName: string,
  placesCount: number,
  offerCount: number,
}


function App({userName, placesCount, offerCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen userName = {userName} placesCount = {placesCount} offerCount= {offerCount}/>
  );
}

export default App;
