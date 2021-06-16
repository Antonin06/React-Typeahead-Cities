import './App.css';
import Cities from './cities.json';
import {useState} from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import {saveData} from "./Json";

function App() {
    const [singleSelections, setSingleSelections] = useState([]);
    const [value, setValue] = useState('');

    console.log(singleSelections, "yolo ça marche");

    const writeJson = async(value) => {
        await saveData({value});
    }

  return (
    <div className="App">
        <Typeahead
            clearButton
            id="basic-typeahead-single"
            labelKey="name"
            maxResults={6}
            paginationText="Voir plus"
            onChange={setSingleSelections}
            options={Cities}
            placeholder="Votre Ville..."
            selected={singleSelections}
            renderMenuItemChildren={(city) => (
                <div>
                    <small>{city.name}</small>
                </div>
            )}
        />
        <input type="text"
           value={value}
           onChange={(e) => setValue(e.target.value)}
           onKeyPress={writeJson}
        />
    </div>
  );
}

export default App;
