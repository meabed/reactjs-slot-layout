const Router = ReactRouterDOM.Router
const BrowserRouter = ReactRouterDOM.BrowserRouter
const HashRouter = ReactRouterDOM.HashRouter
const Route = ReactRouterDOM.Route
const Link = ReactRouterDOM.Link
const Page = ReactjsSlotLayout.Page
const Section = ReactjsSlotLayout.Section
const Slot = ReactjsSlotLayout.Slot
const LayoutProvider = ReactjsSlotLayout.Provider


const HeaderMenu = () => (
  <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
    <Link className='my-0 mr-md-auto font-weight-normal h5' to={`/`}>Home</Link>
    <nav className='my-2 my-md-0 mr-md-3'>
      <Link className='p-2 text-dark' to={`/one-column`}>OneColumn</Link>
      <Link className='p-2 text-dark' to={`/two-column-right`}>TwoColumnRight</Link>
      <Link className='p-2 text-dark' to={`/two-column-left`}>TwoColumnLeft</Link>
      <Link className='p-2 text-dark' to={`/three-column`}>ThreeColumn</Link>
    </nav>
  </div>
)

const Footer = () => (
  <div className='row'>
    <div className='col-12 col-md'>
      <small className='d-block mb-3 text-muted'>©2019 website.com</small>
    </div>
    <div className='col-6 col-md'>
      <h5>Features</h5>
      <ul className='list-unstyled text-small'>
        <li><a className='text-muted' href='#'>Link</a></li>
      </ul>
    </div>
    <div className='col-6 col-md'>
      <h5>Resources</h5>
      <ul className='list-unstyled text-small'>
        <li><a className='text-muted' href='#'>Link</a></li>
      </ul>
    </div>
    <div className='col-6 col-md'>
      <h5>About</h5>
      <ul className='list-unstyled text-small'>
        <li><a className='text-muted' href='#'>Link</a></li>
      </ul>
    </div>
  </div>
)

const OneColumnLayout = ({ sections }) => (
  <React.Fragment>
    <Slot sections={sections} name='header' component='<>'>
      <HeaderMenu />
    </Slot>
    <Slot sections={sections} name='content-container' component='div' className='container'>
      <Slot sections={sections} name='content' component='<>' />
    </Slot>
    <Slot sections={sections} name='footer-container' component='div' className='container'>
      <Slot sections={sections} name='footer-tag' component='footer' className='pt-4 my-md-5 pt-md-5 border-top'>
        <Slot sections={sections} name='footer' component='<>'>
          <Footer />
        </Slot>
      </Slot>
    </Slot>
  </React.Fragment>
)

const TwoColumnRightLayout = ({ sections }) => (
  <React.Fragment>
    <Slot sections={sections} name='header' component='<>'>
      <HeaderMenu />
    </Slot>
    <div className='container'>
      <div className='row'>
        <Slot sections={sections} name='content' component='div' className='col-md-8' />
        <Slot sections={sections} name='right-column' component='div' className='col-md-4' />
      </div>
    </div>
    <Slot sections={sections} name='footer-container' component='div' className='container'>
      <Slot sections={sections} name='footer-tag' component='footer' className='pt-4 my-md-5 pt-md-5 border-top'>
        <Slot sections={sections} name='footer' component='<>'>
          <Footer />
        </Slot>
      </Slot>
    </Slot>
  </React.Fragment>
)

const TwoColumnLeftLayout = ({ sections }) => (
  <React.Fragment>
    <Slot sections={sections} name='header' component='<>'>
      <HeaderMenu />
    </Slot>
    <div className='container'>
      <div className='row'>
        <Slot sections={sections} name='left-column' component='div' className='col-md-4' />
        <Slot sections={sections} name='content' component='div' className='col-md-8' />
      </div>
    </div>
    <Slot sections={sections} name='footer-container' component='div' className='container'>
      <Slot sections={sections} name='footer-tag' component='footer' className='pt-4 my-md-5 pt-md-5 border-top'>
        <Slot sections={sections} name='footer' component='<>'>
          <Footer />
        </Slot>
      </Slot>
    </Slot>
  </React.Fragment>
)

