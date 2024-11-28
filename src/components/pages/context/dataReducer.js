export const initialState = {
    courses: [],
    events: [],
    categories: [],
    reviews: [],
    lessonInfo: [],
    teams: [],
    loading: true,
    error: null,
};

export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.payload};
        case 'SET_COURSES':
            return {...state, courses: action.payload};
        case 'SET_EVENTS':
            return {...state, events: action.payload};
        case 'SET_REVIEWS':
            return {...state, reviews: action.payload};
        case 'SET_LESSON_INFO':
            return {...state, lessonInfo: action.payload};
        case 'SET_TEAMS':
            return {...state, teams: action.payload};
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_ERROR':
            return {...state, error: action.payload};
        default:
            return state;
    }
};
