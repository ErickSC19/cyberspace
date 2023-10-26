export interface Lesson {
    passed: boolean;
    correct: number;
    name: string;
}

export interface CourseState {
    status: 'verifying' | 'authenticated' | 'notAuth';
    token: string | null;
    errorMessage: string;
    user: Object | null;
    terms: boolean;
  }
  
  type AuthAction =
    | {
        type: 'signUpIn';
        payload: { token: string; user: Object };
      }
    | { type: 'addError'; payload: string }
    | { type: 'removeError' }
    | { type: 'authenticationFailed' }
    | { type: 'logout' }
    | { type: 'setTerms'; payload: boolean };
  
  export const authReducer = (
    state: CourseState,
    action: AuthAction
  ): CourseState => {
    switch (action.type) {
      case 'addError':
        return {
          ...state,
          user: null,
          status: 'notAuth',
          token: null,
          errorMessage: action.payload
        };
      case 'removeError':
        return {
          ...state,
          errorMessage: ''
        };
      case 'signUpIn':
        return {
          ...state,
          user: action.payload.user,
          status: 'authenticated',
          token: action.payload.token,
          errorMessage: ''
        };
      case 'setTerms':
        return {
          ...state,
          terms: action.payload
        };
      case 'logout':
      case 'authenticationFailed':
        return {
          ...state,
          user: null,
          status: 'notAuth',
          token: null
        };
  
      default:
        return state;
    }
  };
  