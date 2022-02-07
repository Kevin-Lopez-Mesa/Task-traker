import Header from "./components/Header";

function App() {

  const name = 'Kevin';
  const x = true;

  return (
    <div className="container">
      
        <h1>Oscar Mike!!</h1>

        <h2>Hello {name} {x ? 'yes' : 'no'}</h2>

        <Header year={2023}/> 
      
    </div>
  );
}

export default App;
