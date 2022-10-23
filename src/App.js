import Grid from "./components/Grid";
import classes from "./App.module.css"
function App() {
  return (
    <main className={classes.main}>
      <div className={classes.content}>
      <Grid/> 
      </div>
      <div className={classes.bg}/> 
    </main>
  );
}

export default App;

