import React from 'react';

import TransactionList from '../../components/TransactionList/TransactionList';
import AccountSelector from '../../components/AccountSelector/AccountSelector';

const TransactionsPage: React.FC = () => {
    return (
        <>
            <AccountSelector />
            <h2>Transactions</h2>
            <TransactionList />
        </>
    )
}

export default TransactionsPage