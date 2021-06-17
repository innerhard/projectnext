//@ts-nocheck
import { queryStaticData } from './src/api'
import TelegramApi from 'node-telegram-bot-api'
import nodeHtmlToImage from 'node-html-to-image'
import fs from 'fs'

const token = '1805877292:AAF4w2MmrivzN8z4tS8wHUaZ4hHghCVxZ14'

const bot = new TelegramApi(token, { polling: true })

bot.on('message', async (msg: any) => {
    const text = msg.text
    const chatId = msg.chat.id

    if (text === '/start') {
        await bot.sendMessage(chatId, `Ты написал мне ${text}`)
    }

    if (text === '/300') {
        await bot.sendMessage(chatId, `Откуси у  прогроммиста`)
    }

    if (text === '/delivery') {
        const a = await queryStaticData('http://localhost:1337/deliveries')
        const result = a.map(item => {
            return `<div>${item.id}${item.deliver}</div>`
        })

        nodeHtmlToImage({
            output: './image.jpg',
            html: `<html><body style="width:1024px; height: 768px;"><div style="display:grid; grid-template-columns: repeat(12, 1fr)">${result}</div></body></html>`,
        }).then(async () => {
            console.log('The image was created successfully!')


            await bot.sendPhoto(chatId, `image.jpg`)
        })
    }
})

console.table([1, 2, 3, 4, 5, 6])
export {}
