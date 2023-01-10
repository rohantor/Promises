export const GetPromise =()=>{

 return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) =>{
       let jsonContain = res.json()
       console.log(jsonContain)
       return jsonContain})
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err)
      })
  })
}