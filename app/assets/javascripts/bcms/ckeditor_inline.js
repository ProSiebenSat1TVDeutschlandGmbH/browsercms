// This file is for defining toolbars used in the CKEDITOR inline

// For html body areas edited inline.
CKEDITOR.config.toolbar_inline =
    [
        { name:'clipboard', items:[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
        { name:'editing', items:[ 'Scayt' ] },
        { name:'insert', items:[ 'Image', 'Link', 'Unlink', 'Anchor' ] },
        { name:'tools', items:[ 'About' ] },
        '/',
        { name:'styles', items:[ 'Format', 'Styles' ] },
        { name:'basicstyles', items:[ 'Bold', 'Italic', '-', 'RemoveFormat' ] },
        { name:'paragraph', items:[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ] }
    ];