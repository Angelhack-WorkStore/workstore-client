const GET_CURRENT_USER = 'registration/SIGNUP_TRY' as const;
const SIGNUP_TRY = 'registration/SIGNUP_TRY' as const;



export const getCurrentUser = (email:string, name:string, imageUrl:string) => ({
  type:GET_CURRENT_USER,
  payload: {
    email,
    name,
    imageUrl
  }
})



type AuthAction = 
  |  ReturnType<typeof getCurrentUser>



type AuthenticateType = {
  email:string,
  name:string,
  imageUrl:string,
}

const initialState: AuthenticateType = {
  email:'',
  name:'',
  imageUrl:'',
}

function registration(state: AuthenticateType = initialState, action: AuthAction) {
  switch (action.type) {
    case GET_CURRENT_USER:
      const {email, name, imageUrl} = action.payload
      return {
        ...state,
        email,
        name,
        imageUrl
      }
    default :
      return state;
  }
}

export default registration

