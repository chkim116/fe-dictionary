---
title: 'Parameter (매개변수)'
date: '2024-02-10'
spoiler: 'parameter는 함수를 정의할 때 괄호 안에 작성된 변수를 의미합니다.'
category: ''
related: ['Argument']
---

## What?

`parameter`(매개변수)는 함수를 정의할 때 괄호 안에 작성된 변수를 의미합니다.

`argument`(인수)와 개념이 헷갈릴 수 있는데, parameter가 사용하는 변수(variable)의 개념이라면 argument는 넘기는 값(value)의 개념 의미합니다.

## Example

```js
// 함수 정의시 괄호 안에 작성한 변수는 parameter(매개변수)
function fn(parameter1, parameter2) {
  return parameter1 + parameter2;
}

const argument1 = 1;
const argument2 = 1;

// 실제로 호출할 때 넘기는 값을 argument(인수)
fn(argument1, argument1); // 2
```

## Refs

- [MDN - Parameter](https://developer.mozilla.org/ko/docs/Glossary/Parameter)
