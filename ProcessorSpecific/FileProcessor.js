(function (ns) {

	var context = ns.ProcessorContextFactory.create(g_request, g_response, g_processor);

	ns.FileServiceEndPoint.handleRequest(context);
})(this);