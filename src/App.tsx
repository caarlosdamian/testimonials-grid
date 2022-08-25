import "./App.scss";
import { gridItems } from "./utils";

function App() {
  return (
    <main className="App">
      <div className="grid__container">
        {gridItems.map((item) => (
          <div className={`grid__item ${item.color} ${item.id}`} key={item.id}>
            <div className="grid__top--container">
              <div className="grid__top-left">
                <img src="" alt="" className="grid_img-profile" />
              </div>
              <div className=" grid__top-right">
                <h1 className="grid__top-title">{item.name}</h1>
                <span className="grid__top-subtitle">{item.position}</span>
              </div>
            </div>
            <div className="grid__bottom--container"></div>
            {item.name}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
