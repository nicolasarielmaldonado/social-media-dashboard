import faker from 'faker';

export const dataRequest = (seed) => {

    faker.seed(seed);
    const data = {
        userName : faker.internet.userName(),
        socialMedia : [
            {
                title: "facebook",
                followers: faker.datatype.number(500)+25,
                daily: (faker.datatype.number(25) - faker.datatype.number(25)),
                pageViews: faker.datatype.number(100),
                pageViewsChange : (faker.datatype.number(25) - faker.datatype.number(25)),
                likes: faker.datatype.number(50),
                likesChange: (faker.datatype.number(25)),
            },
            {
                title: "twitter",
                followers: faker.datatype.number(500)+25,
                daily: (faker.datatype.number(25) - faker.datatype.number(25)),
                retweets : faker.datatype.number(50),
                retweetsChange : (faker.datatype.number(25) - faker.datatype.number(25)),
                likes: faker.datatype.number(100),
                likesChange: (faker.datatype.number(25)),
            },
            {
                title: "instagram",
                followers: faker.datatype.number(500)+25,
                daily: (faker.datatype.number(25) - faker.datatype.number(25)),
                profileViews: faker.datatype.number(100),
                profileViewsChange : (faker.datatype.number(25) - faker.datatype.number(25)),
                likes: faker.datatype.number(50),
                likesChange: (faker.datatype.number(25)),
            }
        ]
    }
    return data;
}