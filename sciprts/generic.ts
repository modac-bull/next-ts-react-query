{
  /**
   *
   * @param input - any 로 지정할 수 있겠지만 타입스크립트를 100% 활용할 수 없게 된다.
   * @returns
   */
  const identity = function (input: any) {
    return input
  }

  identity(1)
  identity('abc')
  identity({ a: '123F' })

  /* 
제네릭
제네릭 타입 매개변수
타입 인수
*/
}

{
  const identity = function <T>(input: T) {
    return input
  }

  const numeric = identity(1)
  const stringy = identity('abc')

  console.log(numeric, stringy)
}

{
  /* 
  .tsx에서 jsx 구문과 충돌 있을 수도 있다고 함(참고)
  */
  const identity = <T>(input: T) => input

  identity(123)
}
