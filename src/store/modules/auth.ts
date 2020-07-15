import { ThunkAction } from 'redux-thunk';
import {RootState} from '.';

const LOGIN = 'auth/LOGIN' as const;
const SIGNUP = 'auth/SIGNUP' as const;
const GET ='auth/GET' as const;

export const getCurrentUser = () => ({
  type: GET
})

type ThemeAction = 
    | ReturnType<typeof getCurrentUser>;


// export const loginThunk = ():ThunkAction<void,RootState,null,ThemeAction> => {
//   return async(dispatch) => {
//       try {
        
//       }
//       catch (e) {
//           console.log(e.error)
//       }
//   }
// }   
type AuthProps = {

}

const initialState: AuthProps = {
  
}

function auth(state: AuthProps = initialState, action: ThemeAction) {
  switch (action.type) {
      default :
        return state;
  }
}

export default auth;