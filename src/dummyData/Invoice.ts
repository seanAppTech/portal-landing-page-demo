export interface InvoiceState {
    reference_no: string;
    customer_no: string;
    customer_first_name: string;
    customer_last_name: string;
    customer_username: 'string';
    invoice_amount: number;
    last_updated: Date;
    status: 'string';
};