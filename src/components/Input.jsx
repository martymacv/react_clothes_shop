function Input({ 
        variant = "primary", 
        requirements = [], 
        fieldValue = '',
        state = {},
        ...props }) {
    const baseStyles = 'font-roboto text-[#000000ff] text-[20px] font-normal focus:outline-none px-2 py-4'
    const borderStyle = 'border-2'
    const placeholderStyle = 'placeholder:text-[#000000AA] text-[20px]'

    const variants = {
        primary: 'border-[#00000055] focus:border-[#107effff] w-[200px] placeholder:text-center',
        valid: 'border-[#00cf00ff]',
        invalid: 'border-[#ff2000ff]',
    }

    return (
        <>
            <input { ...props }
                className={`${baseStyles} ${borderStyle} ${placeholderStyle} ${variants[variant]}`}/>
            <ul>
                {requirements.map((req) => (
                    <li className={fieldValue ? `font-roboto text-[12px] font-medium ${state[req.type] ? "text-[#00cf00ff]" : "text-[#ff2000ff]"}` : 'font-roboto text-[#ffffff37] text-[12px] font-normal'}
                        key={req.type}
                    >
                    {state[req.type] ? '✓' : '✗'} {req.short_msg}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Input