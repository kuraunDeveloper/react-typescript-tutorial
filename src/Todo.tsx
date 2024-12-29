export const Todo = (props: { id: number; name: string }) => {
    const { id, name } = props;
    return (
        <p>{`${name}(ユーザー：${id})`}</p>
    )
}