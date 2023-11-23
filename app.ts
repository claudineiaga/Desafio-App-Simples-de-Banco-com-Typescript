import { CompanyAccount } from './class/CompanyAccount'
import { ExampleAccount } from './class/ExampleAccount';
import { PeopleAccount } from './class/PeopleAccount'

/*
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Clau', 10)
console.log(peopleAccount)

const saque = peopleAccount.withdraw(20);
console.log(peopleAccount)
*/
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(34)
companyAccount.withdraw(20);
companyAccount.getLoan(400)
console.log(companyAccount)

const exampleAccount: ExampleAccount = new ExampleAccount('Clau', 79)
exampleAccount.deposit(20)
console.log(exampleAccount)
