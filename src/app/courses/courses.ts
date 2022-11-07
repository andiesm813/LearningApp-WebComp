import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcChipComponent, IgcExpansionPanelComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRatingComponent } from 'igniteui-webcomponents';
import LearningAppService from '../service/learning-app-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcRatingComponent, IgcChipComponent, IgcAvatarComponent, IgcIconComponent, IgcExpansionPanelComponent);

@customElement('app-courses')
export default class Courses extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      background-color: white;
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 2px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 40px;
      overflow: auto;
      position: relative;
      padding: 32px 0 0 32px;
      max-width: 700px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      overflow: hidden;
      position: relative;
      min-width: 440px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 4px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      height: 30px;
      min-height: 30px;
    }
    .group_5 {
      background-color: white;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      overflow: auto;
      position: relative;
      min-width: 600px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      min-width: 500px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_7 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 32px 32px 40px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 240px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      margin: 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 200px;
    }
    .group_13 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 32px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_14 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_15 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px 32px 32px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      border-radius: 8px;
      width: 140px;
      height: 100px;
    }
    .text {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
    }
    .chip {
      position: relative;
      min-width: 50px;
    }
    .image_1 {
      object-fit: cover;
      border-radius: 13px;
      min-width: 400px;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .h5 {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
      margin: 0 24px 0 0;
    }
    .text_1 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-secondary-400));
    }
    .text_2 {
      margin: 0 24px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .avatar_1 {
      --background: none;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-success-500));
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .avatar_1::part(base) {
      color: hsla(var(--ig-secondary-500));
      background-color: hsla(var(--ig-surface-500));
    }
    .list {
      height: max-content;
    }
    .list-item {
      margin: 0 0 8px;
    }
    .list_1 {
      height: max-content;
      min-width: max-content;
    }
    .rating {
      width: max-content;
      height: max-content;
    }
  `;

  constructor() {
    super();
    const learningAppService: LearningAppService = new LearningAppService();
      learningAppService.getAllCourses().then(data => {
        this.learningAppAllCourses = data;
        }, err => console.log(err));
  }

  @property()
  private learningAppAllCourses?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <h6 class="content">
            Courses
          </h6>
          <igc-list class="list">
            ${this.learningAppAllCourses?.map((item: any) => html`
              <igc-list-item class="list-item">
                <div>
                  <div class="row-layout group_2">
                    <img src="${item.Image}" class="image" />
                    <div class="column-layout group_3">
                      <p class="typography__subtitle-2 content">
                        ${item.Course}
                      </p>
                      <p class="typography__caption text">
                        ${item.Intro}
                      </p>
                      <div class="row-layout group_4">
                        <igc-rating value="${item.Rating}" size="small" class="rating"></igc-rating>
                        <igc-chip size="large" class="chip">
                          ${item.Level}
                        </igc-chip>
                        <igc-chip size="large" class="chip">
                          ${item.Tag}
                        </igc-chip>
                      </div>
                    </div>
                  </div>
                </div>
              </igc-list-item>
            `)}
          </igc-list>
        </div>
      </div>
      <div class="row-layout group_5">
        <div class="column-layout group_6">
          <div class="row-layout group_7">
            <img src="https://filetransfer.infragistics.com/index.php/apps/gallery/ajax/image.php?file=54e208ac2fafd1bde07d3239103f298d%2Fcourse01.svg" class="image_1" />
            <div class="column-layout group_8">
              <h5 class="h5">
                Web Development Basics
              </h5>
              <div class="row-layout group_9">
                <igc-rating value="4" size="medium" class="rating"></igc-rating>
                <igc-chip size="large" class="chip">
                  Beginner
                </igc-chip>
                <igc-chip size="large" class="chip">
                  Front-end
                </igc-chip>
              </div>
              <div class="column-layout group_10">
                <p class="typography__body-2 text">
                  HTML, CSS, and JavaScript: The basics of web development. If you’re looking to get started on front-end development, this course is for you. You'll find it particularly useful if you're coming from some other area of software development. 
                </p>
                <p class="typography__body-2 text">
                  We will then dive deep into each technology, exploring concepts like forms and controls in HTML, OOP in JavaScript, and the most important CSS patterns to make your web pages look good.
                </p>
              </div>
              <div class="row-layout group_11">
                <igc-avatar src="https://d3cg6cexo8t5ug.cloudfront.net/avatars/avatar14.png" size="medium" shape="circle" class="avatar"></igc-avatar>
                <div class="column-layout group_12">
                  <p class="typography__subtitle-2 content">
                    Susy Berenson
                  </p>
                  <p class="typography__body-2 text_1">
                    Senior Full-Stack Dev.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row-layout group_13">
            <h6 class="content">
              Course Content
            </h6>
            <div class="row-layout group_14">
              <span class="material-icons icon">
                book
              </span>
              <p class="typography__body-1 text_2">
                40 lectures
              </p>
              <span class="material-icons icon">
                access_time
              </span>
              <p class="typography__body-1 content">
                8 hours
              </p>
            </div>
          </div>
          <div class="column-layout group_15">
            <igc-accordion ?single-expand="${true}" class="accordion">
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Welcome to Web Development Basics</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Downloadable Course Resources</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Setup and Software Requirements</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Quick Introduction</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Getting to Know HTML Tags</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Viewing HTML Tags in Page Source</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Components and Structure of a Website</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Adding Tag Attributes</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Basics of HTML Elements</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Setting Up a Basic HTML Page</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating Links and Formatting Text</div>
                    <div slot="end">
                      <span class="material-icons icon_1">
                        check_circle
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Adding Basic Page Content</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Browser Favicon</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating an HTML Page</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">CSS Basics - Part 1</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">CSS Basics - Part 2</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Getting Started with External CSS</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Common CSS Properties</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Setting Colors with CSS</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Basic Styling with CSS</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Adding Paragraphs</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating Line Breaks</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Working with Headings</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Good Practices</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Paragraph and Heading Tags</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Inserting Images With the &lt;img&gt; Tag</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Image Attributes</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Image Formatting</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Working With Images</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating an Unordered List</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Unordered List Sub-Levels</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating an Ordered List</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Formating Lists</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Ordered and Unordered Lists</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Basics of HTML Tables &amp; Examples</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating a Basic HTML Table</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating a Basic HTML Table</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Additional Table Formatting</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating HTML Tables</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Introduction to Forms</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating HTML Input Text Controls</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Creating HTML Form Labels</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Adding an HTML Form Button to Submit Form Data</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Creating Forms</span>
              </igc-expansion-panel>
              <igc-expansion-panel>
                <igc-list class="list_1">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Static vs. Dynamic Webpages</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">JavaScript Basics: Fundamental Syntax</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Using Alerts and Prompts</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Events</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar size="small" shape="circle" class="avatar_1">
                        <span class="material-icons">play_circle_outline</span>
                      </igc-avatar>
                    </div>
                    <div slot="title">Testing JavaScript</div>
                    <div slot="end">
                      <span class="material-icons icon_2">
                        playlist_play
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
                <span slot="title">Introduction to JavaScript</span>
              </igc-expansion-panel>
            </igc-accordion>
          </div>
        </div>
      </div>
    `;
  }
}
