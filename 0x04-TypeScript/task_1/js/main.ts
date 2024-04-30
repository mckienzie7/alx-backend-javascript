interface Teacher{
    firstName: string;
    lastName: string;
    fullTimeEmployee: true | false;
    yearsofExperience?: number;
    location: string;
    [key :string] : any;
}