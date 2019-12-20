
const getMock = { get: jest.fn(() => { return Promise.resolve({ data: { } }) }) }
module.exports = {
    create: () => getMock,
    get: getMock

};
