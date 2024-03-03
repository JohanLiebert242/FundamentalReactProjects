function Title({title}) {
    return (
        <>
            <h1 className='title'>{title || "Default title"}</h1>
            <div className='title-underline'></div>
        </>
    );
}

export default Title;