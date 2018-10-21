declare var _: any;

export default async () => {
  console.log(_.join(['hello', 'ts'], '.'));
  await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      console.log('hello.ts task start');
      resolve();
    }, 1000);
  });
  console.log('hello.ts task end');
};
