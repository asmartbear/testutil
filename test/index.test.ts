import * as T from '../src/index'

test('near', () => {
    T.near(12, 12)
    T.near(12, 12.00000001)
})