export function PostsApp({ bhatt }) {
    return (
        <>
            <div className="tablefetch">
                <table key={post.id}>
                    <thead>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}