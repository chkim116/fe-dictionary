---
title: 'Query Parameter (쿼리파라미터)'
date: '2024-02-10'
spoiler: 'queryParameter는 URL에서 정보를 전달하는 데 사용되는 매개변수입니다.'
category: ''
related: ['Path-Variable']
---

## What?

`queryParameter`(쿼리파라미터)는 URL에 정보를 전달하는 데 사용되는 매개변수입니다. 일반적으로 웹 페이지나 웹 애플리케이션의 URL 끝에 물음표(?)를 사용하여 추가 매개변수를 지정합니다.

쿼리파라미터는 키-값 쌍으로 구성되며, 각 쌍은 등호(=)로 키와 값이 연결됩니다. 이러한 값을 통해 클라이언트와 서버 간에 데이터를 전송하고, 서버는 이를 기반으로 동적으로 콘텐츠를 생성하거나 처리할 수 있습니다. 주로 HTTP GET 요청에서 사용되며, 사용자가 웹 페이지를 요청할 때마다 서버에 추가 정보를 제공하는 데 유용하게 활용됩니다.

## Example

```js
// JavaScript에서 쿼리 매개변수를 파싱하는 예시
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const paramValue = urlParams.get('paramKey');
console.log(paramValue);
```
