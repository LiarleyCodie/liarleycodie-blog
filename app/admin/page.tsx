import { SignIn } from '@phosphor-icons/react/dist/ssr'
import DOMPurify from 'isomorphic-dompurify'
import bcrypt from 'bcrypt'
import { getAdminTokens } from '../lib/databaseConnection'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { v4 as uuidv4 } from 'uuid'

export default function Admin() {
    async function Auth(formData: FormData) {
        'use server'

        const { JWT_SECRET } = process.env

        const rawFormData = {
            password1: formData.get('password1'),
            password2: formData.get('password2'),
        }

        const sanitizedFormData = {
            password1: DOMPurify.sanitize(String(rawFormData.password1).trim()),
            password2: DOMPurify.sanitize(String(rawFormData.password2).trim()),
        }

        async function generateHashedPassword(
            password: string,
        ): Promise<string> {
            const saltRounds = 10

            return new Promise((resolve, reject) => {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        console.log(
                            '> ❌ [/Admin | generateHashedPassword]: something goes wrong while generating salt',
                        )
                        console.error(err)
                        reject(err)
                        return
                    }

                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.log(
                                '> ❌ [/Admin | generateHashedPassword]: something goes wrong while generating hash',
                            )
                            console.error(err)
                            reject(err)
                            return
                        }

                        resolve(hash)
                    })
                })
            })
        }

        async function compareHashedPassword(
            password: string,
            databaseHash: string,
        ): Promise<boolean> {
            return new Promise((resolve, reject) => {
                bcrypt.compare(password, databaseHash, (err, result) => {
                    if (err) {
                        console.log(
                            '> ❌ [/Admin | compareHashedPassword]: something goes wrong while comparing hashes',
                        )
                        console.error(err)
                        reject(err)
                        return
                    }

                    resolve(result)
                })
            })
        }

        const password1Hash = await generateHashedPassword(
            sanitizedFormData.password1,
        )
        const password2Hash = await generateHashedPassword(
            sanitizedFormData.password2,
        )

        const { hash1, hash2 } = Array.from(await getAdminTokens())[0]

        const password1IsValid = await compareHashedPassword(
            sanitizedFormData.password1,
            hash1,
        )
        const password2IsValid = await compareHashedPassword(
            sanitizedFormData.password2,
            hash2,
        )

        if (!password1IsValid || !password2IsValid) {
            return redirect('/?error=notfound')
        } else {
            // THIS NEED TO BE IMPROVED!

            const generateJWT = () => {
                const tokenData = {
                    id: uuidv4(),
                    isAdmin: true,
                }

                return new Promise((resolve, reject) => {
                    if (JWT_SECRET) {
                        jwt.sign(
                            tokenData,
                            JWT_SECRET,
                            {
                                expiresIn: '1d',
                            },
                            (err, token) => {
                                if (err) {
                                    console.log(
                                        '> ❌ [/Admin | generateJWT]: something goes wrong while generating JWT Token',
                                    )
                                    console.error(err)
                                    reject(err)
                                }

                                resolve(token)
                            },
                        )
                    }
                    else {
                        console.error(
                            '> ❌ [/Admin | generateJWT]: JWT_SECRET is undefined',
                        )
                        reject({ message: 'JWT_SECRET is undefined'})
                    }
                })
            }

            const token = await generateJWT()

            cookies().set({
                name: 'auth',
                value: String(token),
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                path: '/',
            })

            console.log('You can loggin!')
        }
    }

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-200 text-gray-700 dark:bg-gray-950 dark:text-gray-300 px-2">
            <form
                action={Auth}
                method="POST"
                className="flex flex-col gap-4 w-full max-w-96"
            >
                <input
                    autoComplete="false"
                    className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 border w-full border-gray-400 dark:border-gray-800 rounded-md"
                    type="text"
                    placeholder="password 1"
                    name="password1"
                />
                <input
                    autoComplete="false"
                    className="outline focus-within:bg-gray-200 outline-4 outline-transparent dark:focus-within:bg-gray-950 focus-within:outline-indigo-500/20 duration-200 focus-within:border-indigo-500 dark:bg-gray-900 bg-gray-300 text-sm text-gray-800 dark:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-gray-500 py-2 px-4 w-full border border-gray-400 dark:border-gray-800 rounded-md"
                    type="text"
                    placeholder="password 2"
                    name="password2"
                />
                <button
                    type="submit"
                    className="bg-gray-300 gap-2 active:bg-gray-200 duration-200 cursor-pointer dark:active:bg-gray-950 border-gray-400 dark:bg-gray-900 border hover:text-indigo-600 text-gray-600 dark:hover:text-indigo-300 dark:border-gray-800 text-sm dark:text-gray-400 dark:hover:bg-gray-800 hover:border-indigo-600 dark:hover:border-indigo-500 flex justify-center items-center py-2 px-4 rounded-md"
                >
                    Auth <SignIn size={22} />
                </button>
            </form>
        </main>
    )
}
