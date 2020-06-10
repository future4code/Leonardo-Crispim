import { UserRoleEnum } from "./UserRoles";

export class UserListener{
    constructor(
        private id: string,
        private name: string,
        private nickname: string,
        private email: string,
        private password: string,
        private role: UserRoleEnum,
        private approbation: boolean = true
    ) {}

    get userId(): string {
        return this.id;
    }
    set userId(value: string) {
        this.id = value;
    }
    get userName(): string {
        return this.name;
    }
    set userName(value: string) {
        this.name = value;
    }
    get userNickname(): string {
        return this.nickname;
    }
    set userNickname(value: string) {
        this.nickname = value;
    }
    get userEmail(): string {
        return this.email;
    }
    set userEmail(value: string) {
        this.email = value;
    }
    get userRole(): UserRoleEnum {
        return this.role;
    }
    set userRole(value: UserRoleEnum) {
        this.role = value;
    }
    get userPassword(): string {
        return this.password;
    }
    set userPassword(value: string) {
        this.password = value;
    }
    get data(): any {
        const data = {
            id: this.id,
            name: this.name,
            nickname: this.nickname,
            email: this.email,
            password: this.password,
            role: this.role,
            approbation: this.approbation
        }
        return data
    }
}