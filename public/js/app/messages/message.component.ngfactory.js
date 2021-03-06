/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './message.component';
import * as i3 from './message.service';
var styles_MessageComponent = ['.author[_ngcontent-%COMP%]{\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width : 80%;\n      }\n      .config[_ngcontent-%COMP%]{\n        display : inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n      }'];
export var RenderType_MessageComponent = i0.ɵcrt({ encapsulation: 0,
    styles: styles_MessageComponent, data: {} });
function View_MessageComponent_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'a', [['class',
                'btn btn-primary']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onEdit() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['Edit']))], null, null);
}
function View_MessageComponent_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'a', [['class',
                'btn btn-danger']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onDelete() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ['Delete']))], null, null);
}
export function View_MessageComponent_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, 'article', [['class',
                'panel panel-default']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵeld(2, 0, null, null, 1, 'div', [['class', 'panel-body']], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ['\n        ', '\n    '])), (_l()(), i0.ɵted(-1, null, ['\n    '])),
        (_l()(), i0.ɵeld(5, 0, null, null, 13, 'div', [['class', 'panel-footer']], null, null, null, null, null)),
        (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(), i0.ɵeld(7, 0, null, null, 1, 'div', [['class', 'author']], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ['\n            ',
            '\n        '])), (_l()(), i0.ɵted(-1, null, ['\n        '])), (_l()(),
            i0.ɵeld(10, 0, null, null, 7, 'div', [['class', 'config']], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MessageComponent_1)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n            '])), (_l()(),
            i0.ɵand(16777216, null, null, 1, null, View_MessageComponent_2)),
        i0.ɵdid(16, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(-1, null, ['\n        '])),
        (_l()(), i0.ɵted(-1, null, ['\n    '])), (_l()(), i0.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.belongsToUser();
        _ck(_v, 13, 0, currVal_2);
        var currVal_3 = _co.belongsToUser();
        _ck(_v, 16, 0, currVal_3);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.message.content;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.message.username;
        _ck(_v, 8, 0, currVal_1);
    });
}
export function View_MessageComponent_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, 'app-message', [], null, null, null, View_MessageComponent_0, RenderType_MessageComponent)), i0.ɵdid(1, 49152, null, 0, i2.MessageComponent, [i3.MessageService], null, null)], null, null);
}
export var MessageComponentNgFactory = i0.ɵccf('app-message', i2.MessageComponent, View_MessageComponent_Host_0, { message: 'message' }, {}, []);
