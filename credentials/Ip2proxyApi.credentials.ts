import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class Ip2proxyApi implements ICredentialType {
        name = 'N8nDevIp2proxyApi';

        displayName = 'Ip2proxy API';

        icon: Icon = { light: 'file:../nodes/Ip2proxy/ip2proxy.png', dark: 'file:../nodes/Ip2proxy/ip2proxy.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.ip2proxy.com',
                        required: true,
                        placeholder: 'https://api.ip2proxy.com',
                        description: 'The base URL of your Ip2proxy API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
