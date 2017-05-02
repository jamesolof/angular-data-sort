"for pathogen.vim
execute pathogen#infect()
syntax on
filetype plugin indent on

"setup quickfic window to display tsc compile errors on :make
let g:typescript_compiler_binary = 'tsc'
let g:typescript_compiler_options = ''
autocmd QuickFixCmdPost [^l]* nested cwindow
autocmd QuickFixCmdPost    l* nested lwindow

"for pretty typescript
autocmd FileType typescript JsPreTmpl html
autocmd FileType typescript syn clear foldBraces
