import userFixture from '../test/unit/fixtures/user'

export default {
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
}