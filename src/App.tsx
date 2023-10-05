import React, { ReactNode, useContext, useState } from 'react';

import { AnotherVerySlowComponent, VerySlowComponent } from './components/very-slow-component';
import './styles.scss';

const Context = React.createContext({
  isNavExpanded: false,
  toggle: () => {},
});

const NavigationController = ({ children }: { children: ReactNode }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = () => setIsNavExpanded(!isNavExpanded);
  const value = { isNavExpanded, toggle };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useNavigation = () => useContext(Context);

const AdjustableColumnsBlock = () => {
  const { isNavExpanded } = useNavigation();
  return isNavExpanded ? <div>two block items here</div> : <div>three block items here</div>;
};

const MainPart = () => {
  return (
    <>
      <VerySlowComponent />
      <AnotherVerySlowComponent />
      <AdjustableColumnsBlock />
    </>
  );
};

const ExpandButton = () => {
  const { isNavExpanded, toggle } = useNavigation();

  return <button onClick={toggle}>{isNavExpanded ? 'collapse <' : 'expand >'}</button>;
};

const SidebarLayout = ({ children }: { children: ReactNode }) => {
  const { isNavExpanded } = useNavigation();
  return (
    <div className="left" style={{ flexBasis: isNavExpanded ? '50%' : '20%' }}>
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <SidebarLayout>
      {/* this one will control the expand/collapse */}
      <ExpandButton />

      <ul>
        <li>
          <a href="#">some links</a>
        </li>
      </ul>
    </SidebarLayout>
  );
};

const Layout = ({ children }: { children: ReactNode }) => <div className="three-layout">{children}</div>;

const Page = () => {
  return (
    <NavigationController>
      <Layout>
        <Sidebar />
        <MainPart />
      </Layout>
    </NavigationController>
  );
};

export default function App() {
  return (
    <>
      <h3>Very slow "Page" component - click on expand/collapse to toggle nav</h3>
      <p>Only components that use Context are now re-render</p>
      <p>Expand/collapse of the navigation doesn't trigger re-render of the slow components anymore, because of Context</p>
      <Page />
    </>
  );
}
