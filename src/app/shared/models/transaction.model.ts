export class Transaction {

  constructor(public id?: number,
              public description?: string,
              public value?: number,
              public date?: Date,
              public type?: string,
              public category?: string,
              public image?: string,
              public observations?: string) {}

}
