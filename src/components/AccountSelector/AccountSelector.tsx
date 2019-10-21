import React from 'react';

const AccountSelector: React.FC = () => {
    return (
        <div className="card mb-3 text-center bg-light">
            <div className="card-body">
                <label className="form-group d-block mb-3">
                    <p className="mb-1">Select Account</p>
                    <select className="custom-select">
                        <option>2323-4-32-4</option>
                        <option>45-64-56-456</option>
                        <option>13-74-374-7437</option>
                        <option>134634-513-46</option>
                    </select>
                </label>

            </div>
        </div>
    )
}

export default AccountSelector;