// Singleton

class ClassName {
  public static instance: ClassName | null = null
  public static getInstance() {
    // ClassName 으로부터 만든 object가 있으면 그걸 리턴
    // 없으면 객체생성.
    if (!ClassName.instance) {
      ClassName.instance = new ClassName()
    }
    return ClassName.instance
  }
  private constructor() {
    // 이렇게 하면 아무데서도 new가 안됨. (객체를 생성할 수 없음)
  }
}

const cna = ClassName.getInstance()
const cnb = ClassName.getInstance()

console.log(cna === cnb)
