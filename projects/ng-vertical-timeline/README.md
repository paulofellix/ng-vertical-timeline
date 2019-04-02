<p align="center"><img src="logo.png" /></p>

<h1 align="center"> Angular Vertical Timeline </h1>

<p> Angular Vertical Timeline is an Angular 2+ Component that generates a vertical timeline with events. </p>

<h3> Download & Installation </h3>

```shell
$ npm i ng-vertical-timeline
```

<h3> Key features </h3>

<ul>
  <li>Automatic ordering of the events</li>
  <li>Responsive layout for mobile applications</li>
  <li>Customisation made easily</li>
</ul>

<h3> Demo</h3>

<a href="http://stephen-bruere.com/demo/ng-vertical-timeline"> Link the the demo </a>

<h3> Usage </h3>

1 - Add the <b>NgVerticalTimelineModule</b> module to your <b>app.module.ts</b> file:

```html
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
...
@NgModule({
  imports: [
    ...
    NgVerticalTimelineModule
  ],
...
```

2 - Create an array of events

```html

   events = [
    {
      id: 0,
      title: 'My last travel',
      content: 'There are so much countries in the world...',
      date: '2016 - 2019',
      icon: 'https://image.flaticon.com/icons/svg/214/214335.svg'
    },
    {
      id: 1,
      title: 'My Job',
      content: 'The best job I could possibly get!',
      date: '2015 - 2016',
      icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg'
    },
    {
      id: 2,
      title: 'My Education',
      content: 'This is the university I went...',
      date: '2011',
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    }
  ];

```

3 - Add the selector ng-vertical-timeline to your componenent:

```html

<ng-vertical-timeline [data]="events"></ng-vertical-timeline>

```


<h3>License</h3>

This project is licensed under the MIT License