import { create } from 'zustand'

interface StoreState {
	countBasket: number
	countLike: number
	increaseBasket: () => void
	increaseLike: () => void
}

const useStore = create<StoreState>(set => ({
	countBasket: 0,
	countLike: 0,
	increaseBasket: () => set(state => ({ countBasket: state.countBasket + 1 })),
	increaseLike: () => set(state => ({ countLike: state.countLike + 1 })),
}))

export default useStore
