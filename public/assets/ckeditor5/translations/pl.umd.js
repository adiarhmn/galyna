/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'pl' ]: { dictionary, getPluralForm } } = {"pl":{"dictionary":{"Words: %0":"Słowa: %0","Characters: %0":"Znaki: %0","Widget toolbar":"Pasek widgetów","Insert paragraph before block":"Wstaw akapit przed blokiem","Insert paragraph after block":"Wstaw akapit po bloku","Press Enter to type after or press Shift + Enter to type before the widget":"Naciśnij Enter, aby pisać po widżecie, lub Shift + Enter, aby pisać przed widżetem","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Klawisze, których można używać po wybraniu widżetu (na przykład: obraz, tabela itd.)","Insert a new paragraph directly after a widget":"Wstawia nowy akapit bezpośrednio po widżecie","Insert a new paragraph directly before a widget":"Wstawia nowy akapit bezpośrednio przed widżetem","Move the caret to allow typing directly before a widget":"Przenosi kursor, aby umożliwić pisanie bezpośrednio przed widżetem","Move the caret to allow typing directly after a widget":"Przenosi kursor, aby umożliwić pisanie bezpośrednio za widżetem","Move focus from an editable area back to the parent widget":"Przenieś skupienie z edytowalnego obszaru z powrotem do widżetu nadrzędnego","Upload in progress":"Trwa przesyłanie","Undo":"Cofnij","Redo":"Ponów","Rich Text Editor":"Edytor tekstu sformatowanego","Edit block":"Edytuj blok","Click to edit block":"Kliknij, aby edytować blok","Drag to move":"Przeciągnij, aby przenieść","Next":"Następny","Previous":"Poprzedni","Editor toolbar":"Pasek narzędzi edytora","Dropdown toolbar":"Rozwijany pasek narzędzi","Dropdown menu":"Menu rozwijane","Black":"Czarny","Dim grey":"Ciemnoszary","Grey":"Szary","Light grey":"Jasnoszary","White":"Biały","Red":"Czerwony","Orange":"Pomarańczowy","Yellow":"Żółty","Light green":"Jasnozielony","Green":"Zielony","Aquamarine":"Akwamaryna","Turquoise":"Turkusowy","Light blue":"Jasnoniebieski","Blue":"Niebieski","Purple":"Purpurowy","Editor block content toolbar":"Pasek zadań treści blokowej edytora","Editor contextual toolbar":"Kontekstowy pasek zadań edytora","HEX":"SZESNASTKOWY","No results found":"Nie znaleziono wyników","No searchable items":"Brak elementów do wyszukania","Editor dialog":"Okno edytora","Close":"Zamknij","Help Contents. To close this dialog press ESC.":"Zawartość pomocy. Aby zamknąć to okno dialogowe, naciśnij klawisz ESC.","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Poniżej znajdziesz listę skrótów klawiszowych, których można używać w edytorze.","(may require <kbd>Fn</kbd>)":"(może wymagać użycia klawisza <kbd>Fn</kbd>)","Accessibility":"Dostępność","Accessibility help":"Pomoc dotycząca dostępności","Press %0 for help.":"Naciśnij %0, aby uzyskać pomoc.","Move focus in and out of an active dialog window":"Przenosi fokus do i z aktywnego okna dialogowego","MENU_BAR_MENU_FILE":"Plik","MENU_BAR_MENU_EDIT":"Zmiana","MENU_BAR_MENU_VIEW":"Zobacz","MENU_BAR_MENU_INSERT":"Wstaw","MENU_BAR_MENU_FORMAT":"Format","MENU_BAR_MENU_TOOLS":"Narzędzia","MENU_BAR_MENU_HELP":"Pomoc","MENU_BAR_MENU_TEXT":"Tekst","MENU_BAR_MENU_FONT":"Czcionka","Editor menu bar":"Pasek menu edytora","Please enter a valid color (e.g. \"ff0000\").":"Wprowadź prawidłowy kolor (np. „ff0000”).","Insert table":"Wstaw tabelę","Header column":"Kolumna nagłówka","Insert column left":"Wstaw kolumnę z lewej","Insert column right":"Wstaw kolumnę z prawej","Delete column":"Usuń kolumnę","Select column":"Zaznacz kolumnę","Column":"Kolumna","Header row":"Wiersz nagłówka","Insert row below":"Wstaw wiersz poniżej","Insert row above":"Wstaw wiersz ponad","Delete row":"Usuń wiersz","Select row":"Zaznacz wiersz","Row":"Wiersz","Merge cell up":"Scal komórkę w górę","Merge cell right":"Scal komórkę w prawo","Merge cell down":"Scal komórkę w dół","Merge cell left":"Scal komórkę w lewo","Split cell vertically":"Podziel komórkę pionowo","Split cell horizontally":"Podziel komórkę poziomo","Merge cells":"Scal komórki","Table toolbar":"Pasek narzędzi tabel","Table properties":"Właściwości tabeli","Cell properties":"Właściwości komórki","Border":"Obramowanie","Style":"Styl","Width":"Szerokość","Height":"Wysokość","Color":"Kolor","Background":"Tło","Padding":"Dopełnienie","Dimensions":"Wymiary","Table cell text alignment":"Wyrównanie tekstu komórki tabeli","Alignment":"Wyrównanie","Horizontal text alignment toolbar":"Pasek narzędzi wyrównania tekstu w poziomie","Vertical text alignment toolbar":"Pasek narzędzi wyrównania tekstu w pionie","Table alignment toolbar":"Pasek narzędzi wyrównania tabeli","None":"Brak","Solid":"Ciągłe","Dotted":"Kropkowane","Dashed":"Kreskowane","Double":"Podwójne","Groove":"Wklęsłe","Ridge":"Wypukłe","Inset":"Zapadnięte","Outset":"Wysunięte","Align cell text to the left":"Wyrównaj tekst w komórce do lewej","Align cell text to the center":"Wyrównaj tekst w komórce do środka","Align cell text to the right":"Wyrównaj tekst w komórce do prawej","Justify cell text":"Wyjustuj tekst komórki","Align cell text to the top":"Wyrównaj tekst w komórce do góry","Align cell text to the middle":"Wyrównaj tekst w komórce do środka","Align cell text to the bottom":"Wyrównaj tekst w komórce do dołu","Align table to the left":"Wyrównaj tabelę do lewej","Center table":"Wyrównaj tabelę do środka","Align table to the right":"Wyrównaj tabelę do prawej","The color is invalid. Try \"#FF0000\" or \"rgb(255,0,0)\" or \"red\".":"Kolor jest niepoprawny. Spróbuj wpisać \"#FF0000\", \"rgb(255,0,0)\" lub \"red\".","The value is invalid. Try \"10px\" or \"2em\" or simply \"2\".":"Wartość jest niepoprawna. Spróbuj  wpisać \"10px\", \"2em\" lub po prostu \"2\".","Enter table caption":"Wprowadź podpis tabeli","Keystrokes that can be used in a table cell":"Klawisze, których można używać w komórce tabeli","Move the selection to the next cell":"Przenosi zaznaczenie do następnej komórki","Move the selection to the previous cell":"Przenosi zaznaczenie do poprzedniej komórki","Insert a new table row (when in the last cell of a table)":"Wstawia nowy wiersz tabeli (w przypadku ostatniej komórki tabeli)","Navigate through the table":"Umożliwia poruszanie się po tabeli","Table":"Tabela","Styles":"Style","Multiple styles":"Wiele stylów","Block styles":"Style tekstu blokowego","Text styles":"Style tekstu","Special characters":"Znaki specjalne","Category":"Kategorie","All":"Wszystko","Arrows":"Strzałki","Currency":"Waluta","Latin":"Łaciński","Mathematical":"Matematyczne","Text":"Tekst","leftwards simple arrow":"prosta strzałka w lewo","rightwards simple arrow":"prosta strzałka w prawo","upwards simple arrow":"prosta strzałka w górę","downwards simple arrow":"prosta strzałka w dół","leftwards double arrow":"podwójna strzałka w lewo","rightwards double arrow":"podwójna strzałka w prawo","upwards double arrow":"podwójna strzałka w górę","downwards double arrow":"podwójna strzałka w dół","leftwards dashed arrow":"przerywana strzałka w lewo","rightwards dashed arrow":"przerywana strzałka w prawo","upwards dashed arrow":"przerywana strzałka w górę","downwards dashed arrow":"przerywana strzałka w dół","leftwards arrow to bar":"strzałka w lewo do belki","rightwards arrow to bar":"strzałka w prawo do belki","upwards arrow to bar":"strzałka w górę do belki","downwards arrow to bar":"strzałka w dół do belki","up down arrow with base":"strzałka w górę i w dół z podstawą","back with leftwards arrow above":"do tyłu ze strzałką w lewo powyżej","end with leftwards arrow above":"koniec ze strzałką w lewo powyżej","on with exclamation mark with left right arrow above":"na z wykrzyknikiem i strzałką w lewo i prawo powyżej","soon with rightwards arrow above":"wkrótce ze strzałką w prawo powyżej","top with upwards arrow above":"do góry ze strzałką w górę powyżej","Dollar sign":"Znak dolara","Euro sign":"Znak euro","Yen sign":"Znak jena","Pound sign":"Znak funta","Cent sign":"Znak centa","Euro-currency sign":"Znak euro","Colon sign":"Znak colona","Cruzeiro sign":"Znak cruzeiro","French franc sign":"Znak franka francuskiego","Lira sign":"Znak liry","Currency sign":"Znak waluty","Bitcoin sign":"Znak bitcoina","Mill sign":"Symbol mila","Naira sign":"Znak nairy","Peseta sign":"Znak pesety","Rupee sign":"Znak rupii","Won sign":"Znak wona","New sheqel sign":"Znak nowego szekla","Dong sign":"Znak donga","Kip sign":"Znak kipa","Tugrik sign":"Znak tugrika","Drachma sign":"Znak drachmy","German penny sign":"Znak feniga","Peso sign":"Znak peso","Guarani sign":"Znak guarani","Austral sign":"Znak australa","Hryvnia sign":"Znak hrywny","Cedi sign":"Znak cedi","Livre tournois sign":"Symbol liwra turońskiego","Spesmilo sign":"Symbol spesmilo","Tenge sign":"Znak tenge","Indian rupee sign":"Znak rupii indyjskiej","Turkish lira sign":"Znak liry tureckiej","Nordic mark sign":"Znak marki nordyckiej","Manat sign":"Znak manata","Ruble sign":"Znak rubla","Latin capital letter a with macron":"Łacińska wielka litera a z makronem","Latin small letter a with macron":"Łacińska mała litera a z makronem","Latin capital letter a with breve":"Łacińska wielka litera a z łuczkiem","Latin small letter a with breve":"Łacińska mała litera a z łuczkiem","Latin capital letter a with ogonek":"Łacińska wielka litera a z ogonkiem","Latin small letter a with ogonek":"Łacińska mała litera a z ogonkiem","Latin capital letter c with acute":"Łacińska wielka litera c z kreską","Latin small letter c with acute":"Łacińska mała litera c z kreską","Latin capital letter c with circumflex":"Łacińska wielka litera c z daszkiem","Latin small letter c with circumflex":"Łacińska mała litera c z daszkiem","Latin capital letter c with dot above":"Łacińska wielka litera c z kropką powyżej","Latin small letter c with dot above":"Łacińska mała litera c z kropką powyżej","Latin capital letter c with caron":"Łacińska wielka litera c z ptaszkiem","Latin small letter c with caron":"Łacińska mała litera c z ptaszkiem","Latin capital letter d with caron":"Łacińska wielka litera d z ptaszkiem","Latin small letter d with caron":"Łacińska mała litera d z ptaszkiem","Latin capital letter d with stroke":"Łacińska wielka litera d z przekreśleniem","Latin small letter d with stroke":"Łacińska mała litera d z przekreśleniem","Latin capital letter e with macron":"Łacińska wielka litera e z makronem","Latin small letter e with macron":"Łacińska mała litera e z makronem","Latin capital letter e with breve":"Łacińska wielka litera e z łuczkiem","Latin small letter e with breve":"Łacińska mała litera e z łuczkiem","Latin capital letter e with dot above":"Łacińska wielka litera e z kropką powyżej","Latin small letter e with dot above":"Łacińska mała litera e z kropką powyżej","Latin capital letter e with ogonek":"Łacińska wielka litera e z ogonkiem","Latin small letter e with ogonek":"Łacińska mała litera e z ogonkiem","Latin capital letter e with caron":"Łacińska wielka litera e z ptaszkiem","Latin small letter e with caron":"Łacińska mała litera e z ptaszkiem","Latin capital letter g with circumflex":"Łacińska wielka litera g z daszkiem","Latin small letter g with circumflex":"Łacińska mała litera g z daszkiem","Latin capital letter g with breve":"Łacińska wielka litera g z łuczkiem","Latin small letter g with breve":"Łacińska mała litera g z łuczkiem","Latin capital letter g with dot above":"Łacińska wielka litera g z kropką powyżej","Latin small letter g with dot above":"Łacińska mała litera g z kropką powyżej","Latin capital letter g with cedilla":"Łacińska wielka litera g z haczykiem","Latin small letter g with cedilla":"Łacińska mała litera g z haczykiem","Latin capital letter h with circumflex":"Łacińska wielka litera h z daszkiem","Latin small letter h with circumflex":"Łacińska mała litera h z daszkiem","Latin capital letter h with stroke":"Łacińska wielka litera h z przekreśleniem","Latin small letter h with stroke":"Łacińska mała litera h z przekreśleniem","Latin capital letter i with tilde":" Łacińska wielka litera i z tyldą","Latin small letter i with tilde":"Łacińska mała litera i z tyldą","Latin capital letter i with macron":"Łacińska wielka litera i z makronem","Latin small letter i with macron":"Łacińska mała litera i z makronem","Latin capital letter i with breve":"Łacińska wielka litera i z łuczkiem","Latin small letter i with breve":"Łacińska mała litera i z łuczkiem","Latin capital letter i with ogonek":"Łacińska wielka litera i z ogonkiem","Latin small letter i with ogonek":"Łacińska mała litera i z ogonkiem","Latin capital letter i with dot above":"Łacińska wielka litera i z kropką powyżej","Latin small letter dotless i":"Łacińska mała litera i bez kropki","Latin capital ligature ij":"Łacińska wielka ligatura ij","Latin small ligature ij":"Łacińska mała ligatura ij","Latin capital letter j with circumflex":"Łacińska wielka litera j z daszkiem","Latin small letter j with circumflex":"Łacińska mała litera j z daszkiem","Latin capital letter k with cedilla":"Łacińska wielka litera k z haczykiem","Latin small letter k with cedilla":"Łacińska mała litera k z haczykiem","Latin small letter kra":"Łacińska mała litera kra","Latin capital letter l with acute":"Łacińska wielka litera l z kreską","Latin small letter l with acute":"Łacińska mała litera l z kreską","Latin capital letter l with cedilla":"Łacińska wielka litera l z haczykiem","Latin small letter l with cedilla":"Łacińska mała litera l z haczykiem","Latin capital letter l with caron":"Łacińska wielka litera l z ptaszkiem","Latin small letter l with caron":"Łacińska mała litera l z ptaszkiem","Latin capital letter l with middle dot":"Łacińska wielka litera l z kropką pośrodku","Latin small letter l with middle dot":"Łacińska mała litera l z kropką pośrodku","Latin capital letter l with stroke":"Łacińska wielka litera l z przekreśleniem","Latin small letter l with stroke":"Łacińska mała litera l z przekreśleniem","Latin capital letter n with acute":"Łacińska wielka litera n z kreską","Latin small letter n with acute":"Łacińska mała litera n z kreską","Latin capital letter n with cedilla":"Łacińska wielka litera n z haczykiem","Latin small letter n with cedilla":"Łacińska mała litera n z haczykiem","Latin capital letter n with caron":"Łacińska wielka litera n z ptaszkiem","Latin small letter n with caron":"Łacińska mała litera n z ptaszkiem","Latin small letter n preceded by apostrophe":"Łacińska mała litera n poprzedzona apostrofem","Latin capital letter eng":"Łacińska wielka litera eng","Latin small letter eng":"Łacińska mała litera eng","Latin capital letter o with macron":"Łacińska wielka litera o z makronem","Latin small letter o with macron":"Łacińska mała litera o z makronem","Latin capital letter o with breve":"Łacińska wielka litera o z łuczkiem","Latin small letter o with breve":"Łacińska mała litera o z łuczkiem","Latin capital letter o with double acute":"Łacińska wielka litera o z dwiema kreskami","Latin small letter o with double acute":"Łacińska mała litera o z dwiema kreskami","Latin capital ligature oe":"Łacińska wielka ligatura oe","Latin small ligature oe":"Łacińska mała ligatura oe","Latin capital letter r with acute":"Łacińska wielka litera r z kreską","Latin small letter r with acute":"Łacińska mała litera r z kreską","Latin capital letter r with cedilla":"Łacińska wielka litera r z haczykiem","Latin small letter r with cedilla":"Łacińska mała litera r z haczykiem","Latin capital letter r with caron":"Łacińska wielka litera r z ptaszkiem","Latin small letter r with caron":"Łacińska mała litera r z ptaszkiem","Latin capital letter s with acute":"Łacińska wielka litera s z kreską","Latin small letter s with acute":"Łacińska mała litera s z kreską","Latin capital letter s with circumflex":"Łacińska wielka litera s z daszkiem","Latin small letter s with circumflex":"Łacińska mała litera s z daszkiem","Latin capital letter s with cedilla":"Łacińska wielka litera s z haczykiem","Latin small letter s with cedilla":"Łacińska wielka litera s z haczykiem","Latin capital letter s with caron":"Łacińska wielka litera s z ptaszkiem","Latin small letter s with caron":"Łacińska mała litera s z ptaszkiem","Latin capital letter t with cedilla":"Łacińska wielka litera t z haczykiem","Latin small letter t with cedilla":"Łacińska mała litera t z haczykiem","Latin capital letter t with caron":"Łacińska wielka litera t z ptaszkiem","Latin small letter t with caron":"Łacińska mała litera t z ptaszkiem","Latin capital letter t with stroke":"Łacińska wielka litera t z przekreśleniem","Latin small letter t with stroke":"Łacińska mała litera t z przekreśleniem","Latin capital letter u with tilde":"Łacińska wielka litera u z tyldą","Latin small letter u with tilde":"Łacińska mała litera u z tyldą","Latin capital letter u with macron":"Łacińska wielka litera u z makronem","Latin small letter u with macron":"Łacińska mała litera u z makronem","Latin capital letter u with breve":"Łacińska wielka litera u z łuczkiem","Latin small letter u with breve":"Łacińska mała litera u z łuczkiem","Latin capital letter u with ring above":"Łacińska wielka litera u z kółkiem powyżej","Latin small letter u with ring above":"Łacińska mała litera u z kółkiem powyżej","Latin capital letter u with double acute":"Łacińska wielka litera u z dwiema kreskami","Latin small letter u with double acute":"Łacińska mała litera u z dwiema kreskami","Latin capital letter u with ogonek":"Łacińska wielka litera u z ogonkiem","Latin small letter u with ogonek":"Łacińska mała litera u z ogonkiem","Latin capital letter w with circumflex":"Łacińska wielka litera w z daszkiem","Latin small letter w with circumflex":"Łacińska mała litera w z daszkiem","Latin capital letter y with circumflex":"Łacińska wielka litera y z daszkiem","Latin small letter y with circumflex":"Łacińska mała litera y z daszkiem","Latin capital letter y with diaeresis":"Łacińska wielka litera y z dwiema kropkami","Latin capital letter z with acute":"Łacińska wielka litera z z kreską","Latin small letter z with acute":"Łacińska mała litera z z kreską","Latin capital letter z with dot above":"Łacińska wielka litera z z kropką powyżej","Latin small letter z with dot above":"Łacińska mała litera z z kropką powyżej","Latin capital letter z with caron":"Łacińska wielka litera z z ptaszkiem","Latin small letter z with caron":"Łacińska mała litera z z ptaszkiem","Latin small letter long s":"Łacińska litera długie s","Less-than sign":"Znak mniejszości","Greater-than sign":"Znak większości","Less-than or equal to":"Znak mniejsze niż lub równe","Greater-than or equal to":"Znak większe niż lub równe","En dash":"Półpauza","Em dash":"Pauza","Macron":"Makron","Overline":"Nadkreślenie","Degree sign":"Znak stopnia","Minus sign":"Znak minus","Plus-minus sign":"Znak plus-minus","Division sign":"Znak dzielenia","Fraction slash":"Kreska ułamkowa","Multiplication sign":"Znak mnożenia","Latin small letter f with hook":"Łacińska mała litera f z zawijasem","Integral":"Całka","N-ary summation":"Suma n-argumentowa","Infinity":"Nieskończoność","Square root":"Pierwiastek kwadratowy","Tilde operator":"Operator tylda","Approximately equal to":"W przybliżeniu równe","Almost equal to":"Prawie równe","Not equal to":"Różne","Identical to":"Identyczne","Element of":"Należy do","Not an element of":"Nie należy do","Contains as member":"Zawiera element","N-ary product":"Iloczyn n-argumentowy","Logical and":"Koniunkcja logiczna","Logical or":"Alternatywa logiczna","Not sign":"Znak negacji","Intersection":"Część wspólna","Union":"Suma zbiorów","Partial differential":"Pochodna cząstkowa","For all":"Kwantyfikator ogólny","There exists":"Kwantyfikator szczegółowy","Empty set":"Zbiór pusty","Nabla":"Operator nabla","Asterisk operator":"Operator asterysk","Proportional to":"Proporcjonalność","Angle":"Kąt","Vulgar fraction one quarter":"Ułamek zwykły jedna czwarta","Vulgar fraction one half":"Ułamek zwykły jedna druga","Vulgar fraction three quarters":"Ułamek zwykły trzy czwarte","Single left-pointing angle quotation mark":"Pojedynczy lewy cudzysłów kątowy","Single right-pointing angle quotation mark":"Pojedynczy prawy cudzysłów kątowy","Left-pointing double angle quotation mark":"Podwójny lewy cudzysłów kątowy","Right-pointing double angle quotation mark":"Podwójny prawy cudzysłów kątowy","Left single quotation mark":"Pojedynczy lewy cudzysłów","Right single quotation mark":"Pojedynczy prawy cudzysłów","Left double quotation mark":"Podwójny lewy cudzysłów","Right double quotation mark":"Podwójny prawy cudzysłów","Single low-9 quotation mark":"Pojedynczy dolny cudzysłów","Double low-9 quotation mark":"Podwójny dolny cudzysłów","Inverted exclamation mark":"Odwrócony wykrzyknik","Inverted question mark":"Odwrócony pytajnik","Two dot leader":"Dwie kropki wiodące","Horizontal ellipsis":"Wielokropek poziomy","Double dagger":"Podwójny sztylet","Per mille sign":"Znak promila","Per ten thousand sign":"Punkt bazowy","Double exclamation mark":"Podwójny wykrzyknik","Question exclamation mark":"Pytajnik z wykrzyknikiem","Exclamation question mark":"Wykrzyknik z pytajnikiem","Double question mark":"Podwójny pytajnik","Copyright sign":"Znak praw autorskich","Registered sign":"Zastrzeżony znak towarowy","Trade mark sign":"Symbol znaku towarowego","Section sign":"Znak sekcji","Paragraph sign":"Znak akapitu","Reversed paragraph sign":"Odwrócony znak akapitu","Source":"Źródło","Show source":"Pokaż źródło","Show blocks":"Wyświetl bloki","Select all":"Zaznacz wszystko","Disable editing":"Zablokuj edycję","Enable editing":"Odblokuj edycję","Previous editable region":"Poprzednie pole do edycji","Next editable region":"Następne pole do edycji","Navigate editable regions":"Przejdź między polami do edycji","Remove Format":"Usuń formatowanie","Page break":"Podział strony","media widget":"widget osadzenia mediów","Media URL":"Adres URL","Paste the media URL in the input.":"Wklej adres URL mediów do pola.","Tip: Paste the URL into the content to embed faster.":"Wskazówka: Wklej URL do treści edytora, by łatwiej osadzić media.","The URL must not be empty.":"Adres URL nie może być pusty.","This media URL is not supported.":"Ten rodzaj adresu URL nie jest obsługiwany.","Insert media":"Wstaw media","Media":"Nośniki","Media toolbar":"Pasek narzędzi mediów","Open media in new tab":"Otwórz media w nowej zakładce","Numbered List":"Lista numerowana","Bulleted List":"Lista wypunktowana","To-do List":"Lista rzeczy do zrobienia","Bulleted list styles toolbar":"Pasek z narzędziami: style listy z punktorami","Numbered list styles toolbar":"Pasek z narzędziami: style listy numerowanej","Toggle the disc list style":"Włącz/wyłącz listę w stylu „dysk”","Toggle the circle list style":"Włącz/wyłącz listę w stylu „kółko”","Toggle the square list style":"Włącz/wyłącz listę w stylu „kwadrat”","Toggle the decimal list style":"Włącz/wyłącz listę w stylu „dziesiętne”","Toggle the decimal with leading zero list style":"Włącz/wyłącz listę w stylu „dziesiętne z zerem wiodącym”","Toggle the lower–roman list style":"Włącz/wyłącz listę w stylu „małe cyfry rzymskie”","Toggle the upper–roman list style":"Włącz/wyłącz listę w stylu „wielkie cyfry rzymskie”","Toggle the lower–latin list style":"Włącz/wyłącz listę w stylu „alfabet łaciński – małe litery”","Toggle the upper–latin list style":"Włącz/wyłącz listę w stylu „alfabet łaciński – wielkie litery”","Disc":"Dysk","Circle":"Kółko","Square":"Kwadrat","Decimal":"Dziesiętne","Decimal with leading zero":"Dziesiętne z zerem wiodącym","Lower–roman":"Małe cyfry rzymskie","Upper-roman":"Wielkie cyfry rzymskie","Lower-latin":"Alfabet łaciński – małe litery","Upper-latin":"Alfabet łaciński – wielkie litery","List properties":"Właściwości listy","Start at":"Zacznij od","Invalid start index value.":"Nieprawidłowa wartość indeksu początkowego.","Start index must be greater than 0.":"Wartość początkowa musi być większa niż 0.","Reversed order":"Odwrócona kolejność","Keystrokes that can be used in a list":"Klawisze, których można używać w odniesieniu do listy","Increase list item indent":"Zwiększa wcięcie elementu listy","Decrease list item indent":"Zmniejsza wcięcie elementu listy","Entering a to-do list":"Wchodzenie na listę zadań do wykonania","Leaving a to-do list":"Opuszczenie listy zadań do wykonania","Unlink":"Usuń odnośnik","Link":"Wstaw odnośnik","Link URL":"Adres URL","Link URL must not be empty.":"Adres URL linku nie może być pusty","Link image":"Wstaw odnośnik do obrazka","Edit link":"Edytuj odnośnik","Open link in new tab":"Otwórz odnośnik w nowej zakładce","This link has no URL":"Nie podano adresu URL odnośnika","Open in a new tab":"Otwórz w nowej zakładce","Downloadable":"Do pobrania","Create link":"Tworzy link","Move out of a link":"Umożliwia wyjście z linku","Language":"Język","Choose language":"Wybierz język","Remove language":"Usuń język","Increase indent":"Zwiększ wcięcie","Decrease indent":"Zmniejsz wcięcie","image widget":"Obraz","Wrap text":"Zawijaj tekst","Break text":"Rozbijaj tekst","In line":"W linii","Side image":"Obraz dosunięty do brzegu, oblewany tekstem","Full size image":"Obraz w pełnym rozmiarze","Left aligned image":"Obraz wyrównany do lewej","Centered image":"Obraz wyrównany do środka","Right aligned image":"Obraz wyrównany do prawej","Change image text alternative":"Zmień tekst zastępczy obrazka","Text alternative":"Tekst zastępczy obrazka","Enter image caption":"Wstaw tytuł obrazka","Insert image":"Wstaw obraz","Replace image":"Zastąp obraz","Upload from computer":"Prześlij z komputera","Replace from computer":"Zastąp z komputera","Upload image from computer":"Prześlij obraz z komputera","Image from computer":"Obraz z komputera","From computer":"Z komputera","Replace image from computer":"Zastąp obraz z komputera","Upload failed":"Przesyłanie obrazu nie powiodło się","You have no image upload permissions.":"Nie masz uprawnień do przesyłania obrazów.","Image toolbar":"Pasek narzędzi obrazka","Resize image":"Zmień rozmiar obrazka","Resize image to %0":"Zmień rozmiar do %0","Resize image to the original size":"Przywróć oryginalny rozmiar obrazu","Resize image (in %0)":"Zmień rozmiar obrazu (w %0)","Original":"Oryginalny","Custom image size":"Niestandardowy rozmiar obrazu","Custom":"Niestandardowy","Image resize list":"Lista: zmiana wielkości obrazu","Insert image via URL":"Wstaw obraz z adresu URL","Insert via URL":"Wstaw przez URL","Image via URL":"Obraz przez URL","Via URL":"Przez URL","Update image URL":"Uaktualnij obraz z adresu URL","Caption for the image":"Nagłówek do obrazu","Caption for image: %0":"Nagłówek do obrazu: %0","The value must not be empty.":"Wartość nie może być pusta.","The value should be a plain number.":"Wartość powinna zawierać tylko liczbę.","Uploading image":"Trwa przesyłanie obrazu","Image upload complete":"Przesyłanie obrazu zakończone","Error during image upload":"Błąd podczas przesyłania obrazu","Image":"Obraz","HTML object":"Obiekt HTML","Insert HTML":"Wstaw kod HTML","HTML snippet":"Kod HTML","Paste raw HTML here...":"Wstaw tutaj czysty kod HTML...","Edit source":"Edytuj źródło","Save changes":"Zapisz zmiany","No preview available":"Podgląd nie jest dostępny","Empty snippet content":"Brak kodu","Horizontal line":"Linia pozioma","Yellow marker":"Żółty marker","Green marker":"Zielony marker","Pink marker":"Różowy marker","Blue marker":"Niebieski marker","Red pen":"Czerwony długopis","Green pen":"Zielony długopis","Remove highlight":"Usuń podświetlenie","Highlight":"Podświetlenie","Text highlight toolbar":"Pasek narzędzi podświetleń","Heading":"Nagłówek","Choose heading":"Wybierz nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6","Type your title":"Podaj tytuł","Type or paste your content here.":"Wpisz lub wklej tutaj treść dokumentu.","Font Size":"Rozmiar czcionki","Tiny":"Bardzo mały","Small":"Mały","Big":"Duży","Huge":"Bardzo duży","Font Family":"Czcionka","Default":"Domyślny","Font Color":"Kolor czcionki","Font Background Color":"Kolor tła czcionki","Document colors":"Kolory dokumentu","Find and replace":"Znajdź i zamień","Find in text…":"Znajdź…","Find":"Znajdź","Previous result":"Poprzedni","Next result":"Następny","Replace":"Zamień","Replace all":"Zamień wszystko","Match case":"Uwzględnij wielkość liter","Whole words only":"Znajdź tylko całe wyrazy","Replace with…":"Zamień na…","Text to find must not be empty.":"Szukany tekst nie może być pusty.","Tip: Find some text first in order to replace it.":"Podpowiedź: Znajdź jakiś tekst, aby go zamienić.","Advanced options":"Opcje zaawansowane","Find in the document":"Otwiera interfejs Znajdź w dokumencie","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Wstawia miękki enter (element <code>&lt;br&gt;</code>","Insert a hard break (a new paragraph)":"Wstawia twardą spację (nowy akapit)","Cancel":"Anuluj","Clear":"Wyczyść","Remove color":"Usuń kolor","Restore default":"Przywróć domyślne","Save":"Zapisz","Show more items":"Pokaż więcej","%0 of %1":"%0 z %1","Cannot upload file:":"Nie można przesłać pliku:","Rich Text Editor. Editing area: %0":"Edytor tekstu. Obszar edycji: %0","Insert with file manager":"Wstaw za pomocą menedżera plików","Replace with file manager":"Zastąp za pomocą menedżera plików","Insert image with file manager":"Wstaw obraz za pomocą menedżera plików","Replace image with file manager":"Zastąp obraz za pomocą menedżera plików","File":"Plik","With file manager":"Przez menedżer plików","Toggle caption off":"Ukryj podpis tabeli","Toggle caption on":"Pokaż podpis tabeli","Content editing keystrokes":"Klawisze edycji zawartości","These keyboard shortcuts allow for quick access to content editing features.":"Te skróty klawiszowe umożliwiają szybki dostęp do funkcji edycji zawartości.","User interface and content navigation keystrokes":"Klawisze umożliwiające poruszanie się po interfejsie użytkownika i zawartości","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Aby łatwiej poruszać się po interfejsie użytkownika CKEditor 5, użyj następujących skrótów klawiszowych.","Close contextual balloons, dropdowns, and dialogs":"Zamyka podpowiedzi kontekstowe, menu rozwijane i okna dialogowe","Open the accessibility help dialog":"Otwiera okno pomocy dotyczącej dostępności","Move focus between form fields (inputs, buttons, etc.)":"Przenosi fokus pomiędzy polami formularza (polami wprowadzania, przyciskami itd.)","Move focus to the menu bar, navigate between menu bars":"Zmień ukierunkowanie na pasek menu, nawiguj między paskami menu","Move focus to the toolbar, navigate between toolbars":"Przenosi fokus na pasek narzędzi, umożliwia poruszanie się pomiędzy paskami narzędzi","Navigate through the toolbar or menu bar":"Nawiguj za pomocą paska narzędzi lub paska menu","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Uruchom aktualnie aktywny przycisk. Uruchomienie przycisków wchodzących w interakcję z zawartością edytora przywraca ukierunkowanie na zawartość.","Accept":"Zaakceptuj","Paragraph":"Akapit","Color picker":"Wybór koloru","Insert code block":"Wstaw blok kodu","Plain text":"Zwykły tekst","Leaving %0 code snippet":"Opuszczenie fragmentu kodu %0","Entering %0 code snippet":"Wchodzenie we fragment kodu %0","Entering code snippet":"Wchodzenie we fragment kodu","Leaving code snippet":"Opuszczanie fragmentu kodu","Code block":"Blok kodu","Copy selected content":"Kopiuje zaznaczoną zawartość","Paste content":"Wkleja zawartość","Paste content as plain text":"Wkleja zawartość jako zwykły tekst","Insert image or file":"Wstaw obrazek lub plik","Could not obtain resized image URL.":"Nie można pobrać adresu URL obrazka po przeskalowaniu.","Selecting resized image failed":"Wybranie obrazka po przeskalowaniu nie powiodło się.","Could not insert image at the current position.":"Nie można wstawić obrazka w bieżącej lokalizacji.","Inserting image failed":"Wstawienie obrazka nie powiodło się.","Open file manager":"Otwórz menedżer plików","Cannot determine a category for the uploaded file.":"Nie można ustalić kategorii przesłanego pliku.","Cannot access default workspace.":"Nie można uzyskać dostępu do domyślnego obszaru roboczego.","You have no image editing permissions.":"Nie masz uprawnień do edytowania obrazów.","Edit image":"Edytuj obraz","Processing the edited image.":"Trwa przetwarzanie edytowanego obrazu.","Server failed to process the image.":"Serwer nie mógł przetworzyć obrazu.","Failed to determine category of edited image.":"Nie udało się określić kategorii edytowanego obrazu.","Block quote":"Cytat blokowy","Bold":"Pogrubienie","Italic":"Kursywa","Underline":"Podkreślenie","Code":"Kod","Strikethrough":"Przekreślenie","Subscript":"Indeks dolny","Superscript":"Indeks górny","Italic text":"Zmienia tekst na kursywę","Move out of an inline code style":"Przenosi zaznaczenie poza styl kodu inline","Bold text":"Pogrubia tekst","Underline text":"Podkreśla tekst","Strikethrough text":"Przekreśla tekst","Saving changes":"Zapisywanie zmian","Revert autoformatting action":"Cofa automatyczne formatowanie","Align left":"Wyrównaj do lewej","Align right":"Wyrównaj do prawej","Align center":"Wyrównaj do środka","Justify":"Wyrównaj obustronnie","Text alignment":"Wyrównanie tekstu","Text alignment toolbar":"Pasek narzędzi wyrównania tekstu"},getPluralForm(n){return (n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);}}};
e[ 'pl' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'pl' ].dictionary = Object.assign( e[ 'pl' ].dictionary, dictionary );
e[ 'pl' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );