# 6장 리덕스로 상태 관리하기

redux는 자바스크립트를 위한 상태 관리 프레임워크다.

사용하는 이유

- 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
- 서버 렌더링 시 데이터 전달이 간편하다.
- 로컬 스토리지에 데이터를 저장하고 불러오는 코드를 쉽게 작성할 수 있다.
- 같은 상태값을 다수의 컴포넌트에서 필요로 할 때 좋다.
- 부모 컴포넌트에서 깊은 곳에 있는 자식 컴포넌트에 상태값을 전달할 때 좋다.
- 알림창과 같은 전역 컴포넌트의 상태값을 관리할 떄 좋다.
- 페이지가 전환되어도 데이터는 살아 있어야 할 때 좋다.

## 6.1 리덕스 사용 시 따라야 할 세 가지 원칙

1. 전체 상태값을 하나의 객체에 저장한다.
2. 상태값은 불변 객체다.
3. 상태값은 순수 함수에 의해서만 변경되어야 한다.

<하나의 객체에 프로그램의 전체 상태값을 저장한다> => (왜?)

전체 상태값이 하나의 자바스크립트 객체로 표현되기 때문에 활용도가 높아진다. => 무슨 뜻일까.

- 하나의 객체로 전체 상태값을 관리할 수 있어서 쉽다는 뜻일까?

리덕스를 사용하면 하나의 객체를 직렬화(serialize)해서 서버와 클라이언트가 프로그램의 전체 상태값을 서로 주고받을 수 있다. => 무슨 뜻?

프로그램이 특정한 상태에 있을 때 발생하는 버그를 확인하기 위해 그 상태값을 저장한 후 반복해서 재현할 수 있다.

최근의 상태값을 버리지 않고 저장해 놓으면 실행 취소와 다시 실행 기능(히스토리)을 쉽게 구현 가능하다.

그러나 필요한 곳에서만 리덕스를 사용해도 된다.

(어디 장단에 맞추라는 건지?)

<상태값을 불변 객체로 관리한다.>

```js
const incrementAction = {
  type: 'INCREMENT', // 1
  amount: 123, // 2
}

const conditionalIncrementAction = {
  type: 'CONDITINOAL_INCREMENT', // 1
  amount: 2, // 2
  gt: 10, // 2
  lg: 100, // 2
}

// 3
store.dispath(incrementAction)
store.dispath(conditionalIncrementAction)
```

(1) 액션 객체는 type 속성값이 존재해야 한다. type 속성 값으로 액션 객체를 구분한다.
(2) type thr성값을 제외한 나머지는 상태값을 수정하기 위해 사용되는 정보다.
(3) 액션 객체와 함께 dispatch 메서드를 호출하면 상태값이 변경된다.

리덕스의 상태값을 수정하는 유일한 방법은 액션 객체와 함께 dispatch 메서드를 호출하는 것이다.
=> dispatch를 통해서만 리덕스의 상태값을 바꿔야 한다.

상태값은 dispatch 메서드가 호출된 순서대로 리덕스 내부에서 변경되기 때문에 상태값이 변화되는 과정을 쉽게 이해할 수 있다.

불변 객체로 상태를 변경하는 것이 좋다.
왜?

- 이전 상태값과 이후 상태값을 비교해서 변경 여부를 파악하기 쉽다.
- 렌더링 성능을 올리는 데도 유리하다?

<오직 순수 함수에 의해서만 상태값을 변경해야 한다.>

```
(state, action) => nextState
```

부수 효과를 발생시키지 않아야 한다. 같은 인수에 대해 항상 같은 값을 반환해야 한다.
리듀서는 순수 함수이기 때문에 같은 상태값과 액션 객체를 입력하면 항상 똑같은 다음 상태값을 반환한다. 따라서 실행된 액션 객체를 순서대로 저장했다가 나중에 똑같은 순서대로 dispatch 메서드를 호출하면 쉽게 리플레이기능을 구현할 수 있다.

## 6.2 리덕의 주요 개념 이해하기

액션 => 미들웨어 => 리듀서 => 스토어 => 뷰 => 다시 액션 (변경 과정)

### 6.2.1 액션

액션(action)은 type 속성값을 가진 자바스크립트 객체다. 액션 객체를 dispatch 메서드에 넣어서 호출하면 리덕스는 상태값을 변경하는 과정(변경 과정)을 거친다.

액션 객체에는 type 속성값 외에도 원하는 속성값을 얼마든지 넣을 수 있다.

```js
// 액션을 발생시키는 예제 코드
store.dispatch({ type: 'todo/ADD', title: '영화 보기', priority: 'high' })
store.dispatch({ type: 'todo/REMOVE', id: 123 })
store.dispatch({ type: 'rodo/REMOVE_ALL' })
```

액션 객체를 입력하는 방법보다는 `액션 생성자 함수`를 이용하는 편이 좋다.

```js
function addTo({ title, priority }) {
  return { type: 'todo/ADD', title, priority }
}
function removeTodo({ id }) {
  return { type: 'todo/ADD', id }
}
function removeAllTodo() {
  return { type: 'todo/ADD' }
}

store.dispath(addTodo({ title: '영화보기', priority: 'high' }))
store.dispath(removeTodo({ id: 123 }))
store.dispath(removeAllTodo())
```

```js
// 액션 타입은 변수로 만들어 관리한다.
export const ADD = 'todo/ADD'
export const REMOVE = 'todo/REMOVE'
export const REMOVE_ALL = 'todo/REMOVE_ALL'

export function addTo({ title, priority }) {
  return { type: ADD, title, priority }
}
export function removeTodo({ id }) {
  return { type: REMOVE, id }
}
export function removeAllTodo() {
  return { type: REMOVE_ALL }
}
```


1. 전체 상태값을 하나의 객체에 저장한다.
2. 상태값은 불변 객체다.
3. 상태값은 순수 함수에 의해서만 변경되어야 한다.

리덕스의 세 가지 원칙에 위배되지 않으므로 액션 생성자 함수에서는 부수 효과를 발생시켜도 괜찮다...(???왜)

예) addTodo 함수에서 새로운 할일을 서버에 저장하기 위해 API 호출을 할 수 있다.
