Router.configure({
  layoutTemplate: 'layout'
});

Router.route('main', {
  path: '/'
});

Router.route('/slideRight',{name: 'slideRight'});

Router.route('/slideLeft',{name: 'slideLeft'});

Router.route('/slideUp',{name: 'slideUp'});

Router.route('/slideDown',{name: 'slideDown'});

Router.route('/fade',{name: 'fade'});
