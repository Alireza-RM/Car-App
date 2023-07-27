import { useDispatch,useSelector } from "react-redux";


import { isCheckedType,isCheckBoxCapacity,isCheckedRange } from "../features/carSlice";

const NavFilter = () => {

  const checkType = useSelector((state) => state.carData.checkBoxType)
  const checkCapacity = useSelector((state) => state.carData.checkBoxCapacity)
  const checkRange = useSelector((state) => state.carData.checkBoxRange)
  const dispatch = useDispatch()


  const changeHandlerType = (event) => {
    const {name,checked} = event.target
    dispatch(isCheckedType({name,checked}))
  }
  const changeHandlerCapacity = (event) => {
    const {name,checked} = event.target
    dispatch(isCheckBoxCapacity({name,checked}))
  }

  const rangeHandler = (event) => {
    const {value}=event.target
    dispatch(isCheckedRange(value))
  }

  return (
    
    <div className="flex flex-col w-full gap-y-12">
                <div className="flex flex-col gap-y-5">
                    <span className="text-slate-400 text-xs">T Y P E</span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="sport" checked={checkType.Sport || false} name="Sport" onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="sport" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">Sport</p>
                            <p className="text-slate-400">(10 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="SUV" checked={checkType.SUV  || false} name="SUV"  onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="SUV" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">SUV</p>
                            <p className="text-slate-400">(12 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="MPV" checked={checkType.MPV  || false} name="MPV"  onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="MPV" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">MPV</p>
                            <p className="text-slate-400">(16 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="Sedan" checked={checkType.Sedan  || false} name="Sedan"  onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Sedan" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">Sedan</p>
                            <p className="text-slate-400">(20 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="Coupe" checked={checkType.Coupe  || false} name="Coupe"  onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Coupe" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">Coupe</p>
                            <p className="text-slate-400">(14 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="Hatchback" checked={checkType.Hatchback  || false} name="Hatchback"  onChange={changeHandlerType} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Hatchback" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">Hatchback</p>
                            <p className="text-slate-400">(14 )</p>
                        </label>
                    </span>

                </div>



                <div className="flex flex-col gap-y-5">
                    <span className="text-slate-400 text-xs">C A P A C I T Y</span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox"  id="Person2" checked={checkCapacity.Person2  || false} name="Person2" onChange={changeHandlerCapacity} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Person2" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">2 Person</p>
                            <p className="text-slate-400">(10 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox"  id="Person4" checked={checkCapacity.Person4  || false} name="Person4" onChange={changeHandlerCapacity} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Person4" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">4 Person</p>
                            <p className="text-slate-400">(14 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="Person6" checked={checkCapacity.Person6  || false} name="Person6" onChange={changeHandlerCapacity} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Person6" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">6 Person</p>
                            <p className="text-slate-400">(12 )</p>
                        </label>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <input type="checkbox" id="Person8" checked={checkCapacity.Person8  || false} name="Person8" onChange={changeHandlerCapacity} className="form-checkbox rounded border-slate-300"/>
                        <label htmlFor="Person8" className="flex flex-row gap-x-1">
                            <p className="font-semibold text-slate-600">8 or More</p>
                            <p className="text-slate-400">(16 )</p>
                        </label>
                    </span>


                </div>

                <div className="flex flex-col">
                    <span className="text-slate-400 text-xs">P R I C E</span>

                    <span className="flex flex-col  items-center gap-x-2 w-full py-1 mt-4">
                        <input type="range" name="" value={checkRange}  id="2 Person" className=" rounded w-full" onChange={rangeHandler}/>
                    </span>

                    <span className="flex flex-row  items-center gap-x-2">
                        <p className="font-semibold text-slate-600">Max. ${checkRange}</p>
                    </span>

                </div>

            </div>
  );
};

export default NavFilter;
