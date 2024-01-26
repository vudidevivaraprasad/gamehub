const Skeleton = ({values}:{values:number[]}) => {
    return(
        <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-md-5 g-3 my-0">
                {values.map(value => 
                    <div className="col" key={value}>
                        <div className="card overflow-hidden" aria-hidden="true" style={{boxShadow: "10px 8px 20px rgb(181, 181, 181)"}}>
                            <div className="placeholder-glow">
                                <span className="placeholder" style={{width:"600px",height:"200px"}}></span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Skeleton