import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET",
					"value": "GET",
					"action": "GET",
					"description": "Check if an IP address is proxy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Package",
			"name": "package",
			"description": "Package name from PX1 to PX11. If not present, the web service will assume the PX1 package query.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "package",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Ip",
			"name": "ip",
			"required": true,
			"description": "IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "If not present, json format will be returned as the search result.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "API key. Please sign up free trial license key at ip2location.com",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
];
