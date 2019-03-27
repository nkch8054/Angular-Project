import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {


            if (connection.request.url.endsWith('/api/control') &&
                connection.request.method === RequestMethod.Get) {

                connection.mockRespond(new Response(
                    new ResponseOptions({
                        status: 200, body: [
                            { 'field': 'TXT', name: 'name', value: 'Name', type: 'text', labelName: 'Enter Name' },
                            { 'field': 'TXT', name: 'email', value: 'Email', type: 'email', labelName: 'Enter Email' },
                            {
                                'field': 'Boolean', labelName: 'Select Gender', 'fieldList': [
                                    { name: 'gender', value: 'Male', type: 'radio' },
                                    { name: 'gender', value: 'Female', type: 'radio' }
                                ]
                            },

                        ]
                    })
                ));
            }

        }, 1000);
    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};