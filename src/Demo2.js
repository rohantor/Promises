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

export const GetPromiseById = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        let jsonContain = res.json()
        console.log(jsonContain)
        return jsonContain
      })
      .then((res) => resolve(res))
      .catch((err) => {
        reject(err)
      })
  })
}
export const GetPromiseArray = (arr) => {
  let PromiseArray = []
  for(let i = 0 ; i<arr.length;i++){
PromiseArray.push(GetPromiseById(arr[i]))
  }
return PromiseArray;
}

export const GetPromiseAll = async(arr) => {
  return Promise.all([...GetPromiseArray(arr)])
    .then((res) => {
      console.log({ res });
      return res;
    })
    .catch((err) => {
      console.log({ err });
    });
}



