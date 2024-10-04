const dev = process.env.NODE_ENV !== 'production'

// TODO - change this to your deployed URL
export const serverURL = dev ? 'http://localhost:3000' : ''
