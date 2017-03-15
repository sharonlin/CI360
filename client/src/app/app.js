(function(){
  'use strict';

// Default environment variables
  var __env = {};
  
  // Import variables if present
  if(window){
    Object.assign(__env, window.__env);
  }
  

  var seei360App = angular.module('app', [ 'ngMaterial' ]);

 /**************************************************************************
   * Configure logging
   *************************************************************************/
  
  function disableLogging($logProvider){
    $logProvider.debugEnabled(__env.enableDebug);
  }
  
  disableLogging.$inject = ['$logProvider'];
  
  seei360App.config(disableLogging);

  /**************************************************************************
   * Log bootstrap message
   *************************************************************************/
  
  function confirmBootstrap($log){
    $log.debug('Angular bootstrapped!');
  }
  
  confirmBootstrap.$inject = ['$log'];
  
  seei360App.run(confirmBootstrap);

 /**************************************************************************
   * Make environment available in Angular
   *************************************************************************/
  
  seei360App.constant('__env', __env);
  
  function logEnvironment($log, __env){
    $log.debug('Environment variables:');
    $log.debug(__env)
  }
  
  logEnvironment.$inject = ['$log', '__env'];
  
  seei360App.run(logEnvironment);

})();
