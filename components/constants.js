module.exports = {
    SESSION_IDLE_LIMIT: 36000000,
    SESSION_HEADER: 'Auth',

    DB_TYPE: process.env.DB_TYPE,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,

    ACTIVE_DIR_STAFF: process.env.ACTIVE_DIR_STAFF,
    ACTIVE_DIR_USER: process.env.ACTIVE_DIR_USER,
}
