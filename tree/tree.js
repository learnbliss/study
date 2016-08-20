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
    // // Узнать по какому элементу клик? e.target
    // // Если клик не по "li", то найти родительский "li"
    //
    // if (e.target.tagName === 'LI') {
    //     var clickEl = e.target;
    // } else {
    //     clickEl = e.target.closest('LI');
    // }
    // //todo Узнать есть ли дети?
    //
    // var hideClickEl = clickEl.children
    //
    // // if( hideClickEl.indexOf('LI') ) {
    // //
    // // }
    //
    // // toggle(clickEl);
    // console.log(e);
    // console.log(clickEl);
    if( e.target.hasAttributes('hide') ) {
        for( var i = 0; e.target.children.length > i; i++ ) {
            var forEl = e.target.children[i];
            console.log(i, forEl);
        }
            toggle(forEl);
        // Выбрать из елемента на котором произошло событие, елементы у которых
        // Есть children_ы
        console.log(e);
    }

}