import React , {useId} from 'react';

const Input = React.forwardRef(function Input({children,
    type = "text",
    label,
    className = "",
    ...props

}, ref) {
    
    const Id = useId();

    return(
        <div>
            {label && <label className='flex flex-col font-bold text-[rgb(65,77,35)] text-lg'
                        htmlFor={Id}>
                            {label + "*"}
                        </label>}
                        <input type={type} id = {Id}
                        className={`px-3 py-2 rounded-lg placeholder-white bg-[rgb(0,0,0,0.2)] text-[rgb(246,247,244)] outline-none focus:bg-[rgb(0,0,0,0.4)] duration-200 border border-gray-200 w-full h-9 mb-3 ${className}`}
                        ref = {ref}
                        {...props}>

                        </input>
        </div>
    )
})

export default Input;
