import Chance from 'chance'
const change = new Chance()

export const randomUUID = () => change.guid()
export const randomName = () => change.name()
export const randomEmail = () => change.email()
export const randomId = () => change.fbid()
export const randomJobTitle = () => change.profession()
export const randomCompanyName = () => change.company()
export const randomSentence = (words =5) => change.sentence({words})
export const randomTitleText = (words =3) => change.sentence({words})
export const randomParagraphs = (sentences = 3) => change.paragraph({sentences})
