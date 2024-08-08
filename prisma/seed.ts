import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function AddProduct() {
    const product = await prisma.product.create({
        data: {
            title: 'Product 1',
            content: 'content',
            published: true
        },
    })
    console.log(product)
}
async function AllProduct() {
    const users = await prisma.product.findMany()
    console.log(users)
}


AllProduct()
    .catch(async (e) => {
        console.error(e)
        // process.exit(1)
    }).finally(async () => {
        await prisma.$disconnect()

    })