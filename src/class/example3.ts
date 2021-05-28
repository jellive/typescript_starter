// static methods & properties

class HPerson {
  public static hello() {
    console.log('안녕하세요')
  }
  static CITY = 'Seoul'
}

const hp1 = new HPerson() // 안 쓰임.
// hp1.hello()

HPerson.hello()
console.log(HPerson.CITY)
