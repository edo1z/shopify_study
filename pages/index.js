import {AppProvider, Button} from '@shopify/polaris';
import style from '../assets/hoge.module.scss';

const Index = () => (
  <div className={style.hoge}>
    <h1 class={style.big}>hoge</h1>
    <AppProvider>
      <div className={style.hoge}>
        <Button onClick={() => console.log('hoge')}>
          BUTTON
        </Button>
      </div>
    </AppProvider>
  </div>
)

export default Index;
