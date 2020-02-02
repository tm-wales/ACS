let name = "ACS";
let port = 3000;
let db = "ACS"
let websiteTitle = 'Architectual Cleaning Services Ltd'

const config = {
    production: {
        app: {
            name: name,
            port: port,
            websiteTitle: websiteTitle
        },
        session: {
            secret: 'Encrypt.me.Techmeleon.ACS@production'
        },
        database: 'mongodb://Techmeleon:tm101@techmeleon-shard-00-00-ubif4.mongodb.net:27017,techmeleon-shard-00-01-ubif4.mongodb.net:27017,techmeleon-shard-00-02-ubif4.mongodb.net:27017/' + db + '?ssl=true&replicaSet=Techmeleon-shard-0&authSource=admin',
        email: {
            service: "Outlook365",
            auth: {
                user: 'paula@acsfacades.uk',
                password: 'pa@acs102'
            }
        }
    },
    development: {
        app: {
            name: name,
            port: port,
            websiteTitle: websiteTitle
        },
        session: {
            secret: 'IseeDeadPeople'
        },
        database: 'mongodb://localhost:27017/' + db,
        email: {
            service: "Outlook365",
            auth: {
                user: 'paula@acsfacades.uk',
                password: 'pa@acs102'
            }
        }
    }
}

exports.get = function get(env) {
    return config[env] || config.development;
}