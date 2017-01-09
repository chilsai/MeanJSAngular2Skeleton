var dbConfig = {
	"url" : function(){
		var dbaseURL = '127.0.0.1:27017/nodeAuth'; 
		//if OPENSHIFT env variables  present, use the available connection info:
		if (process.env.OPENSHIFT_MONGODB_DB_URL) {
			dbaseURL = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;
		}
		return dbaseURL;
	},
	"secret":"nodeauthdatabasesecret"
}

module.exports = dbConfig;