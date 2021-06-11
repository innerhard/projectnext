//@ts-nocheck
import { queryStaticData } from './src/api'
import TelegramApi from 'node-telegram-bot-api'

const token = '1805877292:AAF4w2MmrivzN8z4tS8wHUaZ4hHghCVxZ14'

const bot = new TelegramApi(token, { polling: true })

bot.on('message', async (msg: any) => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === '/start') {
        await bot.sendMessage(chatId, `Ты написал мне ${text}`)
    }

    if (text === '300') {
        await bot.sendMessage(chatId, `Отсоси у тракториста`)
    }

    if (text === 'delivery') {
        const a = await queryStaticData('http://localhost:1337/deliveries')
        console.log(a.data)
        a.map(async item => {
            return await bot.sendMessage(chatId, `${item.id}${item.deliver}`)
        })
    }
})
console.table([1, 2, 3, 4, 5, 6])
export {}
