import{c as r,a as o,r as a,o as t,_ as i,b as u}from"./index-CStaQtlZ.js";const n={key:0,id:"summary-wrapper"},d={key:1,class:"empty"};function p(m,y,e,g,l,_){const s=a("c-summary");return e.userUpdated?(t(),r("div",n,[o(s,{class:"widget-padding",ref:"summary",repos:e.users,"error-messages":e.errorMessages,"is-widget-mode":!0},null,8,["repos","error-messages"])])):(t(),r("div",d,"Widget does not support uploading of .zip file generated by RepoSense."))}const c={name:"c-widget",components:{cSummary:u},props:{updateReportZip:{type:Function,required:!0},repos:{type:Object,required:!0},users:{type:Array,required:!0},userUpdated:{type:Boolean,required:!0},loadingOverlayOpacity:{type:Number,required:!0},tabType:{type:String,required:!0},creationDate:{type:String,required:!0},reportGenerationTime:{type:String,required:!0},errorMessages:{type:Object,required:!0}}},f=i(c,[["render",p]]);export{f as default};