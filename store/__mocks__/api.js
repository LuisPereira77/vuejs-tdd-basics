import userFixture from '~/test/unit/fixtures/user'

export default {
  searchUser: jest.fn().mockResolvedValue(userFixture)
}