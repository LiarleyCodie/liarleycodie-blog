import jwt from 'jsonwebtoken'
import 'dotenv/config'

export function generatePagination(currentPage: number, totalPages: number) {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages}, (_, i) => i + 1)
    }

    if (currentPage <= 3) {
        return [1,2,3, '...', totalPages - 1, totalPages]
    }

    if (currentPage >= totalPages - 2) {
        return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
}

export const verifyJWT = (token: any, currentPage: string = 'page') => {
    const { JWT_SECRET } = process.env

    if (JWT_SECRET && token) {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as {
                isAdmin: boolean
            }

            if (decoded && decoded?.isAdmin) {
                return true
            }
            return false
        } catch (err) {
            console.log(
                `\n> ❌ [${currentPage} | verifyJWT]: Error verifying JWT token`,
            )
            console.error(err)
            return false
        }
    } else {
        console.log(
            `\n> ❌ [${currentPage} | verifyJWT]: JWT_SECRET or Token is undefined`,
        )
        console.error({ message: 'JWT_SECRET or Token is undefined' })
        return false
    }
}