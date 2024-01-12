function redirectToStudentFile() {
    // احلق قيمة رقم الطالب من النموذج
    var studentId = document.getElementById('studentId').value;

    // اذا كان رقم الطالب مطابقا لأحد أرقام الملفات، قم بتوجيهه
    var studentFiles = {
        '20240001': 'https://1drv.ms/x/s!ArCnzAJAbxt-gQE4A-DusUdZxOFK?e=gnGIVA',
        '20240002': 'https://1drv.ms/b/s!ArCnzAJAbxt-eghpykfMj9-uQQ8?e=CQMoRw',
        '20240003': 'https://1drv.ms/b/s!ArCnzAJAbxt-fLuYNS0TAgGWdZk?e=yW2HFv'
    };

    if (studentFiles.hasOwnProperty(studentId)) {
        window.location.href = studentFiles[studentId];
    } else {
        alert('رقم الطالب غير صحيح. يرجى التحقق وإعادة المحاولة.');
    }
}
