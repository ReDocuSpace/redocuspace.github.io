/* Navbar Link */
var change_page_main_introduce = document.querySelector('#change_page_main_introduce');
var change_page_main_portfolio = document.querySelector('#change_page_main_portfolio');
var change_page_main_project = document.querySelector('#change_page_main_project');
var change_page_main_document = document.querySelector('#change_page_main_document');
var change_page_main_board = document.querySelector('#change_page_main_board');

/* PDF Download Link */
var change_pdf_Career_Description = document.querySelector('#change_pdf_Career_Description');
var change_pdf_FrameWork_Guide_Book = document.querySelector('#change_pdf_FrameWork_Guide_Book');
var change_pdf_Programming_linguistics = document.querySelector('#change_pdf_Programming_linguistics');
var change_test = document.querySelector('#change_test');
var change_test_sub = document.querySelector('#change_test_sub');

/* project hompage */
var change_page_main_eqmentStudio = document.querySelector('#change_page_eqmentstudio_main');

/*──────────────────────────────────────────────────────────*/
/* Navbar TXT & Link */
change_page_main_introduce.innerHTML = "Introduce";
change_page_main_portfolio.innerHTML = "Portfolio";
change_page_main_project.innerHTML = "Project";
change_page_main_document.innerHTML = "Document";

change_page_main_introduce.onclick = function(){ location.href = "index.html"; }
change_page_main_portfolio.onclick = function(){ location.href = "main_portfolio.html"; }
change_page_main_project.onclick = function(){ location.href = "main_project.html"; }
change_page_main_document.onclick = function(){ location.href = "main_document.html"; }

/* PDF Download Link */
change_pdf_Career_Description.onclick = function(){ windows.open("pdf/CareerDescription.pdf"); }
change_pdf_FrameWork_Guide_Book.onclick = function(){ window.open("pdf/FrameWork_Guide_Book.pptx"); }
change_pdf_Programming_linguistics.onclick = function(){ window.open("pdf/Programming_linguistics.pptx"); }

/*
change_pdf_Career_Description.onclick = function(){ location.href = "pdf/CareerDescription.pdf"; }
change_pdf_FrameWork_Guide_Book.onclick = function(){ location.href = "pdf/FrameWork_Guide_Book.pptx"; }
change_pdf_Programming_linguistics.onclick = function(){ location.href = "pdf/Programming_linguistics.pptx"; }
*/

/* project hompage */
change_page_main_eqmentStudio.onclick = function(){ window.open("eqmentStudio/index.html"); }


/*
change_page_main_eqmentStudio.onclick = function(){ location.href = "eqmentStudio/index.html"; }
*/