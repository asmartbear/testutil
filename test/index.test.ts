import * as T from '../src/index'

test('near', () => {
    T.near(12, 12)
    T.near(12, 12.00000001)
})

test('simplified', () => {
    T.isSimple(12, "12")
    T.isSimple({ foo: 1, bar: "hi" }, "bar=hi, foo=1")
    const m = new Map<string, any>()
    m.set("foo", 1)
    m.set("bar", "hello")
    T.isSimple(m, "bar=hello, foo=1")
})