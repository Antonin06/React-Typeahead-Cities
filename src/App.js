import './App.css';
import Cities from './cities.json';
import {useState} from "react";
import { Typeahead } from 'react-bootstrap-typeahead';

function App() {
    const [singleSelections, setSingleSelections] = useState([]);
    console.log(singleSelections, "yolo ça marche");
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
    </div>
  );
}

export default App;
