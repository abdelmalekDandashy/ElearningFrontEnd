import storage from "redux-persist/lib/storage";
// import persistor from "./configureStore";

import returnStoreAndPersistor from './configureStore';

const { store, persistor } = returnStoreAndPersistor();

// Actions
const CREATE = 'CREATE';
const API_ERROR = 'API_ERROR';
const CREATE_FEATURED_TEACHERS = 'CREATE_FEATURED_TEACHERS';
const CREATE_FEATURED_ANSWERS = 'CREATE_FEATURED_ANSWERS';
const CREATE_ANSWER_DETAILS = 'CREATE_ANSWER_DETAILS';
const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CREATE_UNANSWERED_QUESTIONS = 'CREATE_UNANSWERED_QUESTIONS';
const CREATE_TEACHER_ANSWERS = 'CREATE_TEACHER_ANSWERS';
const LOG_OUT = 'LOG_OUT';



// Action Creators


export function createUser(user) {
    // console.log(user)
    return { type: CREATE, payload: user };
}

export function logOut(user) {
    alert('you have succesfully logged out');
    persistor.flush();
    return { type: LOG_OUT, payload: undefined };
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
export function createTeacherAnswers(teacherAnswers) {
    return { type: CREATE_TEACHER_ANSWERS, payload: teacherAnswers };
}
export function createAnswersDetails(answerDetails) {
    return { type: CREATE_ANSWER_DETAILS, payload: answerDetails };
}
export function createCategories(categories) {
    // console.log(categories);
    return { type: CREATE_CATEGORIES, payload: categories };
}
export function createUnansweredQuestions(questions) {

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
    teacherAnswers: [],
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
        case LOG_OUT:
            return {
                state: undefined,
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
        case CREATE_TEACHER_ANSWERS:
            return {
                ...state,
                teacherAnswers: action.payload.answersByTeacher
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