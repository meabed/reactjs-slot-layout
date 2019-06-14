const Router = ReactRouterDOM.Router
const BrowserRouter = ReactRouterDOM.BrowserRouter
const HashRouter = ReactRouterDOM.HashRouter
const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link
const Page = ReactjsSlotLayout.Page
const Section = ReactjsSlotLayout.Section
const Slot = ReactjsSlotLayout.Slot
const LayoutProvider = ReactjsSlotLayout.Provider

console.log(ReactjsSlotLayout)

class OneColumnLayout extends React.Component {
  render() {
    const sections = this.props.sections
    return (
      <React.Fragment>
        <Slot sections={sections} name='content' component='<>' />
        <Slot sections={sections} name='footer' component='<>' />
      </React.Fragment>
    )
  }
}

const layouts = {
  OneColumn: OneColumnLayout,
}

const Home = () => (
  <div>
    <h2>Home</h2>
    ...
  </div>
)

const OneColumnPage = () => (
  <div>
    <Page layout={'OneColumn'}>
      <Section slot='content'>
        <h2>OneColumn content</h2>
        ...
      </Section>
      <Section slot='footer'>
        <h2>Footer</h2>
        ...
      </Section>
    </Page>
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
          <Route exact path='/' component={Home} />
          <Route path='/one-column' component={OneColumnPage} />
          <Route path='/two-column-right' component={TwoColumnRight} />
          <Route path='/two-column-left' component={TwoColumnLeft} />
          <Route path='/three-column' component={ThreeColumn} />
        </main>
      </div>
    )
  }
}


ReactDOM.render((
  <HashRouter>
    <LayoutProvider value={layouts}>
      <App />
    </LayoutProvider>
  </HashRouter>
), document.getElementById('root'))
