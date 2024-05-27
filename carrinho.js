const usuario1 = {
			id: '2902',
			nome: 'Fernanda Belmiro',
			carrinho: {
				itens: [
					{
						id: 428,
						nome: 'produto 1',
						valor: 29.90,
						quantidade: 1
					},	
					{			
						id: 501,			
						nome: 'produto 2',
						valor: 69.99,
						quantidade: 1
					},	
					{			
						id: 998,			
						nome: 'produto 3',
						valor: 25.90,
						quantidade: 2
					},	
					{		
						id: 233,				
						nome: 'produto 4',
						valor: 42.00,
						quantidade: 4
					}
				],
				opcoes: {
					subtrair_presenteados: true,
				}
			},
			
			lista_de_desejo: [
				
				{
					id: 998,				
					nome: 'produto 3',
					valor: 25.90,
					quantidade: 2,
					presenteavel: true
				},
				{
					id: 428,
					nome: 'produto 1',
					valor: 29.90,
					quantidade: 1,
					presenteavel: false
				}
			]
		}

		const usuario2 = {
				id: '2990',
				nome: 'Lucas Vaz',
				carrinho: {
					itens: [
						{
							id: 244,
							nome: 'produto 1',
							valor: 19.90,
							quantidade: 1
						},	
						{		
							id: 764,				
							nome: 'produto 2',
							valor: 79.99,
							quantidade: 3
						}
					],
					opcoes: {
						subtrair_presenteados: true,
					}
				},
				lista_de_desejo: [],
				presentearUsuario: presentearUsuario
		}

		function presentearUsuario(remetente) {

			let listaDeDesejos = Array.from(remetente.lista_de_desejo)

			listaDeDesejos.forEach(item => {
				delete item.presenteavel
				// Object.defineProperty(item, 'remetente', {value: remetente.id, writable:false, configurable:false})
				Object.defineProperties(item, {
					presente: 	{ value: true, writable:false, configurable:false },
					remetente: 	{ value: remetente.id, writable:false, configurable:false }
				})
			})
			
			let itensCarrinhoAtualizados =  [...this.carrinho.itens, ...listaDeDesejos]

			Object.defineProperty(this.carrinho, 'itens',{value: itensCarrinhoAtualizados, writable:false })
			
			console.log(this.carrinho);
		}

		usuario2.presentearUsuario(usuario1);
