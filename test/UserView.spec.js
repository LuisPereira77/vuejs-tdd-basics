import { shallowMount } from '@vue/test-utils'
import UserView from '@/pages/UserView'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

describe('UserView', () => {

    const build = () => {
        const wrapper = shallowMount(UserView, {
            data: () => ({
              user: {}
            })
        })

        return {
            wrapper,
            useSearchForm: () => wrapper.findComponent(VUserSearchForm),
            userProfile: () => wrapper.findComponent(VUserProfile)
        }

    }
    it('renders the component', () => {
        // arrange
        const { wrapper } = build()

        // assert
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders main child components', () => {
        // arrange
        const { useSearchForm, userProfile } = build()

        // assert
        expect(useSearchForm().exists()).toBe(true)
        expect(userProfile().exists()).toBe(true)

    })

    it('passes a binded user prop to user profile component', () => {
        // arrange
        const { wrapper, userProfile } = build()

        wrapper.setData({
            user: {
                name: 'Daniel'
            }
        })

        // assert
        expect(userProfile().vm.user).toBe(wrapper.vm.user) 

    })
})
