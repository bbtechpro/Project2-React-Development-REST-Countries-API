// import { useState, useRef, useEffect } from "react";
// import { FaChevronDown } from "react-icons/fa";

// export default function RegionFilter({ region, setRegion }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

//   const dropdownRef = useRef();

//   const handleSelect = (val) => {
//     setRegion(val);
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="region-filter" ref={dropdownRef}>
//       <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
//         <span>{region || "Filter by Region"}</span>
//         <FaChevronDown
//           style={{
//             transition: "transform 0.3s ease",
//             transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//           }}
//         />
//       </div>

//       {isOpen && (
//         <ul className="dropdown-options">
//           <li
//             className={region === "" ? "active" : ""}
//             onClick={() => handleSelect("")}
//           >
//             All Regions
//           </li>
//           {regions.map((r) => (
//             <li
//               key={r}
//               className={r === region ? "active" : ""}
//               onClick={() => handleSelect(r)}
//             >
//               {r}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
