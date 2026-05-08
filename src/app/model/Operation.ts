export enum OperationType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export interface Operation {
  id: number;
  operationDate: string;
  amount: number;
  type: OperationType;
  description: string;
  accountId: string;
}
