import { Response } from "express"

type TResponse = {
    res: Response
    success: boolean
    statusCode: number
    message: string
    data: [] | {} | null
}

const sendRes = (resData: TResponse) => {
    const {res, success, statusCode, message, data} = resData

    return res.status(statusCode).json({
        success,
        statusCode,
        message,
        data
    })
}

export default sendRes