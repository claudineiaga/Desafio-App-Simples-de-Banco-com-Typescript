import { DioAccount } from "./DioAccount";

export class ExampleAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        this.setAmout(amount+10)
    }

}