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

{
  function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
      console.log('input', input)
      callback(input)
    }
  }

  // 타입 : (input : string) => void
  logWrapper((input: string) => {
    console.log(input.length)
  })

  // 타입 : (input: unknown) => void
  logWrapper(input => {
    console.log(input.length)
    // Error
  })

  // 타입 : (input : string) => void
  logWrapper<string>(input => {
    console.log(input.length)
  })

  /* 
  명시적 타입 인수는 항상 제네릭 함수에 지정할 수 있지만 때로는 필요하지 않을 수 있다.
  필요할 때만 명시적 타입 인수를 지정한다.
  */

  // 타입 인수, 매개변수 타입 - 둘 중 하나는 제거 가능
  logWrapper<string>((input: string) => {
    console.log(input.length)
  })
}
