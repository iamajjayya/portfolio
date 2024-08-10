import { NavigationDots} from "../components/NavigationDots"
import {Socialmedia} from "../components/Socialmedia"


export const AppWrap = (Component, idName, classNames) => {
  const HOC = () => (
    <div id={idName} className={`app__container ${classNames}`}>
      <Socialmedia />
      <div className="app__wrapper app__flex">
        <Component />
        <div className="copyright">
          <p className="p-text">@ 2024 ajjayya</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );

  return HOC;
};

export default AppWrap;
