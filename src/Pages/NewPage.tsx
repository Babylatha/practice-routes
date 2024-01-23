// import React from "react";

// interface props {
//   title: string;
//   subText: string;
//   handleClick?: any;
//   data: any;
// }

// export default function NewPage({ title, subText, handleClick, data }: props) {
//   return (
//     <div style={{ border: "1px solid red", padding: "30px 50px" }}>
//       <div>Title: {title}</div>
//       <div>subText: {subText}</div>
//       <div>{data.tit}</div>
//       <div> {data.heading}</div>
//       <div> {data.subtext}</div>
//       <button
//         onClick={() => {
//           handleClick("Hello guys! welcome to our props session");
//         }}
//       >
//         Generate Text
//       </button>
//     </div>
//   );
// }

import React from "react";

interface props {
  title: string;
  subText: string;
  handleClick?: any;
  data: any;
}
export default function NewPage({ title, subText, handleClick, data }: props) {
  return (
    <>
      <div>Title:{title}</div>
      <div>subText:{subText}</div>
      <button
        onClick={() => {
          handleClick("Hello guys!Welcome to props");
        }}
      >
        Generate text
      </button>
    </>
  );
}
