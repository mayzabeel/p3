var db = [
{	titulo : 'O seminarista',
	autores : ['Bernardo Guimaraes'],
	descricao : 'Um dos romances mais críticos de Bernardo',
	url : 'http://farm3.static.flickr.com/2606/4079398452_c80cf74ea3.jpg',
	preco : '10,00'
	},
	{	titulo :'Amigo',
	autores :'Fábio de Melo',
	descricao :'Somos muitos,mesmo sendo dois',
	url :'',
	preco :'20,00'
	},
	{	titulo :'Dom Casmurro',
	autores :'Machado de Assis',
	descricao :'Um clássico da literatura brasileira',
	url :'',
	preco :'14,90'
	}
];

(function () {
	var app = angular.module('Livraria',[]);

        app.controller('LivrariaController',function ($scope) {
                var lc = this;
                lc.indice = 0;
                lc.livro = db[lc.indice];

                $scope.db =  [
{	titulo : 'O seminarista',
	autores : ['Bernardo Guimaraes'],
	descricao : 'Um dos romances mais críticos de Bernardo',
	url : '',
	preco : '10,00',
	comentarios: []
	},
	{	titulo :'Amigo',
	autores :['Fábio de Melo','João'],
	descricao :'Somos muitos,mesmo sendo dois',
	url : 'http://fabiodemelo.com.br/novo/produtos/foto_full/307524bd54ebc2618bea572eaeaa738547.jpg',
	preco :'20,00',
	comentarios: []
	},
	{	titulo :'Dom Casmurro',
	autores :['Machado de Assis'],
	descricao :'Um clássico da literatura brasileira',
	url :"http://www.colegioprofessorjobim.com.br/wp-content/uploads/2015/02/leitura1.jpg",
	preco :'14,90',
	comentarios: ['Muito Bom']
	}
];

                lc.next = function () {
                	console.log((lc.indice + 1) % $scope.db.length);

                        lc.indice = (lc.indice + 1) % $scope.db.length;
                        lc.livro = $scope.db[lc.indice];
                };

               lc.adicionaComentario = function(comentario) {
               		console.log('entra');
                	lc.livro.comentarios.push({comentario});
                };


                $scope.adicionaItem = function() {
                	$scope.db.push({titulo: $scope.db.titulo,
                					autores: $scope.db.autores,
                					descricao: $scope.db.descricao,
                					url: $scope.db.url,
                					preco: $scope.db.preco
                				});
        			$scope.db.titulo = $scope.db.autores = $scope.db.descricao = $scope.db.url = $scope.db.preco = '';
                };


        });
})()