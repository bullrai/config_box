'use strict';

// ─────────────────────────────────────────────
//  LAYOUTS — codés en dur
//  x, y : coordonnées en mm depuis coin haut-gauche du SVG
//  r    : rayon en mm (12 = 24mm, 15 = 30mm)
// ─────────────────────────────────────────────
const LAYOUTS = {
    booyah: {
        label: 'Booyah',
        svg: 'layouts/booyah.svg',
        svgWidth:  380.85,
        svgHeight: 230.13,
        left: {
            booyah: {
                label: 'Booyah',
                buttons: [
                    { x: 106.4, y: 118.3, r: 12, name: ''      },
                    { x: 135.4, y: 127.3, r: 12, name: 'DOWN'  },
                    { x:  73.4, y:  52.3, r: 12, name: 'LEFT'  },
                    { x: 103.4, y:  52.3, r: 12, name: 'UP'    },
                    { x: 130.4, y:  64.3, r: 12, name: 'RIGHT' },
                    { x: 155.4, y: 150.3, r: 12, name: ''      },
                    { x: 167.9, y:  53.8, r: 12, name: 'select'},
                ]
            },
            hit: {
                label: 'Hit',
                buttons: [
                    { x:  72.5,  y:  61.8, r: 12, name: 'LEFT' },
                    { x: 102.5,  y:  60.3, r: 12, name: 'UP'   },
                    { x: 130.0,  y:  73.8, r: 12, name: 'RIGHT'},
                    { x: 142.5,  y: 126.8, r: 15, name: 'DOWN' },  // 30mm bas-gauche
                ]
            },
            hit1: {
                label: 'Hit+1',
                buttons: [
                    { x:  72.5, y:  61.8, r: 12, name: 'LEFT'  },
                    { x: 102.5, y:  60.3, r: 12, name: 'DOWN'  },  // ou RIGHT selon orientation
                    { x: 130.0, y:  73.8, r: 12, name: 'RIGHT' },
                    { x:  44.0, y:  77.8, r: 15, name: ''      },  // 30mm
                    { x: 142.5,  y: 126.8, r: 15, name: 'DOWN' },  // 30mm bas-gauche
                ]
            },
            diamond: {
                label: 'diamond',
                buttons: [
                    { x:  72.89, y: 65.40, r: 12, name: 'LEFT'  },
                    { x:  99.93, y: 52.06, r: 12, name: 'UP'    },
                    { x:  96.57, y: 84.06, r: 12, name: 'DOWN'  },
                    { x: 124.60, y: 70.83, r: 12, name: 'RIGHT' },
                ]
            },
            zqsd: {
                label: 'zqsd',
                buttons: [
                    { x:  67.83, y: 76.03, r: 12, name: 'LEFT'  },
                    { x:  96.23, y: 78.53, r: 12, name: ''      },
                    { x:  98.64, y: 49.83, r: 12, name: ''      },
                    { x: 124.64, y: 80.83, r: 12, name: 'RIGHT' },
                ]
            },
        },
        right: {
            'booyah': {
                label: 'Booyah',
                buttons: [
                    { x: 212.9, y:  53.8, r: 12, name: 'start' },
                    { x: 250.4, y:  59.3, r: 12, name: 'X'     },
                    { x: 277.4, y:  47.3, r: 12, name: 'Y'     },
                    { x: 228.5, y:  79.0, r: 12, name: ''      },
                    { x: 256.4, y:  88.4, r: 12, name: 'L1'    },
                    { x: 283.4, y:  77.6, r: 12, name: 'R1'    },
                    { x: 312.4, y:  77.6, r: 12, name: 'L2'    },
                    { x: 307.4, y:  47.3, r: 12, name: 'B'     },
                    { x: 274.4, y: 118.3, r: 12, name: ''      },
                    { x: 245.4, y: 127.3, r: 12, name: 'A'     },
                    { x: 225.4, y: 150.3, r: 12, name: ''      },
                    { x: 338.7, y:  57.7, r: 15, name: 'R2'    },
                ]
            },
            'segaP2': {
                label: 'segaP2',
                buttons: [
                    { x: 250.0, y:  58.8, r: 12, name: 'LP' },
                    { x: 277.5, y:  45.3, r: 12, name: 'MP' },
                    { x: 306.5, y:  45.3, r: 12, name: 'HP' },
                    { x: 334.0, y:  58.3, r: 12, name: 'E1' },
                    { x: 250.0, y:  89.8, r: 12, name: 'LK' },
                    { x: 277.5, y:  76.4, r: 12, name: 'MK' },
                    { x: 306.5, y:  76.4, r: 12, name: 'HK' },
                    { x: 334.0, y:  89.4, r: 12, name: 'E2' },
                ]
            },
            segaP2_split: {
                label: 'segaP2 split',
                buttons: [
                    { x: 237.50, y: 126.83, r: 15, name: ''   },  // 30mm bas
                    { x: 250.00, y:  89.83, r: 12, name: 'LP' },
                    { x: 250.00, y:  58.83, r: 12, name: 'MP' },
                    { x: 277.50, y:  76.44, r: 12, name: 'LK' },
                    { x: 277.50, y:  45.33, r: 12, name: 'HP' },
                    { x: 306.50, y:  76.44, r: 12, name: 'MK' },
                    { x: 306.50, y:  45.33, r: 12, name: 'E1' },
                    { x: 335.61, y:  60.89, r: 15, name: ''   },  // 30mm droite
                ]
            },
            'viewlix': {
                label: 'viewlix',
                buttons: [
                    { x: 247.8, y:  90.8, r: 12, name: 'LP' },
                    { x: 250.0, y:  58.8, r: 12, name: 'MP' },
                    { x: 275.3, y:  77.3, r: 12, name: 'LK' },
                    { x: 277.5, y:  45.3, r: 12, name: 'HP' },
                    { x: 305.3, y:  77.3, r: 12, name: 'MK' },
                    { x: 307.5, y:  45.3, r: 12, name: 'E1' },
                    { x: 335.3, y:  77.3, r: 12, name: 'HK' },
                    { x: 337.5, y:  45.3, r: 12, name: 'E2' },
                ]
            },
            viewlix_split: {
                label: 'viewlix split',
                buttons: [
                    { x: 237.50, y: 126.83, r: 15, name: ''   },  // 30mm bas
                    { x: 247.80, y:  90.83, r: 12, name: 'LP' },
                    { x: 250.00, y:  58.83, r: 12, name: 'MP' },
                    { x: 275.30, y:  77.33, r: 12, name: 'LK' },
                    { x: 277.50, y:  45.33, r: 12, name: 'HP' },
                    { x: 305.30, y:  77.33, r: 12, name: 'MK' },
                    { x: 307.50, y:  45.33, r: 12, name: 'E1' },
                    { x: 335.17, y:  63.31, r: 15, name: ''   },  // 30mm droite
                ]
            },
        }
    }
};

