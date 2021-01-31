const emailForm = $(".emailForm")
const textForm = $(".textForm")
const submitBtn = $(".submitBtn")
const comment = $(".comment")
const emailEditForm = $(".emailEditForm")
const textEditForm = $(".textEditForm")
const submitEditBtn = $(".submitEditBtn")
const commentOutput = $(".commentOutput")
const commentEdit = $(".comment-Edit")
const commentEditOutput = $(".commentEditOutput")
// console.log(submitBtn);

var commentArray = [];
function addComment() {
    if (emailForm.val(), textForm.val()) {
        commentArray.push({
            "email": emailForm.val(),
            "text": textForm.val()
        });
    }
    emailForm.val("")
    textForm.val("")
    showComment();
}

function showComment() {
    var data = "";
    if (commentArray.length > 0) {
        for (i = 0; i < commentArray.length; i++) {
            data += `<p class="mb-3 commentBox">`
            data += `<span class="font-weight-bold">Email Address:<br> ${commentArray[i].email}</span>`
            data += '<button class="btn btn-outline-info commentBtn" onclick="deleteComment(' + i + ')">hapus</button>'
            data += '<button class="btn btn-outline-info commentBtn" onclick="editComment(' + i + ')">edit</button> <br>'
            data += `<br><span>Comment:<br>${commentArray[i].text}</span>`
            data += `</p> <hr>`
        }
    }
    $('.commentOutput').html(data)
}

function deleteComment(item) {
    commentArray.splice(item, 1);
    showComment();
}

function editComment(item) {
    emailEditForm.val(commentArray[item].email)
    textEditForm.val(commentArray[item].text)
    commentEdit.show();
    comment.hide();
    submitEditBtn.click(() => {
        if (emailEditForm.val(), textEditForm.val()) {
            commentArray.splice(item, 1, ({ "email": emailEditForm.val(), "text": textEditForm.val() }));
        }
        commentEdit.hide();
        comment.show();
        showComment();
    })
}