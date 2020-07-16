
const PUT_VALUE = 'registration/PUT_VALUE' as const;
const PUT_ADDRESS = 'registration/PUT_ADDRESS' as const;
const PUT_HOST_INFO = 'resitration/PUT_HOST_INFO' as const;
const PUT_IMAGE = 'registration/PUT_IMAGE' as const;
const PREV_STEP = 'resitration/PREV_STEP' as const;
const NEXT_STEP = 'resitration/NEXT_STEP' as const;
const ADD_NOTICE = 'resitration/ADD_NOTICE' as const;
const REMOVE_NOTICE = 'resitration/REMOVE_NOTICE' as const;
const PUT_NOTICE = 'resitration/PUT_NOTICE' as const;
const PUT_TAG = 'resitration/PUT_TAG' as const;
const REMOVE_TAG = 'resitration/REMOVE_TAG' as const;


export const putValue = (name:string, value:string) => ({
  type:PUT_VALUE,
  payload: {
    name,
    value
  }
})

export const putAdress = (name:string, value:string) => ({
  type:PUT_ADDRESS,
  payload: {
    name,
    value
  }
})

export const putHostInfo = (name:string, value:string) => ({
  type:PUT_HOST_INFO,
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

export const addNotice = (value:string) => ({
  type:ADD_NOTICE,
  payload: value
})

export const removeNotice = (id:number) => ({
  type:REMOVE_NOTICE,
  payload:id
})

export const putNotice = (id:number, value:string) => ({ 
  type:PUT_NOTICE,
  payload: {
    id,
    value
  }
})

export const putTag = (value:string) => ({
  type:PUT_TAG,
  payload: value
})

export const RemoveTag = (index:number) => ({
  type:REMOVE_TAG,
  payload:index,
})
  



type RegistAction = 
  |  ReturnType<typeof putValue>
  |  ReturnType<typeof putAdress>
  |  ReturnType<typeof putHostInfo>
  |  ReturnType<typeof putImage> 
  |  ReturnType<typeof PrevStep> 
  |  ReturnType<typeof NextStep> 
  |  ReturnType<typeof addNotice> 
  |  ReturnType<typeof removeNotice> 
  |  ReturnType<typeof putNotice> 
  |  ReturnType<typeof putTag> 
  |  ReturnType<typeof RemoveTag>

type RegistType = {
  name:string,
  address:{
    zipCode:string,
    address1:string,
    address2:string,
  },
  hostInfo: {
    hostEmail:string,
    hostPhoneNumber:string,
  },
  step:string,
  website:string,
  thumnailImage:any,
  pictures:string[],
  description:string,
  content:string,
  notices:string[],
  tags:string[],
}

const initialState: RegistType = {
  name:'',
  address: {
    zipCode:'',
    address1:'',
    address2:'',
  },
  hostInfo: {
    hostEmail:'',
    hostPhoneNumber:''
  },
  step:'step2',
  website:'',
  thumnailImage:null,
  pictures:[],
  description:'',
  content:'',
  notices:['',''],
  tags:[],
}

function registration(state: RegistType = initialState, action: RegistAction) {
  switch (action.type) {
      case PUT_VALUE:
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      case PUT_ADDRESS:
        return {
          ...state,
          address:{
            ...state.address,
            [action.payload.name]: action.payload.value
          }
        }
      case PUT_HOST_INFO:
        return {
          ...state,
          hostInfo:{
            ...state.hostInfo,
            [action.payload.name]: action.payload.value
          }
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
      case ADD_NOTICE:
        return {
          ...state,
          notices:[...state.notices, action.payload]
        }
      case REMOVE_NOTICE:
        return {
          ...state,
          notices:[...state.notices.slice(0, action.payload), ...state.notices.slice(action.payload + 1, state.notices.length)]
        }
      case PUT_NOTICE:
        return {
          ...state,
          notices:[...state.notices.slice(0, action.payload.id),action.payload.value, ...state.notices.slice(action.payload.id,state.notices.length-1)]
        }
      case PUT_TAG:
        return {
          ...state,
          tags:[...state.tags, action.payload]
        }  
      case REMOVE_TAG:
        return {
          ...state,
          tags:[...state.tags.slice(0, action.payload), ...state.tags.slice(action.payload + 1, state.tags.length)]
        }  
      default :
        return state;
  }
}

export default registration