// import { useState } from "react";
// import data from "./data";
// import './style.css';

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }
//   const ToggleSlider = () => {
//     const [checked, setChecked] = useState(false);

//     const handleToggle = () => {
//       setChecked(!checked);
//     };

//     function handleMultiSelection(getCurrentId) {
//       let cpyMutiple = [...multiple];
//       const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

//       console.log(findIndexOfCurrentId);
//       if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
//       else cpyMutiple.splice(findIndexOfCurrentId, 1);

//       setMultiple(cpyMutiple);
//     }

//     console.log(selected, multiple);
//     return (
//       <>
//         <div className="toggle-slider">
//           <input
//             type="checkbox"
//             id="toggle"
//           checked={checked}
//           onChange={handleToggle}
//           />
//           <label htmlFor="toggle" className="slider" />
//         </div>

//         <div className="acc-wrapper">
//           <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//             Enable Multi Selection
//           </button>
//           <input type="checkbox" onChange={() => setEnableMultiSelection(!enableMultiSelection)} />
//           <div className="accordian">
//             {data && data.length > 0 ? (
//               data.map((dataItem) => (
//                 <div className="item">
//                   <div
//                     onChange={
//                       enableMultiSelection
//                         ? () => handleMultiSelection(dataItem.id)
//                         : () => handleSingleSelection(dataItem.id)
//                     }
//                     className="title"
//                   >
//                     <h3>{dataItem.question}</h3>
//                     <span>+</span>
//                   </div>
//                   {enableMultiSelection
//                     ? multiple.indexOf(dataItem.id) !== -1 && (
//                       <div className="acc-content ">{dataItem.answer}</div>
//                     )
//                     : selected === dataItem.id && (
//                       <div className="acc-content ">{dataItem.answer}</div>
//                     )}
//                   {selected === dataItem.id ||
//               multiple.indexOf(dataItem.id) !== -1 ? (
//                 <div className="content">{dataItem.answer}</div>
//               ) : null}
//                 </div>
//               ))
//             ) : (
//               <div>No data found !</div>
//             )}
//           </div>
//         </div>
//       </>
//     );
//   }

// }
import React, { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [checked, setChecked] = useState(false); // State for the toggle slider

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  const handleToggle = () => {
    setChecked(!checked);
    setEnableMultiSelection(!enableMultiSelection); // Toggle multi-selection mode
  };
  const toggleContent = (id) => {
    setSelected(selected === id ? null : id);
  };

  console.log(selected, multiple);
  return (
    <>
      <div className="toggle-slider">
        <div className="multipleSelection">
          <h3>Multiple Selection</h3>
        </div>

        <input
          type="checkbox"
          id="toggle"
          checked={checked}
          onChange={handleToggle}
        />
        <label htmlFor="toggle" className="slider" />
      </div>

      <div className="acc-wrapper">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item closed">
                <div
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span onClick={() => toggleContent(dataItem.id)}>
                    {selected === dataItem.id ? "-" : "+"}
                  </span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content ">{dataItem.answer}</div>
                    )}
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found !</div>
          )}
        </div>
      </div>
    </>
  );
}
