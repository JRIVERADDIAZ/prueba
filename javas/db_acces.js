const CONFING = { OK: 200, CREATED: 201, FOUND: 404 };

export const extraer = async() => {
  let data = fetch("javas/basededatos.json")
    .then((response) => {
        console.log(response.status)
    return  response.status === CONFING.OK ? response.json() : CONFING.FOUND;
    })
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((error) => console.log(error));
  return data;
};

console.log(extraer());
//

// const getCharacters = async() => {
//     const urlApi = 'javas/basededatos.json'
//     const res = await fetch(urlApi);
//     const {results} = await res.json();

//     const characters = results.map( character => {
//         return {
//             precio:characters.precio,
//             title:characters.title,
//             id:characters.id,
//             stock:characters.stock,
//             thumbnailUrl:characters.thumbnailUrl,
//             cantidad:characters.cantidad
//         }

//     })

//     return characters
// }
// console.log(getCharacters())
// // export default getCharacters;

// export default function getCharacters() {
//   const apiUrl = "javas/basededatos.json";
//   return fetch(apiUrl)
//     .then((res) => res.json())
//     .then((response) => {
//       const { data } = response;
//       const characters = data.map((character) => {
//         const { precio, title, id, stock, thumbnailUrl, cantidad } = character;
//         return { precio, title, id, stock, thumbnailUrl, cantidad };
//       });

//       return characters;
//     });
// }
// console.log(getCharacters())
