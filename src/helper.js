import { get } from './services'

export const getUsers = async () => {
  try {
    const usersList = await get('https://jsonplaceholder.typicode.com/todos/')
    return usersList
  } catch (error) {
    return error
  }
}
export const getUserById = async (id) => {
  try {
    const user = await get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return user
  } catch (error) {
    return error
  }
}

export const getSelectedUsers = async () => {
  const userIds = [1, 2, 3]
  const userResponses = []
  for (let i = 0; i < userIds.length; i++) {
    const id = userIds[i]
    const res = await getUserById(id)
    userResponses.push(res)
  }
  // const userResponses = userIds.map(async (id) => {
  //   const res = await getUserById(id);
  //   return res;
  // });
  console.log({ userResponses })
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

export const getPromise = (id) => {
  const promiseForUser = new Promise(async (res, rej) => {
    const user = await getUserById(id)
    if (id === 2) {
      rej(user)
      return
    }
    res(user)
  })
  return promiseForUser
}
