$(function() {

	$('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

	$('.table-api tr').on('click', function (e) {
		e.preventDefault();
		$('.table-api tr').not(this).removeClass('active');
        $(this).closest('tr').toggleClass('active');
    });

	/*
	* Collapse/extend all elements in response
	* */
	$('.nested')
		.on('hidden.bs.collapse', function (event) {
			if ('responseCollapse' === event.target.id)
				$('#responseCollapse').html('<i class="fas fa-expand-alt"></i> Expand all');
		})
		.on('shown.bs.collapse', function (event) {
			if ('responseCollapse' === event.target.id)
				$('#responseCollapse').html('<i class="fas fa-compress-alt"></i> Collapse all');
		});

	$('#responseCollapse').on('click', function (e) {

		if (this.getAttribute('collapsed') === null) {
			this.setAttribute('collapsed', 0);
		}

		let isCollapsed = parseInt(this.getAttribute('collapsed'));

		isCollapsed = Math.abs(isCollapsed - 1);

		let method = isCollapsed ? 'hide' : 'show';
		let html = isCollapsed
			? '<i class="fas fa-expand-alt"></i> Expand all'
			: '<i class="fas fa-compress-alt"></i> Collapse all';

		$('#codesTableContent .nested').collapse(method);

		$(this).html(html);

		this.setAttribute('collapsed', isCollapsed);

		e.preventDefault();
	});
});
