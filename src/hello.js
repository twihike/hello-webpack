export default function () {
  console.log(_.join(['hello', 'js'], '.'));
  new Promise((resolve) => {
    console.log('hello.js task start');
    setTimeout(resolve, 2000);
  }).then(() => {
    console.log('hello.js task end');
  });
}
