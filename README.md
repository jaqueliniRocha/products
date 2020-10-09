# products

Enquanto o `user-management` é responsável pela gestão de usuários com acesso ao sistema, o `products` realiza o cadastro de produtos no estoque, pode inserir, alterar, remover e consultar produtos.

Para tal o usuário precisar passar um token JWT válido de um user cadastrado no sistema.

### Postman Collection ###
```
{
	"info": {
		"_postman_id": "103121f9-b521-4b4b-a97e-d0f97c44211f",
		"name": "products",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "/products",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDIyMDY5NTUsImV4cCI6MTYwMjI5MzM1NSwic3ViIjoiNWY3ZjYyNmI5MGUwYzdhZmRiNzk3Nzg4In0.D-o66Z77SwL7pf7ZTrXbmxs4jdvx36OizTTRzAbxThw",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3335/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3335",
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "/products",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDIyMDY5NTUsImV4cCI6MTYwMjI5MzM1NSwic3ViIjoiNWY3ZjYyNmI5MGUwYzdhZmRiNzk3Nzg4In0.D-o66Z77SwL7pf7ZTrXbmxs4jdvx36OizTTRzAbxThw",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3335/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3335",
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "/products",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDIyMDY5NTUsImV4cCI6MTYwMjI5MzM1NSwic3ViIjoiNWY3ZjYyNmI5MGUwYzdhZmRiNzk3Nzg4In0.D-o66Z77SwL7pf7ZTrXbmxs4jdvx36OizTTRzAbxThw",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "http://localhost:3335/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3335",
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "/products",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDIyMDY5NTUsImV4cCI6MTYwMjI5MzM1NSwic3ViIjoiNWY3ZjYyNmI5MGUwYzdhZmRiNzk3Nzg4In0.D-o66Z77SwL7pf7ZTrXbmxs4jdvx36OizTTRzAbxThw",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost:3335/products/5f7fbf267625b372064812e9",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3335",
					"path": [
						"products",
						"5f7fbf267625b372064812e9"
					]
				}
			},
			"response": []
		}
	],
	"protocolProfileBehavior": {}
}
``` 
