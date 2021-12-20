import './App.css';
import Form from './Form';

function App() {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => console.log(state));
 

  // useEffect(() => {
  //   dispatch(onLoadAction(users));
  // }, []);

  return (
    <div className="App">
      {/* <h1>Contact Details!</h1> */}
      <Form />
      {/* {loading && <h2>loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}  */}
    </div>
  );
}

export default App;

