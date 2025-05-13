interface UserInterface {
    readonly id: string;
    email: string;
    password: string;
    // startTrail : () => string;
    // other method
    startTrial (): string;
}

const userInformation : UserInterface = {
    id: '1234',
    email: 'jha@.com',
    password: '1234',
    startTrial: () => {
        return 'trial started';
    }}