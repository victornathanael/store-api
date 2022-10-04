import pg from 'pg';

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }
    const pool = new pg.Pool({
        connectionString:
            'postgres://wtujzvqt:ioGsi6xtQudyl7_OIFK3ovkrJuq2P3M3@babar.db.elephantsql.com/wtujzvqt',
    });
    global.connection = pool;

    return pool.connect();
}

export { connect };
