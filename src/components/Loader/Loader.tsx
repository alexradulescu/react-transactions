import React from 'react';

type Props = {
    message?: string
}

const Loader: React.FC<Props> = ({ message = 'Loading...'}) => {
    return (
        <div className="alert alert-light p-3 text-center">
            {message}
        </div>
    )
}

export default Loader;