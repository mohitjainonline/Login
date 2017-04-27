var env = 'qa',
config = {
		local: {
			protocol : 'http',
			rootApi : 'localhost:8085/api'
			},
		qa: {
			protocol : 'https',
			rootApi : 'schmgm-nodeservices.herokuapp.com/api'	
			},
		uat: {
			protocol : 'https',
			rootApi : 'schmgm-nodeservices.herokuapp.com/api'
			},
		live: {
				protocol: 'https',
				rootApi: 'schmgm-nodeservices.herokuapp.com/api'
			}
	};

module.exports = {
	
	getBaseServiceURL : function(webService){
		return config[env].protocol + '://' + config[env].rootApi + '/' + webService;
	 },
	 
	getParameter : function(key)
	{
		return config[env][key];
	}	

}
