

const MyPage=(props)=>{
    console.log(props);
    return(
        <div>
            
            <h3>This is Client side rendering</h3>
            {
                props.data.users.map(user=> <li key={user.id}>{user.firstName}</li>)
            }
        </div>
    )
}
export const getServerSideProps=async() =>{
     const data = await (await fetch(`https://dummyjson.com/users`)).json()
    return{
        props:{
            data,
        },
    };
};
export default MyPage;