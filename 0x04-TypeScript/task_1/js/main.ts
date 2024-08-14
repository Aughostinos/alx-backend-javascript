/* Creating Teacher interface */
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

/*Directors interface */
interface Directors extends Teacher {
    numberOfReports: number;
}