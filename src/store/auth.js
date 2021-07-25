

// Actions
const CREATE = 'CREATE';
const API_ERROR = 'API_ERROR';
const CREATE_FEATURED_TEACHERS = 'CREATE_FEATURED_TEACHERS';
const CREATE_FEATURED_ANSWERS = 'CREATE_FEATURED_ANSWERS';
const CREATE_ANSWER_DETAILS = 'CREATE_ANSWER_DETAILS';
const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CREATE_UNANSWERED_QUESTIONS = 'CREATE_UNANSWERED_QUESTIONS';



// Action Creators


export function createUser(user) {
    // console.log(user)
    return { type: CREATE, payload: user };
}

export function APIError(error) {
    return { type: API_ERROR, payload: error };
}

export function createFeaturedteachers(featuredTeachers) {
    return { type: CREATE_FEATURED_TEACHERS, payload: featuredTeachers };
}

export function createFeaturedAnswers(featuredAnswers) {
    return { type: CREATE_FEATURED_ANSWERS, payload: featuredAnswers };
}
export function createAnswersDetails(answerDetails) {
    return { type: CREATE_ANSWER_DETAILS, payload: answerDetails };
}
export function createCategories(categories) {
    // console.log(categories);
    return { type: CREATE_CATEGORIES, payload: categories };
}
export function createUnansweredQuestions(questions) {
    // console.log(questions)
    // let filtredQuestions = [];

    // if (questions != null || questions !== undefined) {

    //     questions.answers.map((x) => {
    //         questions.push(x.IS_ANSWERED ? x : null)
    //         return filtredQuestions;
    //     })
    //     return { type: CREATE_UNANSWERED_QUESTIONS, payload: filtredQuestions };
    // }
    // else
    return { type: CREATE_UNANSWERED_QUESTIONS, payload: questions };
}




// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }



// Reducer
const initialState = {
    user: [],
    error: [],
    isAuth: false,
    featuredTeachers: [],
    featuredAnswers: [],
    answerDetails: [],
    categories: [],
    unansweredQuestions: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // do reducer stuff
        case CREATE:
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }
        case CREATE_FEATURED_TEACHERS:
            return {
                ...state,
                featuredTeachers: action.payload,
            }
        case API_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CREATE_FEATURED_ANSWERS:
            return {
                ...state,
                featuredAnswers: action.payload
            }
        case CREATE_ANSWER_DETAILS:
            return {
                ...state,
                answerDetails: action.payload
            }
        case CREATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case CREATE_UNANSWERED_QUESTIONS:
            // console.log(action.payload.answers.IS_ANSWERED.filter(item => item.IS_ANSWERED !== false))
            return {
                ...state,
                unansweredQuestions: action.payload.answers
                    .filter(item => item.IS_ANSWERED === false)
            }
        default: return state;
    }
}