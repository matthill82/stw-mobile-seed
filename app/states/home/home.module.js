/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './home.routes';
import HomeController from './home.controller';

let moduleName = 'siteSnap.home';

angular.module( moduleName, [] )
	.config( routeConfig )
	.run( function ($log) {
		$log.debug( 'siteSnap.home - run' );
	} )
	.controller( 'HomeController', HomeController );

export default moduleName;