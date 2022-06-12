export interface IError {
  data: {
    statusCode: number,
    message?: string,
    error?: string,
    errors?: {
      [key: string]: any;
    }
  },
  status: number
}