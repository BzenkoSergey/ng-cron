(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{CxUJ:function(n,e,a){"use strict";a.r(e),a.d(e,"DocLocalizationModule",function(){return u});var t=a("SVse"),o=a("s7LF"),l=a("QxRf"),r=a("CaSd"),i=a("iInd");const c={tabs:{seconds:"\u0421\u0435\u043a\u0443\u043d\u0434\u0438"},quartz:{second:{every:{label:"\u041a\u043e\u0436\u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430"},increment:{label1:"\u041a\u043e\u0436\u043d\u0456",label2:"\u0441\u0435\u043a\u0443\u043d\u0434\u0438, \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438 \u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0438"},and:{label:"\u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430 (\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0434\u043d\u0443 \u0430\u0431\u043e \u043a\u0456\u043b\u044c\u043a\u0430)"},range:{label1:"\u0429\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u043c\u0456\u0436 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u044e",label2:"\u0456 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u044e"}}}};var b=a("8Y7J"),h=a("iiZv"),s=a("yAbP");const y=function(){return["./"]},d=[{path:"",component:(()=>{class n{constructor(){this.localizationHtmlExample='<quartz-cron [localization]="localization"></quartz-cron>',this.localizationTsExample="import { CronLocalization } from '@sbzen/ng-cron';\n\nexport class MyComponent {\n  localization: CronLocalization = {\n    tabs: {\n      seconds: '\u0421\u0435\u043a\u0443\u043d\u0434\u0438'\n    },\n    quartz: {\n      second: {\n        every: {\n        label: '\u041a\u043e\u0436\u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430'\n      },\n      increment: {\n        label1: '\u041a\u043e\u0436\u043d\u0456',\n        label2: '\u0441\u0435\u043a\u0443\u043d\u0434\u0438, \u043f\u043e\u0447\u0438\u043d\u0430\u044e\u0447\u0438 \u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0438'\n      },\n      and: {\n        label: '\u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430 (\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043e\u0434\u043d\u0443 \u0430\u0431\u043e \u043a\u0456\u043b\u044c\u043a\u0430)'\n      },\n      range: {\n        label1: '\u0429\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u0438 \u043c\u0456\u0436 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u044e',\n        label2: '\u0456 \u0441\u0435\u043a\u0443\u043d\u0434\u043e\u044e'\n      }\n    }\n  };\n}",this.secondsTabLocalization=c,this.fullLocalization="{\n  common: {\n    month: {\n      january: 'January',\n      february: 'February',\n      march: 'March',\n      april: 'April',\n      may: 'May',\n      june: 'June',\n      july: 'July',\n      august: 'August',\n      september: 'September',\n      october: 'October',\n      november: 'November',\n      december: 'December'\n    },\n    dayOfWeek: {\n      sunday: 'Sunday',\n      monday: 'Monday',\n      tuesday: 'Tuesday',\n      wednesday: 'Wednesday',\n      thursday: 'Thursday',\n      friday: 'Friday',\n      saturday: 'Saturday'\n    },\n    dayOfMonth: {\n      '1st': '1st',\n      '2nd': '2nd',\n      '3rd': '3rd',\n      '4th': '4th',\n      '5th': '5th',\n      '6th': '6th',\n      '7th': '7th',\n      '8th': '8th',\n      '9th': '9th',\n      '10th': '10th',\n      '11th': '11th',\n      '12th': '12th',\n      '13th': '13th',\n      '14th': '14th',\n      '15th': '15th',\n      '16th': '16th',\n      '17th': '17th',\n      '18th': '18th',\n      '19th': '19th',\n      '20th': '20th',\n      '21st': '21st',\n      '22nd': '22nd',\n      '23rd': '23rd',\n      '24th': '24th',\n      '25th': '25th',\n      '26th': '26th',\n      '27th': '27th',\n      '28th': '28th',\n      '29th': '29th',\n      '30th': '30th',\n      '31st': '31st'\n    }\n  },\n  tabs: {\n    seconds: 'Seconds',\n    minutes: 'Minutes',\n    hours: 'Hours',\n    day: 'Day',\n    month: 'Month',\n    year: 'Year'\n  },\n  quartz: {\n    day: {\n      every: {\n        label: 'Every day'\n      },\n      dayOfWeekIncrement: {\n        label1: 'Every',\n        label2: 'day(s) starting on'\n      },\n      dayOfMonthIncrement: {\n        label1: 'Every',\n        label2: 'day(s) starting on the',\n        label3: 'of the month'\n      },\n      dayOfWeekAnd: {\n        label: 'Specific day of week (choose one or many)'\n      },\n      dayOfMonthAnd: {\n        label: 'Specific day of month (choose one or many)'\n      },\n      dayOfMonthLastDay: {\n        label: 'On the last day of the month'\n      },\n      dayOfMonthLastDayWeek: {\n        label: 'On the last weekday of the month'\n      },\n      dayOfWeekLastNTHDayWeek: {\n        label1: 'On the last',\n        label2: 'of the month'\n      },\n      dayOfMonthDaysBeforeEndMonth: {\n        label: 'day(s) before the end of the month'\n      },\n      dayOfMonthNearestWeekDayOfMonth: {\n        label1: 'Nearest weekday (Monday to Friday) to the',\n        label2: 'of the month'\n      },\n      dayOfWeekNTHWeekDayOfMonth: {\n        label1: 'On the',\n        label2: 'of the month'\n      }\n    },\n    month: {\n      every: {\n        label: 'Every month'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'month(s) starting at month',\n      },\n      and: {\n        label: 'Specific month (choose one or many)'\n      },\n      range: {\n        label1: 'Every month between month',\n        label2: 'and month'\n      }\n    },\n    second: {\n      every: {\n        label: 'Every second'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'second(s) starting at second',\n      },\n      and: {\n        label: 'Specific second (choose one or many)'\n      },\n      range: {\n        label1: 'Every second between second',\n        label2: 'and second'\n      }\n    },\n    minute: {\n      every: {\n        label: 'Every minute'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'minute(s) starting at minute',\n      },\n      and: {\n        label: 'Specific minute (choose one or many)'\n      },\n      range: {\n        label1: 'Every minute between minute',\n        label2: 'and minute'\n      }\n    },\n    hour: {\n      every: {\n        label: 'Every hour'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'hour(s) starting at hour',\n      },\n      and: {\n        label: 'Specific hour (choose one or many)'\n      },\n      range: {\n        label1: 'Every hour between hour',\n        label2: 'and hour'\n      }\n    },\n    year: {\n      every: {\n        label: 'Any year'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'year(s) starting at year',\n      },\n      and: {\n        label: 'Specific year (choose one or many)'\n      },\n      range: {\n        label1: 'Every year between year',\n        label2: 'and year'\n      }\n    }\n  },\n  unix: {\n    day: {\n      every: {\n        label: 'Every day'\n      },\n      dayOfWeekIncrement: {\n        label1: 'Every',\n        label2: 'day(s) of week'\n      },\n      dayOfMonthIncrement: {\n        label1: 'Every',\n        label2: 'day(s) of month'\n      },\n      dayOfWeekAnd: {\n        label: 'Specific day of week (choose one or many)'\n      },\n      dayOfMonthAnd: {\n        label: 'Specific day of month (choose one or many)'\n      }\n    },\n    month: {\n      every: {\n        label: 'Every month'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'month(s)',\n      },\n      and: {\n        label: 'Specific month (choose one or many)'\n      },\n      range: {\n        label1: 'Every month between month',\n        label2: 'and month'\n      }\n    },\n    minute: {\n      every: {\n        label: 'Every minute'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'minute(s)',\n      },\n      and: {\n        label: 'Specific minute (choose one or many)'\n      },\n      range: {\n        label1: 'Every minute between minute',\n        label2: 'and minute'\n      }\n    },\n    hour: {\n      every: {\n        label: 'Every hour'\n      },\n      increment: {\n        label1: 'Every',\n        label2: 'hour(s)',\n      },\n      and: {\n        label: 'Specific hour (choose one or many)'\n      },\n      range: {\n        label1: 'Every hour between hour',\n        label2: 'and hour'\n      }\n    }\n  }\n}"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=b.Gb({type:n,selectors:[["ng-component"]],decls:40,vars:8,consts:[[1,"doc-title"],["fragment","how-to-translate",3,"routerLink"],["fragment","all-localization-properties",3,"routerLink"],["id","how-to-translate",1,"mt-4"],[1,"doc-subtitle"],["language","ts"],["language","html"],[3,"localization"],["id","all-localization-properties",1,"mt-4"]],template:function(n,e){1&n&&(b.Sb(0,"h1",0),b.oc(1," Localization\n"),b.Rb(),b.Sb(2,"p"),b.oc(3," We have default localization object that contains all visible texts.\n"),b.Rb(),b.Sb(4,"p"),b.oc(5," If you need to change some text field or select option use "),b.Sb(6,"code"),b.oc(7,"localization"),b.Rb(),b.oc(8," input to pass your version. "),b.Nb(9,"br"),b.oc(10," Your localization version will be deeply merged with the default one, allowing you to override only what you want.\n"),b.Rb(),b.Sb(11,"ul"),b.Sb(12,"li"),b.Sb(13,"a",1),b.oc(14," How to translate the cron component? "),b.Rb(),b.Rb(),b.Sb(15,"li"),b.Sb(16,"a",2),b.oc(17," All localization properties "),b.Rb(),b.Rb(),b.Rb(),b.Sb(18,"div",3),b.Sb(19,"h2",4),b.oc(20,"How to translate the cron component?"),b.Rb(),b.Sb(21,"p"),b.oc(22," Pass localization object to "),b.Sb(23,"code"),b.oc(24,"localization"),b.Rb(),b.oc(25," input to have translated texts. "),b.Nb(26,"br"),b.oc(27,' See this example of the translation of the "Seconds" tab into Ukrainian. '),b.Rb(),b.Sb(28,"app-ngx-prism",5),b.oc(29),b.Rb(),b.Sb(30,"app-ngx-prism",6),b.oc(31),b.Rb(),b.Nb(32,"quartz-cron",7),b.Rb(),b.Sb(33,"div",8),b.Sb(34,"h2",4),b.oc(35,"All localization properties"),b.Rb(),b.Sb(36,"p"),b.oc(37," Use this manifest for full localization. "),b.Rb(),b.Sb(38,"app-ngx-prism",5),b.oc(39),b.Rb(),b.Rb()),2&n&&(b.yb(13),b.fc("routerLink",b.gc(6,y)),b.yb(3),b.fc("routerLink",b.gc(7,y)),b.yb(13),b.pc(e.localizationTsExample),b.yb(2),b.pc(e.localizationHtmlExample),b.yb(1),b.fc("localization",e.secondsTabLocalization),b.yb(7),b.pc(e.fullLocalization))},directives:[i.c,h.a,s.a],encapsulation:2}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({imports:[[i.d.forChild(d)],i.d]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({imports:[[t.b,o.b,l.a,r.a,m]]}),n})()}}]);