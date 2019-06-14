const Router = ReactRouterDOM.Router
const BrowserRouter = ReactRouterDOM.BrowserRouter
const HashRouter = ReactRouterDOM.HashRouter
const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link

const Home = () => (
  <div>
    <h2>Home</h2>
    ...
  </div>
)

const OneColumn = () => (
  <div>
    <h2>OneColumn</h2>
    ...
  </div>
)

const TwoColumnRight = () => (
  <div>
    <h2>TwoColumnRight</h2>
    ...
  </div>
)

const TwoColumnLeft = () => (
  <div>
    <h2>TwoColumnLeft</h2>
    ...
  </div>
)

const ThreeColumn = () => (
  <div>
    <h2>ThreeColumn</h2>
    ...
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <aside>
          <Link to={`/`}>Home</Link>
          &nbsp; - <Link to={`/one-column`}>OneColumn</Link>
          &nbsp; - <Link to={`/two-column-right`}>TwoColumnRight</Link>
          &nbsp; - <Link to={`/two-column-left`}>TwoColumnLeft</Link>
          &nbsp; - <Link to={`/three-column`}>ThreeColumn</Link>
        </aside>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/one-column" component={OneColumn} />
          <Route path="/two-column-right" component={TwoColumnRight} />
          <Route path="/two-column-left" component={TwoColumnLeft} />
          <Route path="/three-column" component={ThreeColumn} />
        </main>
      </div>
    )
  }
}


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
