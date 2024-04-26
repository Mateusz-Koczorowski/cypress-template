import { faker } from '@faker-js/faker';

const images = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg', './images/image4.jpg'];

export const articleGenerator = () => {
    const article = {
        title: faker.word.words({ min: 5, max: 10}),
        freeContent: faker.lorem.sentences({ min: 10, max: 100 }),
        premiumContent: faker.lorem.sentences({ min: 10, max: 100 }),
        altText: faker.word.words({ min: 5, max: 10}),
        faker: faker.helpers.arrayElement(images),
    } 
    
    return article
}