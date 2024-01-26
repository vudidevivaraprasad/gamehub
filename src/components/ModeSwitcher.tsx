interface Props{
    click:(value:boolean)=>void
}

const Mode_switcher = ({click}:Props) => {
    return(
        <div className="form-check form-switch py-2">
            <input type="checkbox" className="form-check-input" id="mode" style={{color:"red"}} onChange={(event)=>click(event.target.checked)}/>
            <label htmlFor="mode" className="form-check-label fw-bold">Dark</label>
        </div>
    )
}

export default Mode_switcher