// ─────────────────────────────────────────────
//  ÉTAT
// ─────────────────────────────────────────────
let activeLayoutId  = null;
let activeLeftId    = null;
let activeRightId   = null;
let buttons         = [];       // { id, xMm, yMm, r, name, el }
let selectedId      = null;
let idCounter       = 0;
let pxPerMm         = 1;        // ratio calculé à l'affichage
let svgOffsetX      = 0;        // offset du SVG dans le canvas-wrap (px)
let svgOffsetY      = 0;
let gridEnabled     = false;
let snapEnabled     = false;
let popoverFixedPos = null;     // position sauvegardée par drag
let popoverIsFixed  = false;    // mode fixe vs suivre bouton

// ─────────────────────────────────────────────
//  DOM
// ─────────────────────────────────────────────
const canvasWrap    = document.getElementById('canvas-wrap');
const appBody       = document.querySelector('.app__body');
const canvasBg      = document.getElementById('canvas-bg');
const canvasBtns    = document.getElementById('canvas-buttons');
const bgImg         = document.getElementById('bg-img');
const layoutList    = document.getElementById('layout-list');
const headerTag     = document.getElementById('header-tag');
const statusPos     = document.getElementById('status-pos');
const statusSel     = document.getElementById('status-sel');
const statusCount   = document.getElementById('status-count');
const propsPopover  = document.getElementById('props-popover');
const propName      = document.getElementById('prop-name');
const propSize      = document.getElementById('prop-size');
const propX         = document.getElementById('prop-x');
const propY         = document.getElementById('prop-y');

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    buildLayoutList();
    bindToolbar();
    bindPropsPopover();
    bindCanvasEvents();
    loadPopoverPos();

    const firstId = Object.keys(LAYOUTS)[0];
    if (firstId) loadLayout(firstId);
});

