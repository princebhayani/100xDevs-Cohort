
export default function xyz({children} : {
    children:React.ReactNode
}){
    return( <div> <div className="border-b text-center">
        20% off for next 3 days
    </div>
    {children}
    </div>
    )
}