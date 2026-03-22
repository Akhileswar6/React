function Status({status}) {
    return (
        <div>
            {status === "loading" && <p>Loading...</p>}
            {status === "success" && <p>Data loaded successfully!</p>}
            {status === "error" && <p>Error loading data.</p>}
        </div>
    )
}

export default Status;



