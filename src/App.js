import './App.css';
import Checkbox from './component/Checkbox.tsx';
import Input from './component/Input.tsx';
import Counter from './component/Counter.tsx';
import SelectedItem from './component/SelectedItem.tsx';

function App() {
  return (
    <>
      <Checkbox id="cbSi" title="Si" />
      <Checkbox id="cbEsMiPadre" title="Es mi padre" />

      <Input id="txtNombre" title="Nombre completo" />

      <Counter id="txtPartoNatural" title="Parto natural"/>

      <SelectedItem title="Mano" subtitle=""/>

      <SelectedItem title="Corazón" subtitle="Mayo 2008"/>
    </>
  );
}

export default App;