window.addEventListener('resize', () => {
    if (activeLayoutId) recalcPxPerMm();
    if (selectedId) {
        const btn = buttons.find(b => b.id === selectedId);
        if (btn) positionPopover(btn);
    }
});

// ─────────────────────────────────────────────
//  POPOVER POSITION (localStorage)
// ─────────────────────────────────────────────
function savePopoverPos() {
    const pos = {
        left: propsPopover.style.left,
        top: propsPopover.style.top
    };
    localStorage.setItem('propsPopoverPos', JSON.stringify(pos));
    popoverFixedPos = pos;
    popoverIsFixed = true;
}

function loadPopoverPos() {
    const saved = localStorage.getItem('propsPopoverPos');
    if (saved) {
        const pos = JSON.parse(saved);
        propsPopover.style.left = pos.left;
        propsPopover.style.top = pos.top;
        popoverFixedPos = pos;
        popoverIsFixed = true;
        return true;
    }
    return false;
}

// ─────────────────────────────────────────────
//  LISTE DES LAYOUTS
// ─────────────────────────────────────────────
function buildLayoutList() {
    layoutList.innerHTML = '';
    Object.entries(LAYOUTS).forEach(([id, l]) => {
        const item = document.createElement('div');
        item.className = 'layout-item';
        item.dataset.id = id;
        item.innerHTML = `<span>${l.label}</span><span class="layout-item__id">${id}</span>`;
        item.addEventListener('click', () => loadLayout(id));
        layoutList.appendChild(item);
    });
}

function buildSideLists(layoutId) {
    const layout = LAYOUTS[layoutId];
    const leftList  = document.getElementById('left-list');
    const rightList = document.getElementById('right-list');
    leftList.innerHTML = rightList.innerHTML = '';

    Object.entries(layout.left).forEach(([id, l]) => {
        const item = document.createElement('div');
        item.className = 'layout-item left-item';
        item.dataset.id = id;
        item.textContent = l.label;
        item.addEventListener('click', () => loadSide('left', id));
        leftList.appendChild(item);
    });

    Object.entries(layout.right).forEach(([id, l]) => {
        const item = document.createElement('div');
        item.className = 'layout-item right-item';
        item.dataset.id = id;
        item.textContent = l.label;
        item.addEventListener('click', () => loadSide('right', id));
        rightList.appendChild(item);
    });
}

// ─────────────────────────────────────────────
//  CHARGEMENT LAYOUT
// ─────────────────────────────────────────────
function loadLayout(id) {
    const layout = LAYOUTS[id];
    if (!layout) return;
    activeLayoutId = id;

    document.querySelectorAll('.layout-item').forEach(el =>
    el.classList.toggle('is-active', el.dataset.id === id && !el.classList.contains('left-item') && !el.classList.contains('right-item')));
    headerTag.textContent = layout.label;

    buildSideLists(id);

    bgImg.src = layout.svg;
    bgImg.onload = () => {
        recalcPxPerMm();
        clearButtons();
        const firstLeft  = Object.keys(layout.left)[0];
        const firstRight = Object.keys(layout.right)[0];
        if (firstLeft)  loadSide('left',  firstLeft);
        if (firstRight) loadSide('right', firstRight);
    };
}

function loadSide(side, id) {
    const layout = LAYOUTS[activeLayoutId];
    if (!layout || !layout[side][id]) return;

    if (side === 'left')  activeLeftId  = id;
    if (side === 'right') activeRightId = id;

    document.querySelectorAll(`.${side}-item`).forEach(el =>
    el.classList.toggle('is-active', el.dataset.id === id));

    buttons.filter(b => b.side === side).forEach(b => b.el.remove());
    buttons = buttons.filter(b => b.side !== side);

    layout[side][id].buttons.forEach(b =>
    createButton(b.x, b.y, b.r, b.name, side));
    updateCount();
}

function recalcPxPerMm() {
    const layout  = LAYOUTS[activeLayoutId];
    if (!layout) return;

    const wrapW   = canvasWrap.clientWidth;
    const wrapH   = canvasWrap.clientHeight;
    const svgW    = layout.svgWidth;
    const svgH    = layout.svgHeight;
    const scaleX  = wrapW / svgW;
    const scaleY  = wrapH / svgH;
    const CANVAS_PADDING = 0.9;
    pxPerMm       = Math.min(scaleX, scaleY) * CANVAS_PADDING;

    const dispW   = svgW * pxPerMm;
    const dispH   = svgH * pxPerMm;
    svgOffsetX    = (wrapW - dispW) / 2;
    svgOffsetY    = (wrapH - dispH) / 2;

    bgImg.style.width  = dispW + 'px';
    bgImg.style.height = dispH + 'px';
    bgImg.style.left   = svgOffsetX + 'px';
    bgImg.style.top    = svgOffsetY + 'px';

    buttons.forEach(b => repositionButton(b));
}

// ─────────────────────────────────────────────
//  BOUTONS CANVAS
// ─────────────────────────────────────────────
function makeId() { return ++idCounter; }

function createButton(xMm, yMm, r, name, side = 'custom') {
    const id  = makeId();
    const el  = document.createElement('div');
    el.className = `cbutton size-${r === 15 ? 30 : 24}`;
    el.dataset.id = id;

    const label = document.createElement('span');
    label.className = 'cbutton__label';
    label.textContent = name || '';
    el.appendChild(label);

    const del = document.createElement('button');
    del.className = 'cbutton__delete';
    del.innerHTML = '✕';
    del.title = 'Supprimer';
    del.addEventListener('mousedown', e => { e.stopPropagation(); e.preventDefault(); });
    del.addEventListener('click', e => {
        e.stopPropagation();
        const idx = buttons.findIndex(b => b.id === id);
        if (idx === -1) return;
        buttons[idx].el.remove();
        buttons.splice(idx, 1);
        if (selectedId === id) selectButton(null);
        updateCount();
    });
    el.appendChild(del);

    canvasBtns.appendChild(el);

    const btn = { id, xMm, yMm, r, name: name || '', el, side };
    buttons.push(btn);
    repositionButton(btn);
    bindButtonEvents(btn);
    return btn;
}

function repositionButton(btn) {
    const px = btn.xMm * pxPerMm + svgOffsetX;
    const py = btn.yMm * pxPerMm + svgOffsetY;
    const diameter = btn.r * 2 * pxPerMm;
    btn.el.style.width  = diameter + 'px';
    btn.el.style.height = diameter + 'px';
    btn.el.style.left   = (px - diameter / 2) + 'px';
    btn.el.style.top    = (py - diameter / 2) + 'px';
    btn.el.style.fontSize = Math.max(8, diameter * 0.28) + 'px';
}

function clearButtons() {
    buttons.forEach(b => b.el.remove());
    buttons = [];
    selectButton(null);
}

