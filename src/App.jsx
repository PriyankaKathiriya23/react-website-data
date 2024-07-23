import { CORE_CONCEPTS, EXAMPLES } from "./data"; 
import { useState } from "react";
import Header from "./components/header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/examples";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      
      <Header />
      <main>
        <section id ="core-concepts">
          <ul>
           {CORE_CONCEPTS.map(
              (conceptItem) => <CoreConcept key ={conceptItem.title} {...conceptItem}/>
              )
            }
            
          </ul>
        </section>
        <section id= "examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
              </menu>
            </section>
            {!selectedTopic ? <p>Please select the topic</p>  : <div id = 'tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
               <h4>{EXAMPLES[selectedTopic].description}</h4>
               <p>{EXAMPLES[selectedTopic].code}</p>
            </div>}
           
      </main>
    </div>
  );
}

export default App;
