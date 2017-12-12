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
const styles_MessageComponent:any[] = ['.author[_ngcontent-%COMP%]{\n        display: inline-block;\n        font-style: italic;\n        font-size: 12px;\n        width : 80%;\n      }\n      .config[_ngcontent-%COMP%]{\n        display : inline-block;\n        text-align: right;\n        font-size: 12px;\n        width: 19%;\n      }'];
export const RenderType_MessageComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_MessageComponent,data:{}});
function View_MessageComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'a',[['class',
      'btn btn-primary']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onEdit()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Edit']))],(null as any),
      (null as any));
}
function View_MessageComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'a',[['class',
      'btn btn-danger']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.onDelete()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Delete']))],(null as any),
      (null as any));
}
export function View_MessageComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),19,'article',[['class',
      'panel panel-default']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),1,'div',[['class','panel-body']],(null as any),
      (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(3,
      (null as any),['\n        ','\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵeld(5,0,(null as any),(null as any),13,'div',[['class','panel-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(7,0,(null as any),
          (null as any),1,'div',[['class','author']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(8,(null as any),['\n            ',
          '\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(10,0,(null as any),(null as any),7,'div',[['class','config']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_MessageComponent_1)),i0.ɵdid(13,16384,
          (null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_MessageComponent_2)),
      i0.ɵdid(16,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_2:any = _co.belongsToUser();
    _ck(_v,13,0,currVal_2);
    const currVal_3:any = _co.belongsToUser();
    _ck(_v,16,0,currVal_3);
  },(_ck,_v) => {
    var _co:i2.MessageComponent = _v.component;
    const currVal_0:any = _co.message.content;
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = _co.message.username;
    _ck(_v,8,0,currVal_1);
  });
}
export function View_MessageComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-message',
      ([] as any[]),(null as any),(null as any),(null as any),View_MessageComponent_0,
      RenderType_MessageComponent)),i0.ɵdid(1,49152,(null as any),0,i2.MessageComponent,
      [i3.MessageService],(null as any),(null as any))],(null as any),(null as any));
}
export const MessageComponentNgFactory:i0.ComponentFactory<i2.MessageComponent> = i0.ɵccf('app-message',
    i2.MessageComponent,View_MessageComponent_Host_0,{message:'message'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovbm9kZSBjb2Rlcy9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9ub2RlIGNvZGVzL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovbm9kZSBjb2Rlcy9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovbm9kZSBjb2Rlcy9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC50cy5NZXNzYWdlQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICB7eyBtZXNzYWdlLnVzZXJuYW1lIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCIgKGNsaWNrKT1cIm9uRWRpdCgpXCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwiYmVsb25nc1RvVXNlcigpXCIgKGNsaWNrKT1cIm9uRGVsZXRlKClcIj5EZWxldGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9hcnRpY2xlPiIsIjxhcHAtbWVzc2FnZT48L2FwcC1tZXNzYWdlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDU1k7TUFBQTtJQUFBO0lBQUE7SUFBbUQ7TUFBQTtNQUFBO0lBQUE7SUFBbkQ7RUFBQSxnQ0FBc0U7Ozs7b0JBQ3RFO01BQUE7SUFBQTtJQUFBO0lBQWtEO01BQUE7TUFBQTtJQUFBO0lBQWxEO0VBQUEsZ0NBQXVFOzs7O29CQVZuRjtNQUFBO01BQUEsZ0JBQXFDLDhDQUNqQztNQUFBO01BQUEsMERBQXdCO01BQUEsd0NBRWxCO01BQ047VUFBQTtNQUEwQixrREFDdEI7VUFBQTtVQUFBLDhCQUFvQjtVQUFBLGdCQUVkLGtEQUNOO2lCQUFBO2NBQUEsMERBQW9CO1VBQUEsbUNBQ2hCO1VBQUEsK0RBQUE7VUFBQTtVQUFBLGVBQThFLHNEQUM5RTtpQkFBQTthQUFBO1VBQUEsaUNBQWlGO01BQy9FLDhDQUNKO1VBQUE7O0lBSDZCO0lBQTNCLFlBQTJCLFNBQTNCO0lBQzBCO0lBQTFCLFlBQTBCLFNBQTFCOzs7SUFUZ0I7SUFBQTtJQUlBO0lBQUE7Ozs7b0JDTDVCO01BQUE7aUNBQUEsVUFBQTtNQUFBOzs7In0=