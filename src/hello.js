export default function() {
  console.log(_.join(['hello', 'js'], '.'));
  new Promise(resolve => {
    setTimeout(() => {
      console.log('hello.js task start');
      resolve();
    }, 2000);
  }).then(() => {
    console.log('hello.js task end');
  });
}