// ─────────────────────────────────────────────
//  DRAG & DROP
// ─────────────────────────────────────────────
function bindButtonEvents(btn) {
    const el = btn.el;

    el.addEventListener('mousedown', e => {
        e.stopPropagation();
        e.preventDefault();
        selectButton(btn.id);

        const startX  = e.clientX;
        const startY  = e.clientY;
        const startXm = btn.xMm;
        const startYm = btn.yMm;

        el.classList.add('is-dragging');

        function onMove(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            let nx = startXm + dx / pxPerMm;
            let ny = startYm + dy / pxPerMm;
            if (snapEnabled) {
                const snap = 1;
                nx = Math.round(nx / snap) * snap;
                ny = Math.round(ny / snap) * snap;
            }
            const layout = LAYOUTS[activeLayoutId];
            if (layout) {
                nx = Math.max(btn.r, Math.min(nx, layout.svgWidth - btn.r));
                ny = Math.max(btn.r, Math.min(ny, layout.svgHeight - btn.r));
            }
            btn.xMm = nx;
            btn.yMm = ny;
            repositionButton(btn);
            updatePropsForm(btn);
            positionPopover(btn);
            statusPos.innerHTML = `x: <span>${nx.toFixed(1)}</span> y: <span>${ny.toFixed(1)}</span> mm`;
        }

        function onUp() {
            el.classList.remove('is-dragging');
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });

    el.addEventListener('dblclick', e => {
        e.stopPropagation();
        selectButton(btn.id);
        propName.focus();
        propName.select();
    });
}

// ─────────────────────────────────────────────
//  SÉLECTION
// ─────────────────────────────────────────────
function selectButton(id) {
    selectedId = id;
    buttons.forEach(b => b.el.classList.toggle('is-selected', b.id === id));

    const btn = buttons.find(b => b.id === id);
    const hasSel = !!btn;

    if (hasSel) {
        updatePropsForm(btn);
        positionPopover(btn);
        propsPopover.classList.add('is-visible');
        statusSel.innerHTML = `sel: <span>${btn.name || 'btn_' + btn.id}</span>`;
    } else {
        propsPopover.classList.remove('is-visible');
        statusSel.innerHTML = `sel: <span>aucune</span>`;
    }

    ['rpanel-delete', 'rpanel-dup'].forEach(bid => {
        document.getElementById(bid)?.classList.toggle('is-disabled', !hasSel);
    });
}

function positionPopover(btn) {
    const wrapRect = canvasWrap.getBoundingClientRect();
    const popoverW = 170;
    const popoverH = 220;

    if (popoverIsFixed && popoverFixedPos) {
        let left = parseFloat(propsPopover.style.left) || 0;
        let top = parseFloat(propsPopover.style.top) || 0;

        if (left + popoverW > wrapRect.width) left = wrapRect.width - popoverW - 8;
        if (top + popoverH > wrapRect.height) top = wrapRect.height - popoverH - 8;
        if (left < 0) left = 8;
        if (top < 0) top = 8;

        propsPopover.style.left = left + 'px';
        propsPopover.style.top = top + 'px';
    } else {
        const btnRect = btn.el.getBoundingClientRect();
        const offset = 12;

        let left = btnRect.right + offset - wrapRect.left;
        let top = btnRect.bottom + offset - wrapRect.top;

        if (left + popoverW > wrapRect.width) {
            left = btnRect.left - wrapRect.left - popoverW - offset;
        }
        if (top + popoverH > wrapRect.height) {
            top = btnRect.top - wrapRect.top - popoverH - offset;
        }
        if (left < 0) left = 8;
        if (top < 0) top = 8;

        propsPopover.style.left = left + 'px';
        propsPopover.style.top = top + 'px';
    }
}

function updatePropsForm(btn) {
    propName.value = btn.name;
    propSize.value = btn.r === 15 ? '30' : '24';
    propX.value    = btn.xMm.toFixed(1);
    propY.value    = btn.yMm.toFixed(1);
    document.querySelectorAll('.size-btn').forEach(el =>
    el.classList.toggle('is-active', el.dataset.size === String(btn.r === 15 ? 30 : 24)));
}

// ─────────────────────────────────────────────
//  ACTIONS
// ─────────────────────────────────────────────
function addButton() {
    const sizeVal = document.getElementById('add-size').value;
    const r = sizeVal === '30' ? 15 : 12;
    const layout = LAYOUTS[activeLayoutId];
    const cx = layout ? layout.svgWidth  / 2 : 190;
    const cy = layout ? layout.svgHeight / 2 : 115;
    const btn = createButton(cx, cy, r, '', 'custom');
    selectButton(btn.id);
    updateCount();
    propName.focus();
}

function deleteSelected() {
    if (!selectedId) return;
    const idx = buttons.findIndex(b => b.id === selectedId);
    if (idx === -1) return;
    buttons[idx].el.remove();
    buttons.splice(idx, 1);
    selectButton(null);
    updateCount();
}

function duplicateSelected() {
    if (!selectedId) return;
    const src = buttons.find(b => b.id === selectedId);
    if (!src) return;
    const btn = createButton(src.xMm + 8, src.yMm + 8, src.r, src.name, src.side);
    selectButton(btn.id);
    updateCount();
}

function updateCount() {
    statusCount.innerHTML = `boutons: <span>${buttons.length}</span>`;
}

// ─────────────────────────────────────────────
//  PROPRIÉTÉS (popover flottant)
// ─────────────────────────────────────────────
function bindPropsPopover() {
    propName.addEventListener('input', () => {
        const btn = buttons.find(b => b.id === selectedId);
        if (!btn) return;
        btn.name = propName.value;
        btn.el.querySelector('.cbutton__label').textContent = btn.name;
        statusSel.innerHTML = `sel: <span>${btn.name || 'btn_' + btn.id}</span>`;
    });

    propX.addEventListener('change', () => {
        const btn = buttons.find(b => b.id === selectedId);
        if (!btn) return;
        const val = parseFloat(propX.value);
        if (isNaN(val)) { propX.value = btn.xMm.toFixed(1); return; }
        btn.xMm = val;
        repositionButton(btn);
        propX.value = btn.xMm.toFixed(1);
    });

    propY.addEventListener('change', () => {
        const btn = buttons.find(b => b.id === selectedId);
        if (!btn) return;
        const val = parseFloat(propY.value);
        if (isNaN(val)) { propY.value = btn.yMm.toFixed(1); return; }
        btn.yMm = val;
        repositionButton(btn);
        propY.value = btn.yMm.toFixed(1);
    });

    document.querySelectorAll('.size-btn').forEach(el => {
        el.addEventListener('click', () => {
            const btn = buttons.find(b => b.id === selectedId);
            if (!btn) return;
            const newR = parseInt(el.dataset.size) === 30 ? 15 : 12;
            btn.r = newR;
            btn.el.className = `cbutton size-${newR === 15 ? 30 : 24}${btn.id === selectedId ? ' is-selected' : ''}`;
            repositionButton(btn);
            updatePropsForm(btn);
        });
    });

    document.getElementById('rpanel-delete').addEventListener('click', deleteSelected);
    document.getElementById('rpanel-dup').addEventListener('click', duplicateSelected);

    document.addEventListener('mousedown', e => {
        if (propsPopover.classList.contains('is-visible') &&
            !propsPopover.contains(e.target) &&
            !e.target.classList.contains('cbutton')) {
            selectButton(null);
        }
    });

    const popoverTitle = propsPopover.querySelector('.props-popover__title');
    let isDragging = false;
    let dragStartX, dragStartY, startLeft, startTop;

    popoverTitle.addEventListener('mousedown', e => {
        if (e.target.tagName === 'INPUT') return;
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        startLeft = parseFloat(propsPopover.style.left) || 0;
        startTop = parseFloat(propsPopover.style.top) || 0;
        propsPopover.classList.add('is-dragging');
        e.preventDefault();
    });

    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        let newLeft = startLeft + dx;
        let newTop = startTop + dy;

        const bodyRect = appBody.getBoundingClientRect();
        const popoverW = propsPopover.offsetWidth;
        const popoverH = propsPopover.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, bodyRect.width - popoverW));
        newTop = Math.max(0, Math.min(newTop, bodyRect.height - popoverH));

        propsPopover.style.left = newLeft + 'px';
        propsPopover.style.top = newTop + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            propsPopover.classList.remove('is-dragging');
            savePopoverPos();
        }
    });
}

