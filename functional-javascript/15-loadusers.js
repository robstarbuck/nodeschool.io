function loadUsers(userIds, load, done) {
	var users = []
	userIds.forEach(function(user,ind){
		load(user)
	});
	return users
}

module.exports = loadUsers