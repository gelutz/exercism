// Given a string representing a matrix of numbers, return the rows and columns of
// that matrix.

export class Matrix {
  // não faço ideia do que está fazendo
  // github copilot fez tudo
  constructor(public matrix: string) {
    this.matrix = matrix;
  }

  public get rows(): number[][] {
    return this.getRows();
  }

  public get columns(): number[][] {
    return this.getColumns();
  }

  // Returns array with rows in the matrix
  public getRows(): number[][] {
    return this.matrix.split('\n').map(row => row.split(' ').map(Number));
  }
  

  // Returns array with columns array
  public getColumns(): number[][] {
    const columns = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      const column = this.rows.map(row => row[i]);
      columns.push(column);
    }
    return columns;
  }
}