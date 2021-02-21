const { PORT, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, COOKIE_KEY } = process.env

export const __port__ = (PORT && parseInt(PORT)) || 3000
export const __google_client_id__ = GOOGLE_CLIENT_ID ? GOOGLE_CLIENT_ID : ""
export const __google_client_secret__ = GOOGLE_CLIENT_SECRET
  ? GOOGLE_CLIENT_SECRET
  : ""
export const __cookie_key__ = COOKIE_KEY ? COOKIE_KEY : "hellodefault"
