import { useState } from 'react';
import { useSelector} from 'react-redux/es/hooks/useSelector';


// import NNN from "./NNN";
import UserCommentDetailes from './UserCommentDetailes';

const CommentDetailes = () => {


    const [overFlow,setOverFlow] = useState(false)

    const user = useSelector(state => state.userData.commentUser)
    
    const flowHandler = () =>{
        setOverFlow(!overFlow)
    }

    return ( 
        <div className={`bg-white p-4 flex flex-col gap-y-5 relative  h-[33rem]  overflow-y-hidden ${overFlow?"":" h-[23rem]"} z-0`}>

                    <div className="flex flex-row gap-x-3 items-center justify-start">
                        <span className="font-bold text-lg sm:text-xl">Reviews</span>
                        <span
                            className="px-4 py-1 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md">13</span>
                    </div>



                    <div className="flex flex-col gap-y-5">
                        {user.map(i => <UserCommentDetailes key={i.id} {...i}/>)}
                    </div>


                    <div className="flex flex-row items-center bg-white w-full justify-center bottom-0  z-40  absolute  left-0">
                        <button onClick={flowHandler} className=" pb-4 pt-2 w-80 flex flex-row items-center justify-center py-2 px-5 gap-x-3 hover:text-slate-600 z-30">
                            <p className="text-slate-400  sm:text-lg">{overFlow?"Show Less":"Show More"}</p>
                            <span className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor"
                                    className={`w-4 h-4 stroke-slate-400 sm:text-lg ${overFlow?"rotate-180":""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </div>


                </div>
     );
}
 
export default CommentDetailes;