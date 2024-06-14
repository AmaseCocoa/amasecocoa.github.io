const markdown_setting = window.markdownit({
    html: true,
    breaks: true,
});

const markdown_editer = $(".markdown");

const markdown_html = markdown_setting.render(getHtml(markdown_editer));
markdown_editer.html(markdown_html);

function getHtml(selector) {
    let markdown_text = $(selector).html();
    markdown_text = markdown_text.replace(/&lt;/g, "<");
    markdown_text = markdown_text.replace(/&gt;/g, ">");
    markdown_text = markdown_text.replace(/&amp;/g, "&");

    return markdown_text;
}