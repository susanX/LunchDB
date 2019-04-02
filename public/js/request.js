// new request function
// - modularise stuff
const requestFunction = (method, url, callBack, data) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const result = JSON.parse(xhr.responseText);
      callBack(result);
    }
  };
  xhr.open(method, url, true);
  xhr.send(data);
}




// old functions - one for GET, one for POST
// const postRequest = (formData) => {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const result = JSON.parse(xhr.responseText);
      
//       // parse the result???
//       // console.log(result);
//       insertInDOM(result);

//     }
//   };
//   xhr.open("POST", '/sendDetails', true);
//   xhr.send(formData);
// };

// // populate select from db on load
// const getRequest = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const result = JSON.parse(xhr.responseText);
//       // parse the result???
//       populateSelect(result);

//     }
//   };
//   xhr.open("GET", '/getFoods', true);
//   xhr.send();
// };