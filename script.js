//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  let data = document.getElementById('ip').value;

  let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000)
  })

  let myPromise2 = (a) => new Promise((resolve, reject) => {
    let result = a * 2;
    setTimeout(() => {
      resolve(result);
    }, 2000)
  })

  let myPromise3 = (b) => new Promise((resolve, reject) => {
    let result1 = b - 3;
    setTimeout(() => {
      resolve(result1);
    }, 1000)
  })

  let myPromise4 = (c) => new Promise((resolve, reject) => {
    let result2 = c / 2;
    setTimeout(() => {
      resolve(result2);
    }, 1000)
  })

  let myPromise5 = (d) => new Promise((resolve, reject) => {
    let result3 = d + 10;
    setTimeout(() => {
      resolve(result3);
    }, 1000)
  })

  myPromise1.then((a) => {
    document.getElementById('output').innerText = `Result: ${a}`;
    return myPromise2(a);
  }).then((b) => {
    document.getElementById('output').innerText = `Result: ${b}`;
    return myPromise3(b);
  }).then((c) => {
    document.getElementById('output').innerText = `Result: ${c}`;
    return myPromise4(c);
  }).then((d) => {
    document.getElementById('output').innerText = `Result: ${d}`;
    return myPromise5(d);
  }).then((e) => {
    document.getElementById('output').innerText = `Final Result: ${Math.round(e * 100) / 100}`;
  })
});