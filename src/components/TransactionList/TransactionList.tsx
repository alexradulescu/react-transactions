/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
// import { ThemeProvider, useTheme } from 'emotion-theming'
// import { theme } from '../../utils/theme';

const transactionList = [
    { timestamp: '2019/10/15', from: '111', to:'222', action: 'credit', description:'Hello 1',  amount: 1234, currency: 'HKD'},
    { timestamp: '2019/10/16', from: '333', to:'222', action: 'credit', description:'Hello 2',  amount: 2143, currency: 'HKD'},
    { timestamp: '2019/10/17', from: '333', to:'111', action: 'debit', description:'Hello 3',  amount: 324, currency: 'SGD'}
]
const itemStyle = css({
    '&:nth-child(2n)' : {
        backgroundColor: '#F8F9FA',
    }
  })
  

const TransactionList: React.FC = () => {
    // const theme = useTheme()

    return (
        <ul className="list-group">
            {transactionList.map(transaction => (
                <li 
                    className="list-group-item d-flex justify-content-between"
                    key={Math.random()}
                    css={itemStyle}
                    >
                    <div>
                        <p className="mb-0 lead">{transaction.description}</p>
                        <small className="mb-0 text-secondary">{transaction.timestamp}</small>
                    </div>
                    <div>
                        <strong className={transaction.action === 'credit' ? 'text-success':'text-danger'}>
                            {transaction.currency} {transaction.amount}
                        </strong>
                    </div>
                </li>
            ))}
            
        </ul>
    )
}

export default TransactionList;