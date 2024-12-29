type TodoType = {
    id: number;
    name: string;
    email?: string;
}

export const Todo = (props: TodoType) => {
    const { id, name, email = '' } = props;
    const emailString : string = email ? email : 'unregistered';
    return (
        <p>{`${name}(ユーザー：${id})(mail:${emailString})`}</p>
    )
}