// ─────────────────────────────────────────────
//  CANVAS EVENTS
// ─────────────────────────────────────────────
function bindCanvasEvents() {
    canvasBtns.addEventListener('mousedown', e => {
        if (e.target === canvasBtns) selectButton(null);
    });

    canvasWrap.addEventListener('mousemove', e => {
        const rect  = canvasWrap.getBoundingClientRect();
        const xMm   = (e.clientX - rect.left - svgOffsetX) / pxPerMm;
        const yMm   = (e.clientY - rect.top  - svgOffsetY) / pxPerMm;
        statusPos.innerHTML = `x: <span>${xMm.toFixed(1)}</span> y: <span>${yMm.toFixed(1)}</span> mm`;
    });
}

// ─────────────────────────────────────────────
//  TOOLBAR
// ─────────────────────────────────────────────
function bindToolbar() {
    document.getElementById('btn-add').addEventListener('click', addButton);

    document.getElementById('btn-grid').addEventListener('click', function() {
        gridEnabled = !gridEnabled;
        this.classList.toggle('is-active', gridEnabled);
        document.querySelector('.app').classList.toggle('grid-active', gridEnabled);
    });

    document.getElementById('btn-snap').addEventListener('click', function() {
        snapEnabled = !snapEnabled;
        this.classList.toggle('is-active', snapEnabled);
    });

    document.getElementById('btn-export-svg').addEventListener('click', exportSVG);
    document.getElementById('btn-export-txt').addEventListener('click', exportTXT);
}

