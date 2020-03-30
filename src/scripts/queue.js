
export function queue(arr, funcMapper, limit) {
  const restArr = arr.slice(limit);
  let index = limit;
  let inProgress = arr.length;
  return new Promise((resolve, reject) => {
    function doIt() {
      inProgress--;
      if (inProgress) {
        const item = restArr.shift();
        if (item) {
          const p = funcMapper(item, index++);
          p.then(res => doIt(res))
        }
      }
      else {
        console.log('resolve')
        resolve(true);
      }
    }
    for (let i = 0; i < limit; i++) {
      funcMapper(arr[i], i).then(_ => doIt());
    }
  })
}