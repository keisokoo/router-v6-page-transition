import { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Layout from './Layout'
import Main from './Main'
import MainTest from './MainTest'
import Test from './Test'
const RouteComponent = () => {
  const location = useLocation()
  useEffect(() => {
    console.log('location', location.pathname)
  }, [location])
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="fade" timeout={1000}>
        <Routes location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="asd" element={<MainTest />} />
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}
export default RouteComponent
{
  /* <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes> */
}
