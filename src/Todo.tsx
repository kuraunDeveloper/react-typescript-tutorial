import { TodoType } from "./types/todo";

export const Todo = (props: Pick<TodoType, "id" | "name" | "email">) => {
    const { id, name, email = '' } = props;
    const emailString : string = email ? email : 'unregistered';
    return (
        <p>{`${name}(ユーザー：${id})(mail:${emailString})`}</p>
    )
}