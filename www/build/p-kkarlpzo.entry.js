import{r as e,h as a}from"./p-ea61ee30.js";import{e as t}from"./p-1173ef90.js";const i=class{constructor(a){e(this,a),this.items=[]}initializeMap(){t(["esri/portal/Portal"]).then(([e])=>{const a=new e;a.load().then(()=>{a.queryGroups({query:"id:"+this.groupId}).then(e=>{e.results.length&&e.results[0].queryItems({query:"type:Application"}).then(e=>{console.log(e),this.items=e.results})})})})}componentDidLoad(){this.initializeMap()}render(){return a("div",{class:"views-element-container"},a("ol",{class:"o-layout-grid o-layout-grid--3"},this.items.map(e=>a("li",{class:"o-layout-grid__item"},a("article",{class:"js--block-link c-project-teaser"},a("div",{class:"c-project-teaser__thumbnail"},a("div",{class:"c-project-teaser__image"},a("div",{"data-align":"center",class:"paragraph paragraph--type--stories-image paragraph--view-mode--teaser"},a("div",{class:"field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item"},a("figure",{class:"media"},a("div",{class:"media__image"},a("img",{srcset:e.thumbnailUrl,sizes:"(min-width: 37.5em) 374px, calc(100vw - 30px)",src:e.thumbnailUrl,alt:e.title,typeof:"foaf:Image"}))))))),a("h3",{class:"c-project-teaser__title"},a("a",{class:"c-project-teaser__title-link",target:"_blank",href:e.url,rel:"bookmark"},a("span",null,e.title))))))))}static get style(){return""}};export{i as map_gallery};