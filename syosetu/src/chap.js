function execute(url) {
  let response = fetch(url);
  if (response.ok) {
    let doc = response.html();
    return Response.success(
      doc
        .select('#novel_honbun')
        .html()
        .replace(/<\s*a[^>]*>/g, '')
        .replace(/<\/a>/g, '')
        .replace(/\/\//g, 'https://'),
    );
  }
  return null;
}
