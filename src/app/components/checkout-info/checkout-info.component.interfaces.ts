export interface checkoutFormsInterface {
    id: number;
    section: string;
    fields: 
        {
            id: number;
            display: string;
            name: string;
            value: string;
            type: string;
            fullWidth: boolean
    }[]
}