import './App.css';
import Checkbox from './component/Checkbox/Checkbox.tsx';
import Input from './component/Input/Input.tsx';
import Counter from './component/Counter/Counter.tsx';
import SelectedItem from './component/SelectedItem/SelectedItem.tsx';

function App() {
  return (
    <>
      <Checkbox id="cbSi" title="Si" />
      <Checkbox id="cbEsMiPadre" title="Es mi padre" />

      <Input id="txtNombre" title="Nombre completo" />

      <Counter id="txtPartoNatural" title="Parto natural."/>

      <SelectedItem title="Mano" subtitle=""/>

      <SelectedItem title="Corazón" subtitle="Mayo 2008"/>
    </>
  );
}

export default App;
