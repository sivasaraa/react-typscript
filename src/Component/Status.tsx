type statusProps = {
    status : string
}

export const Status = (props: statusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }else if(props.status === 'failure'){
        message = 'Error in fetching data'
    }
    return (
        <div>
            <h2>status - {message}</h2>
        </div>
    )
}