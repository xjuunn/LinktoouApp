export default class User {
    constructor(id: string, name: string, conn: { send: any }) {
        this.id = id;
        this.name = name;
        this.conn = conn;
    }


    id: string;
    name: string;
    conn: any;
    online: boolean = false;
    public_rsa_key: string = '';



}
