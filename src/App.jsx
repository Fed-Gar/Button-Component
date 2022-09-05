import Button from './Components/Button';
import ButtonWrapper from './Components/ButtonWrapper';

import './App.css';

const App = () => {
  return (
    <div className="appContainer">
      <h1>Buttons</h1>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button />'}
          btn={<Button />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button variant=”outline” />'}
          btn={<Button variant='outline' />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button variant=”text” />'}
          btn={<Button variant='text' />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button disableShadow />'}
          btn={<Button color='primary' disabledShadow />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button disabled />'}
          btn={<Button text='Disabled' disabled />}
        />
        <ButtonWrapper
          text={'<Button variant=”text” disabled />'}
          btn={<Button text='Disabled' variant='text' disabled />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button startIcon=”local_grocery_store” />'}
          btn={<Button color='primary' startIcon='local_grocery_store' />}
        />
        <ButtonWrapper
          text={'<Button endIcon=”local_grocery_store” />'}
          btn={<Button color='primary' endIcon='local_grocery_store' />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button size=”sm” />'}
          btn={<Button color='primary' size='sm' />}
        />
        <ButtonWrapper
          text={'<Button size=”md” />'}
          btn={<Button color='primary' size='md' />}
        />
        <ButtonWrapper
          text={'<Button size=”lg” />'}
          btn={<Button color='primary' size='lg' />}
        />
      </div>
      <div className="btnsGroup">
        <ButtonWrapper
          text={'<Button color=”default” />'}
          btn={<Button />}
        />
        <ButtonWrapper
          text={'<Button color=”primary” />'}
          btn={<Button color='primary' />}
        />
        <ButtonWrapper
          text={'<Button color=”secondary” />'}
          btn={<Button text='Secondary' color='secondary' />}
        />
        <ButtonWrapper
          text={'<Button color=”danger” />'}
          btn={<Button text='Danger' color='danger' />}
        />
      </div>
      <footer className='footer'>
        <p>Created by <b>García Federico</b> - devChallenges.io</p>
      </footer>
    </div>
  );
};

export default App;