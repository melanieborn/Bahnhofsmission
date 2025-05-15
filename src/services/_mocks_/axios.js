const mockAxios = jest.genMockFromModule('axios') // eslint-disable-line no-undef

// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios) // eslint-disable-line no-undef

export default mockAxios