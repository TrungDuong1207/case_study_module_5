export enum TransactionType {
    DEPOSIT = 'DEPOSIT',
    TRANSFER = 'TRANSFER',
    RECEIVE = 'RECEIVE',
    PAYMENT = 'PAYMENT',
    WITHDRAW = 'WITHDRAW',
    REFUND = 'REFUND',
}

export enum TransactionStatus {
    SUCCESS = 'SUCCESS',
    APPROVED = 'APPROVED',
    PENDING = 'PENDING',
    FAILURE = 'FAILURE',
    REFUNDED = 'REFUNDED',
    NEW = 'NEW',
}
