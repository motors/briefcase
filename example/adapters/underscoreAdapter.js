import _ from '../lib/underscore';
import briefcase from '../lib/briefcase';
import contract from '../contract';

var underscoreAdapter = {

    /** @override **/
    each(list, iterator) {
        _.each(list, iterator);
    }

};

briefcase.contract(contract, underscoreAdapter);

export default underscoreAdapter;