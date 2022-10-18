import { InvoiceState } from "./Invoice";

export const dummyData: Array<InvoiceState> = [
    {
        reference_no: '11111111111',
        customer_no: '123123123',
        customer_first_name: 'John',
        customer_last_name: 'Smith',
        customer_username: 'jsmith',
        invoice_amount: 111.12,
        last_updated: new Date('December 17, 1995 03:24:00'),
        status: 'paid'
    },
    {
        reference_no: '11187611112',
        customer_no: '123123124',
        customer_first_name: 'Test',
        customer_last_name: 'McTester',
        customer_username: 'tMac',
        invoice_amount: 4441.12,
        last_updated: new Date('January 17, 2021 05:04:00'),
        status: 'paid'
    },
    {
        reference_no: '11009111113',
        customer_no: '123123126',
        customer_first_name: 'Ace',
        customer_last_name: 'BadLastName',
        customer_username: 'aceOfBase',
        invoice_amount: 4533.12,
        last_updated: new Date('March 04, 2022 16:04:00'),
        status: 'pending'
    },
    {
        reference_no: '11009954113',
        customer_no: '123144426',
        customer_first_name: 'That',
        customer_last_name: 'Person',
        customer_username: 'aperson',
        invoice_amount: 15.15,
        last_updated: new Date('October 14, 2022 16:04:00'),
        status: 'cancelled'
    },
    {
        reference_no: '44409954113',
        customer_no: '444144426',
        customer_first_name: 'Jennifer',
        customer_last_name: 'Unkown',
        customer_username: 'jen5309',
        invoice_amount: 700.00,
        last_updated: new Date('October 1, 2010 16:04:00'),
        status: 'paid'
    },
    {
        reference_no: '44409944444',
        customer_no: '444222426',
        customer_first_name: 'Geddy',
        customer_last_name: 'Lee',
        customer_username: 'highpitchvoiceguy',
        invoice_amount: 543.32,
        last_updated: new Date('February 1, 2010 16:04:00'),
        status: 'paid'
    },
    {
        reference_no: '44409954110',
        customer_no: '444144426',
        customer_first_name: 'Jennifer',
        customer_last_name: 'Unkown',
        customer_username: 'jen5309',
        invoice_amount: 700.00,
        last_updated: new Date('October 1, 2010 16:04:00'),
        status: 'pending'
    },
    {
        reference_no: '666666666666',
        customer_no: '444144426',
        customer_first_name: 'Ozzy',
        customer_last_name: 'Osbourne',
        customer_username: 'batsAreFriends',
        invoice_amount: 80.32,
        last_updated: new Date('October 31, 2021 16:44:00'),
        status: 'paid'
    },
    {
        reference_no: '66669954113',
        customer_no: '444144426',
        customer_first_name: 'Marty',
        customer_last_name: 'McFly',
        customer_username: 'outtatime85',
        invoice_amount: 1955.00,
        last_updated: new Date('November 25, 1955 12:00:00'),
        status: 'paid'
    },
    {
        reference_no: '44409954122',
        customer_no: '444144426',
        customer_first_name: 'Frederick',
        customer_last_name: 'Frankenstein',
        customer_username: 'pronouncedFrankenstein',
        invoice_amount: 666.00,
        last_updated: new Date('October 31, 1970 16:04:00'),
        status: 'pending'
    },
];