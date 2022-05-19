// import React from 'react';

// class Form extends React.Component {

//     onChange = evt => {
//         const { text, value } = evt.target
//         this.props.onChange({ text, value })
//       }
//       onSubmit = evt => {
//         evt.preventDefault()
//         this.props.onSubmit()
//       }
   

//     render() {
//         const { values } = this.props
//         return (
//             <>

//                 <form id='yoda-form' onSubmit={this.onSubmit}>
//                     <input
//                         onChange={this.onChange}
//                         placeholder="Type some stuff"
//                         name="name"
//                         type="text"
//                         value={values.text}
//                     >
//                     </input>
                    
//                 </form>
//                 <button id="btn" onClick={this.onSubmit}>Send it!</button>

//             <div className="response-div">
//                 <h2>This is the response from the server!</h2>
//                 </div>
                


//             </>
//         )
//     }




// }

// export default Form