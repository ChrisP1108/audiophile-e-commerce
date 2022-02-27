export interface checkoutFormsInterface {
    id: number;
    section: string;
    subSection? : string;
    fields: 
        {
            id: number;
            display: string;
            name: string;
            type: string;
            fullWidth: boolean;
            errMsg: string;
    }[]
}