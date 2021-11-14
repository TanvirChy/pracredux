import { useState } from "react";
import "./App.css";
import DragAble from "./componensts/DragAble";

function App() {
  const [items, setItems] = useState({
    data: {
      items: {
        movableItem: {
          totalItem: 2,
          itemList: {
            [`item-1`]: {
              h: 10,
              w: 20,
              x: 0,
              y: 0,
            },
            [`item-2`]: {
              h: 10,
              w: 20,
              x: 40,
              y: 10,
            },
          },
        },
      },
    },
  });
  const {data:{items:{movableItem:{itemList}}}} = items
  
  return (
    <div className="App">
      {Object.keys(itemList).map((singItem)=>

        <DragAble classCard="card" oneItem={itemList[singItem]} />
        
      )
      }
      
    </div>
  );
}

export default App;
