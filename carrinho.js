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
				]
			},
			
			lista_de_desejo: [
				
				{
					id: 998,				
					nome: 'produto 3',
					valor: 25.90,
					quantidade: 2,
					presente: true
				},
				{
					id: 428,
					nome: 'produto 1',
					valor: 29.90,
					quantidade: 1,
					presente: false
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
				},
				lista_de_desejo: [],
				presentearUsuario: presentearUsuario,
				finalizarCarrinho: realizarPagamento
		}

		function presentearUsuario(destinatario, finalizarComCarrinho = false) {

			let presentes = Array.from(destinatario.lista_de_desejo).filter(item => item.presente)

			if(!finalizarComCarrinho) {

				let carrinhoTemporario = {}

				Object.defineProperties(carrinhoTemporario, {
					items: 			{ value: presentes, writable:false, configurable:false },
					destinatario: 	{ value: destinatario.id, writable:false, configurable:false }
				})
				
				this.finalizarCarrinho(carrinhoTemporario);
				
			} else {

				presentes.forEach(item => {
					Object.defineProperties(item, {
						destinatario: 	{ value: destinatario.id, writable:false, configurable:false }
					})
				})
				
				let itensAtualizados =  [...this.carrinho.itens, ...presentes]

				Object.defineProperty(this.carrinho, 'itens',{ value: itensAtualizados, writable:false, configurable:false })

				this.finalizarCarrinho()

			}
		}

		function realizarPagamento(carrinhoTemporario = undefined) {
			if(!carrinhoTemporario) {
				console.log('ok')
				console.log(this.carrinho)
			}

			console.log(carrinhoTemporario)	
		}

		usuario2.presentearUsuario(usuario1, true);
