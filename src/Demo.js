export const getPromise = (id) => {
  let url = `https://jsonplaceholder.typicode.com/todos/${id}`

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        // console.log(res)
        resolve(res.json())

      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const getSelectedUsers =  () => {
  const userIds = [1, 2, 3, 4, 5, 6]
  const userResponses = []
  for (let i = 0; i < userIds.length; i++) {
    const id = userIds[i]
    const res =  getPromise(id)
    userResponses.push(res)
  }
  // const userResponses = userIds.map(async (id) => {
  //   const res = await getUserById(id);
  //   return res;
  // });
  console.log({ userResponses })
  return userResponses
  // const promiseForUser1 = getPromise(1);
  // const promiseForUser2 = getPromise(2);
  // const promiseForUser3 = getPromise(3);
  // Promise.all([promiseForUser1, promiseForUser2, promiseForUser3])
  //   .then((res) => {
  //     console.log({ res });
  //   })
  //   .catch((err) => {
  //     console.log({ err });
  //   });
}


export const PromiseAll = () => {
  const promiseForUser1 = getPromise(1)
  const promiseForUser2 = getPromise(2)
  const promiseForUser3 = getPromise(3)
  Promise.all([promiseForUser1, promiseForUser2, promiseForUser3])
    .then((res) => {
     console.log(res)
      return res;

    })
    .catch((err) => {
      console.log({ err })
    })
}
