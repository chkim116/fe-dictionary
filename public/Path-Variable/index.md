---
title: 'Path Variable (경로 변수)'
date: '2024-02-10'
spoiler: 'Path Variable(경로 변수)는 동적 URL 경로를 의미합니다.'
category: ''
related: ['Query-Parameter']
---

## What?

`path variable`(경로 변수)는 RESTful API에서 자원을 식별하고 요청을 처리하는 데 사용되는 변수입니다. 일반적으로 URL 경로의 특정 부분에 포함되며, 변수의 값을 변경하여 다른 자원을 요청할 수 있습니다.

경로 변수는 주로 RESTful API에서 사용되며, URL의 일부로서 자원을 식별하고 조작하는 데 유용합니다.

예를 들어, `/users/{userId}`와 같은 경로에서 `userId`는 사용자 ID에 해당하는 변수입니다. 클라이언트가 이러한 경로를 요청할 때 실제 사용자 ID로 치환되어 해당 사용자의 정보를 가져오는 데 사용됩니다.

## Example

```js
// JavaScript에서 경로 변수를 사용하는 예시
const userId = '123';

fetch(`/users/${userId}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```
