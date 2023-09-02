import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/pluck
// Example 2: Pluck nested properties

const srcObj$ = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  //will return undefined when no job is found
  { name: 'Sarah', age: 35 },
]);
//grab title property under job
const example = srcObj$.pipe(pluck('job', 'title'));
const subscribe = example.subscribe((val) => console.log(val));
//output: "Developer" , undefined
