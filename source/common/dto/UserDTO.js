export default class UserDTO {
    id: number;
    user_name: string;
    first_name: string;
    last_name: string;

    constructor(json) {
        this.id = json.id;
        this.user_name = json.user_name;
        this.first_name = json.first_name;
        this.last_name = json.last_name;
    }
}
