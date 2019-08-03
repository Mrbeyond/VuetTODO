import { AxiosResponse } from 'axios';
import axios from 'axios';

export default class Service {

    public test: string = '';
    public error: string = '';

    public fetcher( a: string, b: string) {
        axios.post('http://localhost/visual/product/welcome.php').then((response: AxiosResponse) => {
            return a = response.data;

            }).catch((err) => {
                err = 'problem with backend';
                return  b = err;
        });
    }
    public tray(): string {
        return 'from service';
    }
}

