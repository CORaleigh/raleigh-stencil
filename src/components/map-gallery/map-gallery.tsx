import { Component, Prop, h, State } from '@stencil/core';
import { loadModules } from 'esri-loader';
@Component({
    tag: 'map-gallery',
    styleUrl: 'map-gallery.scss'
})
export class MapGallery {
    @Prop() groupId: string;
    @State() items: any[] = [];
    initializeMap() {
        loadModules(['esri/portal/Portal']).then(([Portal]) =>
        {
            const portal = new Portal();
            portal.load().then(() =>
            {
                portal.queryGroups({query:"id:"+this.groupId}).then(result =>
                    {
                        if (result.results.length) {
                            let group = result.results[0];
                            group.queryItems({query:"type:Application"}).then(result =>
                                {
                                    console.log(result)
                                    this.items = result.results;
                                });
                            }
                        });
                    });
                });
            }
            componentDidLoad() {
                this.initializeMap();
            }
            render() {
                return <div class="views-element-container">
                <ol class="o-layout-grid o-layout-grid--4">
                {this.items.map(item =>
                    {
                        return <li class="o-layout-grid__item">
                        <article class="js--block-link c-project-teaser">
                        <div class="c-project-teaser__thumbnail">
                        <div class="c-project-teaser__image">
                        <div data-align="center" class="paragraph paragraph--type--stories-image paragraph--view-mode--teaser">
                        <div class="field field--name-field-stories-image field--type-entity-reference field--label-hidden media--content field__item">
                        <figure class="media">
                        <div class="media__image">
                        <img srcset={item.thumbnailUrl} sizes="(min-width: 37.5em) 374px, calc(100vw - 30px)" src={item.thumbnailUrl} alt={item.title} typeof="foaf:Image"/>
                        </div>
                        </figure>
                        </div>
                        </div>
                        </div>
                        </div>
                        <h3 class="c-project-teaser__title">
                        <a class="c-project-teaser__title-link" target="_blank" href={item.url} rel="bookmark">
                        <span>{item.title}</span>
                        </a>
                        </h3>
                        </article>
                        </li>
                    })}
                    </ol>
                    </div>
                }
            }
            