import PriceForm from "../../components/Registration/PriceForm";

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
const PUT_SEATTYPE = 'resitration/PUT_SEATTYPE' as const;
const MAX_PERSONNEL = 'resitration/MAX_PERSONNEL' as const;
const MINIMUM_PERSONNEL = 'resitration/MINIMUM_PERSONNEL' as const;
const SEAT_COUNT = 'resitration/SEAT_COUNT' as const;
const PUT_MANAGE_INFO = 'resitration/PUT_MANAGE_INFO' as const;
const SELECT_PRICE_TYPE = 'resitration/SELECT_PRICE_TYPE' as const;
const CHECK_AMENNITY = 'resitration/CHECK_AMENNITY' as const;
const UNCHECK_AMENNITY = 'resitration/UNCHECK_AMENNITY' as const;
const TURM_CHANGE = 'resitration/TURM_CHANGE' as const;


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

export const putImage = (type:string,size:number,name:string,pictype:string, value:any) => ({
  type:PUT_IMAGE,
  payload:{
    type,
    size,
    name,
    pictype,
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

export const putSeatType = (name:string, value:string) => ({
  type:PUT_SEATTYPE,
  payload:{
    name,
    value
  }
})
  
export const maxPersonnel = (num:number) => ({
  type:MAX_PERSONNEL,
  payload:num
}) 

export const minPersonnel = (num:number) => ({
  type:MINIMUM_PERSONNEL,
  payload:num
}) 

export const seatCounter = (num:number) => ({
  type:SEAT_COUNT,
  payload:num
})

export const putManageInfo = (name:string, dayOfWeek:string, value:string) => ({
  type:PUT_MANAGE_INFO,
  payload:{
    name,
    dayOfWeek,
    value
  }
})

export const selectPriceType = (name:string, value:string | number) => ({
  type:SELECT_PRICE_TYPE,
  payload:{
    name,
    value
  }
})

export const checkAmennity = (value:string) => ({
  type:CHECK_AMENNITY,
  payload:value
}) 

export const uncheckAmennity = (value:string) => ({
  type:UNCHECK_AMENNITY,
  payload:value,
})

export const termChange = (name:string, value:number) => ({
  type:TURM_CHANGE,
  payload:{
    name,
    value
  }
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
  |  ReturnType<typeof putSeatType>
  |  ReturnType<typeof maxPersonnel>
  |  ReturnType<typeof minPersonnel>
  |  ReturnType<typeof seatCounter>
  |  ReturnType<typeof putManageInfo>
  |  ReturnType<typeof selectPriceType>
  |  ReturnType<typeof checkAmennity>
  |  ReturnType<typeof uncheckAmennity>
  |  ReturnType<typeof termChange>

  type ManageInfoType = {
    dayOfWeek:string,
    startTime:string,
    endTime:string,
    manageType:string,
  }
  
export type RegistType = {
  name:string,
  address:{
    zipCode:string,
    address1:string,
    address2:string,
  },
  hostInfo: {
    site:string,
    hostEmail:string,
    hostPhoneNumber:string,
  },
  step:string,
  images:any[],
  description:string,
  content:string,
  cautionNotes:string[],
  tags:string[],
  seatInfo: {
    seatCount:number,
    minPersonnelCount:number,
    maxPersonnelCount:number,
    seatType:string,
  },
  manageInfo:ManageInfoType[],
  prices:{
    price:{
       amount:number
    },
    priceType:string,
    minUsageDay:number,
    maxUsageDay:number
  }
  amenities:string[],
}


const initialState: RegistType = {
  name:'',
  address: {
    zipCode:'',
    address1:'',
    address2:'',
  },
  hostInfo: {
    site:'',
    hostEmail:'',
    hostPhoneNumber:''
  },
  step:'step1',
  images:[],
  description:'',
  content:'',
  cautionNotes:[''],
  tags:[],
  seatInfo: {
    seatCount:1,
    minPersonnelCount:1,
    maxPersonnelCount:1,
    seatType:'FREE'
  },
  manageInfo:[
    {
       dayOfWeek:"MONDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"TUESDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"WEDNESDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"THURSDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"FRIDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"SATURDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    },
    {
       dayOfWeek:"SUNDAY",
       startTime:"09:00:00",
       endTime:"22:00:00",
       manageType:"OPERATE"
    }
  ],
  prices:{
    price:{
       amount:15000
    },
    priceType:'DAY',
    minUsageDay:1,
    maxUsageDay:30
  },
  amenities:[],
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
      case PUT_IMAGE:
        const {size,name,pictype,type} = action.payload;
        let obj = {
          fileName:name,
          size,
          mimeType: pictype,
          imageType: type,
        }
        return {
          ...state,
          images:[...state.images, obj]
        }
      case ADD_NOTICE:
        return {
          ...state,
          cautionNotes:[...state.cautionNotes, action.payload]
        }
      case REMOVE_NOTICE:
        return {
          ...state,
          cautionNotes:[...state.cautionNotes.slice(0, action.payload), ...state.cautionNotes.slice(action.payload + 1, state.cautionNotes.length)]
        }
      case PUT_NOTICE:
        return {
          ...state,
          cautionNotes:[...state.cautionNotes.slice(0, action.payload.id),action.payload.value, ...state.cautionNotes.slice(action.payload.id + 1,state.cautionNotes.length)]
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
      case PUT_SEATTYPE:
        return {
          ...state,
          seatInfo:{
            ...state.seatInfo,
            [action.payload.name]:action.payload.value
          }
        }
      case MAX_PERSONNEL:
        return {
          ...state,
          seatInfo:{
            ...state.seatInfo,
            maxPersonnelCount: state.seatInfo.maxPersonnelCount + action.payload
          }
        }
      case MINIMUM_PERSONNEL:
        return {
          ...state,
          seatInfo:{
            ...state.seatInfo,
            minPersonnelCount: state.seatInfo.minPersonnelCount + action.payload
          }
        }
      case SEAT_COUNT:
        return {
          ...state,
          seatInfo:{
            ...state.seatInfo,
            seatCount: state.seatInfo.seatCount + action.payload
          }
        }
      case PUT_MANAGE_INFO:
        let piece = state.manageInfo.filter(data => data.dayOfWeek === action.payload.dayOfWeek)[0];
        let arrIndex = state.manageInfo.findIndex(data => data.dayOfWeek === action.payload.dayOfWeek);
        (piece as any)[action.payload.name]=action.payload.value;
        return {
          ...state,
          manageInfo:[...state.manageInfo.slice(0, arrIndex), piece,...state.manageInfo.slice(arrIndex+1, state.manageInfo.length)]
        }
      case SELECT_PRICE_TYPE:
        const snap = action.payload.name === 'price' ? {amount:action.payload.value} : action.payload.value;
        return {
          ...state,
          prices:{
            ...state.prices,
            [action.payload.name]: snap,
          }
        }
      case CHECK_AMENNITY:
        return {
          ...state,
          amenities:[...state.amenities, action.payload],
        }
      case UNCHECK_AMENNITY:
        const dumyIndex = state.amenities.findIndex(dumy => dumy === action.payload);
        return {
          ...state,
          amenities:[...state.amenities.slice(0,dumyIndex), ...state.amenities.slice(dumyIndex + 1, state.amenities.length)],
        }
      case TURM_CHANGE:
        let scheck = action.payload.name === 'minUsageDay' ? state.prices.minUsageDay : state.prices.maxUsageDay;
        console.log(scheck, action.payload.value);
        return {
          ...state,
          prices:{
            ...state.prices,
            [action.payload.name]: scheck + action.payload.value
          }
        }
      default :
        return state;
  }
}

export default registration