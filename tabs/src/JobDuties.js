function JobDuties({duties}) {
    return(
        <div>
            {duties.map((duty, index) => {
                return(
                    <p key={index}>{duty}</p>
                )
            })}
        </div>
    )
}

export default JobDuties;
