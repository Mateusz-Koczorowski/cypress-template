import { faker } from '@faker-js/faker';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

export const articleGenerator = () => {
    const article = {
        title: faker.word.words({ min: 5, max: 10}),
        freeContent: faker.lorem.sentences({ min: 1, max: 10 }),
        premiumContent: faker.lorem.sentences({ min: 1, max: 10 }),
        altText: faker.word.words({ min: 5, max: 10}),
        image: 'cypress/support/images/' + faker.helpers.arrayElement(images),
    } 
    
    return article
}