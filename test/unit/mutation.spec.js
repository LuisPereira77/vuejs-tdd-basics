import mutations from '@/store/mutations'
import initialState from '@/store/state'
import userFixture from '~/test/unit/fixtures/user'

describe('mutations', () => {
    let state

    beforeEach(() => {
        state = { ...initialState }
    })

    it('sets new user', () => {
        // arrange
        const expectedUser = userFixture

        // act
        mutations.SET_USER(state, expectedUser)

        // assert
        expect(state.user).toEqual(expectedUser)
        expect(state.user).not.toBe(expectedUser)  
    })
})