const ThreeColumnLayout = ({ sections }) => (
  <React.Fragment>
    <Slot sections={sections} name='header' component='<>'>
      <HeaderMenu />
    </Slot>
    <div className='container'>
      <div className='row'>
        <Slot sections={sections} name='column-1' component='div' className='col-md-3' />
        <Slot sections={sections} name='column-2' component='div' className='col-md-6' />
        <Slot sections={sections} name='column-3' component='div' className='col-md-3' />
      </div>
    </div>
    <Slot sections={sections} name='footer-container' component='div' className='container'>
      <Slot sections={sections} name='footer-tag' component='footer' className='pt-4 my-md-5 pt-md-5 border-top'>
        <Slot sections={sections} name='footer' component='<>'>
          <Footer />
        </Slot>
      </Slot>
    </Slot>
  </React.Fragment>
)

const layouts = {
  OneColumn: OneColumnLayout,
  TwoColumnRight: TwoColumnRightLayout,
  TwoColumnLeft: TwoColumnLeftLayout,
  ThreeColumn: ThreeColumnLayout,
}

const Home = () => (
  <React.Fragment>
    <Page layout={'OneColumn'}>
      <Section slot='content'>
        <h3 className='text-center'>Home Content Example</h3>
        <h4 className='text-center'>Change layout when you browse different routers</h4>
      </Section>
    </Page>
  </React.Fragment>
)

const OneColumnPage = () => (
  <React.Fragment>
    <Page layout={'OneColumn'}>
      <Section slot='content'>
        <h3 className='text-center'>One Column Content Example</h3>
      </Section>
      <Section slot='footer'>
        <h3 className='text-center text-danger'>Override / Change Footer Content Section</h3>
        <pre>
          <code>
            &#x3C;Section slot=&#x27;footer&#x27;&#x3E;
            &#x3C;h3 className=&#x27;text-center&#x27;&#x3E;Override / Change Footer Content Section&#x3C;/h3&#x3E;
            &#x3C;/pre&#x3E;
            &#x3C;/Section&#x3E;
          </code>
        </pre>
      </Section>
    </Page>
  </React.Fragment>
)

const TwoColumnRight = () => (
  <React.Fragment>
    <Page layout={'TwoColumnRight'}>
      <Section slot='right-column'>
        <h3>Right column</h3>
      </Section>
      <Section slot='content'>
        <h3>Two Column Right Main Content Example</h3>
      </Section>
    </Page>
  </React.Fragment>
)

const TwoColumnLeft = () => (
  <React.Fragment>
    <Page layout={'TwoColumnLeft'}>
      <Section slot='left-column'>
        <h3>Left column</h3>
      </Section>
      <Section slot='content'>
        <h3>Two Column Left Main Content Example</h3>
      </Section>
      <Section slot='footer'>
        <h3 className='text-center text-danger'>
          Override / Change Footer Content Section
        </h3>
      </Section>
    </Page>
  </React.Fragment>
)

const ThreeColumn = () => (
  <React.Fragment>
    <Page layout={'ThreeColumn'}>
      <Section slot='column-1'>
        <h3>Left column</h3>
      </Section>
      <Section slot='column-2'>
        <h3>Middle / Main Column</h3>
      </Section>
      <Section slot='column-3'>
        <h3>Right Column</h3>
      </Section>
    </Page>
  </React.Fragment>
)

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/one-column' component={OneColumnPage} />
        <Route path='/two-column-right' component={TwoColumnRight} />
        <Route path='/two-column-left' component={TwoColumnLeft} />
        <Route path='/three-column' component={ThreeColumn} />
      </React.Fragment>
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
