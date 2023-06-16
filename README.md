# rolling rolling paper client

## 프로젝트 구성

### SPA 프레임워크

> `CRA`를 이용해 React Library가 포함된 프로젝트 생성

- React에 대한 숙련도가 없기 때문에 `Nest.js`대신 순수 React를 사용해보기로 함

### 사용 언어

> Typescript

- 정적 타입 언어를 사용해 코드 안정성을 높힘
- `CRA`로 프로젝트 생성시에 함께 설치함

### 사용 Library

> react-router-dom

- router library로 채용
  - NextJS로 개발하지 않으면 react router dom을 많이 채용하여 사용한다고 함

> splidejs

- slider library로 채용

### Stylesheet

> Sass

- `sass`를 이용해 CSS로 컴파일하여 사용
- `dart-sass` 채용
- `node-sass`는 node 버전 의존성 문제와 deprecated 예정에 있기 때문에 사용이 권장되지 않음
  - [관련 공식 문서](https://sass-lang.com/libsass)

**reset css**
[참고 link (feat.teo)](https://velog.io/@teo/2022-CSS-Reset-다시-써보기)

- html, body `font-size: 62.5%`이며 `1rem=10px`이다.
- 전체 프로젝트에서 `rem`단위를 사용한다.

---

## 프로젝트 실행

### node modules 설치

```
npm install
```

### local server 실행

```
npm start
```

### 소스코드 빌드

```
npm run build
```
