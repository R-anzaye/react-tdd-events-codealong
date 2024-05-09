import { useState } from 'react';

function App() {
  const [ toppingChecked, setToppingChecked ] = useState(false);

  const toggleTopping = (e) => setToppingChecked(e.target.checked);

  return (
    <div>
      <h1>Create Your Pizza</h1>
      <input 
        type="checkbox" 
        id="topping" 
        checked={toppingChecked}
        aria-checked={toppingChecked}
        onChange={toggleTopping}
      />
      <label htmlFor="topping">Add your favorite topping</label>

      <h2>Your Pizza:</h2>
      <ul>
        <li>Cheese</li>
        {toppingChecked ? <li>Your selected topping</li> : null}
      </ul>

    </div>
  );
}

export default App;
