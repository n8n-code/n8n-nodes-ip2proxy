import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class Ip2proxy implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Ip2proxy',
                name: 'N8nDevIp2proxy',
                icon: { light: 'file:./ip2proxy.png', dark: 'file:./ip2proxy.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'IP2Proxy detects proxies, VPNs, TOR, bots, data centers, residential proxies, and VPN providers by IP.',
                defaults: { name: 'Ip2proxy' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevIp2proxyApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}