// ─────────────────────────────────────────────
//  UTILITAIRE ÉCHAPPEMENT XML
// ─────────────────────────────────────────────
function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ─────────────────────────────────────────────
//  EXPORT SVG
// ─────────────────────────────────────────────
function exportSVG() {
    const layout  = LAYOUTS[activeLayoutId] || { svgWidth: 380, svgHeight: 230 };
    const W       = layout.svgWidth;
    const H       = layout.svgHeight;

    let btnSVG = '';
    buttons.forEach(b => {
        const col = b.r === 15 ? '#7027CF' : '#2D4FCC';
        btnSVG += `  <circle cx="${b.xMm.toFixed(2)}" cy="${b.yMm.toFixed(2)}" r="${b.r}" fill="${col}33" stroke="${col}" stroke-width="0.8"/>\n`;
        if (b.name) {
            btnSVG += `  <text x="${b.xMm.toFixed(2)}" y="${(b.yMm + 0.4).toFixed(2)}" text-anchor="middle" dominant-baseline="middle" font-family="Arial,sans-serif" font-size="${(b.r * 0.55).toFixed(1)}" fill="#ffffff">${escapeXml(b.name)}</text>\n`;
        }
    });

    fetch(bgImg.src)
    .then(r => r.text())
    .then(contourSVG => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(contourSVG, 'image/svg+xml');
        const svgEl = doc.querySelector('svg');
        const inner = svgEl ? svgEl.innerHTML : '';
        const out = `<?xml version="1.0" encoding="UTF-8"?>
        <!-- Bullraï Fightstick — Layout ${headerTag.textContent} -->
        <!-- Unités : millimètres -->
        <svg xmlns="http://www.w3.org/2000/svg" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}">
        <rect width="${W}" height="${H}" fill="none"/>
        <g id="contour">
        ${inner.trim()}
        </g>
        <g id="boutons">
        ${btnSVG}</g>
        </svg>`;
        download(out, `bullrai-${activeLayoutId || 'layout'}.svg`, 'image/svg+xml');
    })
    .catch(() => {
        const out = `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}">
        <rect width="${W}" height="${H}" fill="none"/>
        <g id="boutons">
        ${btnSVG}</g>
        </svg>`;
        download(out, `bullrai-layout.svg`, 'image/svg+xml');
    });
}

// ─────────────────────────────────────────────
//  EXPORT TXT
// ─────────────────────────────────────────────
function exportTXT() {
    const lines = [
        `Bullraï — Configuration Layout`,
        `Boîtier : ${headerTag.textContent}`,
        `Date    : ${new Date().toLocaleDateString('fr-FR')}`,
        ``,
        `BOUTONS (${buttons.length}) :`,
        `${'N°'.padEnd(4)} ${'Nom'.padEnd(12)} ${'Taille'.padEnd(8)} ${'X (mm)'.padStart(8)} ${'Y (mm)'.padStart(8)}`,
        `─`.repeat(46),
        ...buttons.map((b, i) => {
            const size = b.r === 15 ? '30mm' : '24mm';
            return `${String(i + 1).padEnd(4)} ${(b.name || '—').padEnd(12)} ${size.padEnd(8)} ${b.xMm.toFixed(1).padStart(8)} ${b.yMm.toFixed(1).padStart(8)}`;
        }),
        ``,
        `Note : coordonnées en mm depuis le coin haut-gauche du boîtier.`,
    ];
    download(lines.join('\n'), `bullrai-${activeLayoutId || 'layout'}.txt`, 'text/plain');
}

// ─────────────────────────────────────────────
//  UTILITAIRE DOWNLOAD
// ─────────────────────────────────────────────
function download(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 100);
}
