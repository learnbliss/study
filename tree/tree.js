/*
 Создайте дерево, которое по клику на заголовок скрывает-показывает детей:
 Использовать делегирование.
 Клик вне текста заголовка (на пустом месте) ничего делать не должен.
 При наведении на заголовок – он становится жирным, реализовать через CSS.
 P.S. При необходимости HTML/CSS дерева можно изменить.
 */
var treeEl = document.body;
treeEl.addEventListener('click', hideEl);

function toggle(el) {
    el.style.display = (el.style.display === '') ? 'none' : ''
}

function hideEl(e) {
    if (e.target.hasAttributes('hide')) {
        for (var i = 0; e.target.children.length > i; i++) {
            var forEl = e.target.children[i];
            console.log(i, forEl);
        }
        toggle(forEl);
    }

}