export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private amount: number = 0
  private saque: number = 0
  private emprestimo: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getStatus = (): boolean => {
    return this.status
  }

  setEmprestimo = (emprestimo: number): void => {
    this.emprestimo += emprestimo
    console.log('Emprestimo alterado com sucesso')
  }
  
  getEmprestimo = (): number => {
    return this.emprestimo
  }

  setAmout = (amount: number): void => {
    this.amount = amount
    console.log('Valor alterado com sucesso')
  }

  getAmount = (): number => {
    return this.amount
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    this.amount = amount
    if(this.validateStatus()){
      this.balance =+ amount;
      console.log('Voce depositou')
    }
  }

  withdraw = (saque: number): void => {
    if (this.balance >= saque && this.status == true) {
      this.saque = saque
      this.balance -= saque;
      console.log("Saque realizado");
    } else {
      this.saque = 0
      console.log("Não tem saldo ou não pode sacar");
    }
  }

  getBalance = (): void => {
    this.balance = this.amount - this.saque
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
