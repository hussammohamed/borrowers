import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://api.ember-101.com',
	pathForType(){
		return 'friends';
	}
});
