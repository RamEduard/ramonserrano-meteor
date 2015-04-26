Template.portfolio.events({
    'click .remote-link': function(e) {
        var url = $(e.target).attr('data-url'),
            a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
    }
});