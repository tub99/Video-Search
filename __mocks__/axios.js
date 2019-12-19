
const getMock = { get: jest.fn(() => { return { data: {} } }) }
module.exports = {
    create: () => getMock,
    get: getMock

};
