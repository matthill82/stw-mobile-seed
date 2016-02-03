function localStorage($window) {

	var storage = {
		set      : set,
		get      : get,
		setObject: setObject,
		getObject: getObject
	};

	return storage;

	///////////////////////

	function set(key, value) {
		$window.localStorage[key] = value;
	}

	function get(key, defaultValue) {
		return $window.localStorage[key] || defaultValue;
	}

	function setObject(key, value) {
		$window.localStorage[key] = JSON.stringify( value );
	}

	function getObject(key) {
		return JSON.parse( $window.localStorage[key] || '{}' );
	}
}

localStorage.$inject = ['$window'];
export default localStorage;

