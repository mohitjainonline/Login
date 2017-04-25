var env = 'local',
config = {
		local: {
			protocol : 'http',
			rootApi : 'localhost:8085/api'
			},
		qa: {
			protocol : 'https',
			rootApi : 'glacial-inlet-83305.herokuapp.com/api'	
			},
		uat: {
			protocol : 'https',
			rootApi : 'glacial-inlet-83305.herokuapp.com/api'
			},
		live: {
				protocol: 'https',
				rootApi: 'glacial-inlet-83305.herokuapp.com/api'
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
