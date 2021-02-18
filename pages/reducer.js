export default function(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            return state
    }
}
