function createSecretHolder(secret) {
    var _secret = secret;
    return {
        setSecret: function (s) {
            _secret = s;
        },
        getSecret: function () {
            return _secret;
        }
    }
}
