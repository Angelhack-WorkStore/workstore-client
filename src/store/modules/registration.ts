
const PUT_VALUE = 'registration/PUT_VALUE' as const;
const PUT_IMAGE = 'registration/PUT_IMAGE' as const;
const PREV_STEP = 'resitration/PREV_STEP' as const;
const NEXT_STEP = 'resitration/NEXT_STEP' as const;


export const putValue = (name:string, value:string) => ({
  type:PUT_VALUE,
  payload: {
    name,
    value
  }
})

export const putImage = (name:string, value:any) => ({
  type:PUT_IMAGE,
  payload: {
    name,
    value
  }
})

export const PrevStep = (stepNum:number) => ({
  type:PREV_STEP,
  payload: stepNum
})

export const NextStep = (stepNum:number) => ({
  type:NEXT_STEP,
  payload: stepNum
})


type RegistAction = 
  |  ReturnType<typeof putValue>
  |  ReturnType<typeof putImage> 
  |  ReturnType<typeof PrevStep> 
  |  ReturnType<typeof NextStep> 

type RegistType = {
  name:string,
  zipCode:string,
  address1:string,
  address2:string,
  step:string,
  phoneNumber:string,
  email:string,
  website:string,
  thumnailImage:any,
  pictures:string[],
  content:string,
}

const initialState: RegistType = {
  name:'',
  zipCode:'',
  address1:'',
  address2:'',
  step:'step2',
  phoneNumber:'',
  email:'',
  website:'',
  thumnailImage:null,
  pictures:[],
  content:'',
}

function registration(state: RegistType = initialState, action: RegistAction) {
  switch (action.type) {
      case PUT_VALUE:
        return {
          ...state,
          [action.payload.name] : action.payload.value
        }
      case PUT_IMAGE:
        return {
          ...state,
          
        }
      case PREV_STEP:
        return {
          ...state,
          step:state.step.substr(0,4) + action.payload
        }
      case NEXT_STEP:
        return {
          ...state,
          step:state.step.substr(0,4) + action.payload
        }
      default :
        return state;
  }
}

export default registration