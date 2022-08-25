import "./App.scss";
import { gridItems } from "./utils";

function App() {
  return (
    <main className="App">
      <div className="grid__container">
        {gridItems.map((item) => (
          <div className={`grid__item ${item.color} ${item.id}`} key={item.id}>
           {item.img && <img src={item.img} alt={item.img}  className='absolut-img'/>} 
            <div className="grid__top--container">
              <div className="grid__top-left">
                <img
                  src={item.profilePhoto}
                  alt={item.profilePhoto}
                  className="grid_img-profile"
                />
              </div>
              <div className=" grid__top-right">
                <h1 className={`grid__top-title ${item.color}`}>{item.name}</h1>
                <span className={`grid__top-subtitle ${item.color}`}>
                  {item.position}
                </span>
              </div>
            </div>
            <div className="grid__bottom--container">
              <p className={`grid__bottom--description ${item.color}`}>{item.text}</p>
              <p className={`grid__bottom--description-second ${item.color}`}>{item.subText}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
