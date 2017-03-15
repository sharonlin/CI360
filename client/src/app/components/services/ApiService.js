(function(){
  'use strict';

  angular.module('app')
          .service('api', [
          '$q',
           '__env',
          '$log',
          ApiService
  ]);
  //ApiService.$inject = ['$q', '__env','$log'];  
  
  function ApiService($q, __env, $log){
      
    var pipelines = [
      {
        name: 'Pipeline A',
      }
      ,
            {
        name: 'Pipeline B',
      }
      ,
            {
        name: 'Pipeline C',
      }
      ,
            {
        name: 'Pipeline D',
      }
      ,
            {
        name: 'Pipeline E',
      }
      ,
            {
        name: 'Pipeline F',
      }
      ,
            {
        name: 'Pipeline G',
      }
    ];

    return {
      loadAllItems : function() {
        console.dir(__env);
        $log.debug('Api url:' + __env.apiUrl);
        return $q.when(pipelines);
      }
    };
  }

})();