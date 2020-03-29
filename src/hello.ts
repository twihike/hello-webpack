// eslint-disable-next-line
declare const _: any;

export default async (): Promise<void> => {
  console.log(_.join(['hello', 'ts'], '.'));
  await new Promise((resolve) => {
    console.log('hello.ts task start');
    setTimeout(resolve, 1000);
  });
  console.log('hello.ts task end');
};
