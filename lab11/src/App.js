import './App.css';
import lake from "./images/lake.jpg"

function App() {
  return (
    <div>
      <h1 style={{color: "olive", textAlign: "center"}}>Student's full name</h1>
      <h2 className='subtitle'>JavaScript XML</h2>
      <p>There is two types of components in ReactJS:</p>
      <ul>
          <li>function</li>
          <li>class</li>
      </ul>
      <figure className='introimg'>
        <img src={lake} />
      </figure>
      <footer className='footer'>
        introduction to ReactJS @ student's full name - 2026
      </footer>
    </div>
  );
}

export default App;
