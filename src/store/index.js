import { createStore } from "vuex";

export default createStore({
	state: {
		id: "javaland2019",
		name: "New Vue3",
		url: "http://www.dukecon.org",
		homeUrl: "http://www.javaland.eu",
		events: [
			{
				id: "569574",
				start: "2019-03-19T13:00:00",
				end: "2019-03-19T13:40:00",
				title: "From EventStorming to CoDDDing ",
				abstractText:
					"To really understand what our users need so that we can build the right thing, we want to have a first-hand experience of 'real-life stories' before we model and create our software. To quote Alberto Brandolini \"it is not the domain expert's knowledge that goes into production, it is the developer's assumption of that knowledge that goes into production\". Event Storming is a visual technique that minimizes assumptions by engaging in collaborative deliberate learning across different disciplines. This helps to solve complex business problems in the most effective way.\n \nAlthough the learning of the domain helps us to understand the domain better, Event Storming can be quite an overwhelming experience. Developers can be left with the question of how to turn a few stickies on a wall into working code.\n \nJoin us in this talk in which we show the basic principles of Event Storming. We will cover the different forms of Event Storming and in which situation they best can be applied. And, we will show how you can leverage DDD (Domain-Driven Design) patterns in an Event Storming software modeling session that will ultimately result in coding TDD (Test Driven Development) style!",
				demo: true,
				simultan: false,
				veryPopular: true,
				fullyBooked: false,
				numberOfFavorites: 0,
				keywords: {
					de: [
						"Behaviour-Driven Development",
						"Design Patterns",
						"Domain-Driven Design",
						"Message-Driven Architecture"
					],
					en: [
						"Behaviour-Driven Development",
						"Design Patterns",
						"Domain-Driven Design",
						"Message-Driven Architecture"
					]
				},
				documents: {
					slides: null,
					manuscript: null,
					other: null
				},
				trackId: "4",
				audienceId: "1",
				typeId: "2",
				locationId: "22",
				speakerIds: ["382278", "382679"],
				languageId: "2"
			},
			{
				id: "575359",
				start: "2019-03-20T12:00:00",
				end: "2019-03-20T12:40:00",
				title: "Fluent API for Java 11 and beyond",
				abstractText:
					"This presentation introduces Fluent API (a.k.a. Fluent Interface) to the audience and how the API generation process can be automated using annotation processors. Fluent API is related to builder pattern, but it goes an extra mile especially when we use integrated development environment with code completion functionalities. Using fluent API the chance to use a builder is less likely and the resulting code can be more readable. Fluent API is not new. The term was coined in 2005 by Martin Fowler. Fluent API is widely used in many frameworks, like mockito or JOOQ.\n\nThe new thing that this presentation focuses on how we can create fluent API using the features available in Java 8 (default methods and lambda), Java 9 (private methods in interfaces), Java 10 (var declarations) and Java 11 extending the var declarations to lambda expressions and JVM support for nested classes.",
				demo: true,
				simultan: false,
				veryPopular: true,
				fullyBooked: false,
				numberOfFavorites: 0,
				keywords: {
					de: [
						"API",
						"Java Language Features",
						"Java 10",
						"Java 11",
						"Java 9"
					],
					en: [
						"API",
						"Java Language Features",
						"Java 10",
						"Java 11",
						"Java 9"
					]
				},
				documents: {
					slides: null,
					manuscript: null,
					other: null
				},
				trackId: "1",
				audienceId: "2",
				typeId: "2",
				locationId: "1",
				speakerIds: ["378478"],
				languageId: "2"
			},
			{
				id: "569791",
				start: "2019-03-20T12:00:00",
				end: "2019-03-20T12:40:00",
				title: "Web-API-Design in Java",
				abstractText:
					'Web-APIs sind das aktuelle Trendthema in den IT-Abteilungen. Als primärer Kommunikationspartner für Fat-, Mobil- und Web-Clients sind Web-APIs das Rückgrat moderner verteilter Anwendungen. Sind synchrone Requests via REST und GraphQL oder Push-Notifications via Server-Sent Events und WebSocket die bessere Wahl? Welches Austauschformat sollte man wählen? Wie sieht gutes "Error Handling" aus? Und was ist mit Themen wie Security und Versionierung? \n\nLebensnahe Beispiele, jede Menge Best-Practices und viel Code, der nahtlos in eigene Projekte übernommen werden kann, bilden die Grundlage für die Session.',
				demo: true,
				simultan: false,
				veryPopular: true,
				fullyBooked: false,
				numberOfFavorites: 0,
				keywords: {
					de: [],
					en: []
				},
				documents: {
					slides: null,
					manuscript: null,
					other: null
				},
				trackId: "4",
				audienceId: "3",
				typeId: "2",
				locationId: "25",
				speakerIds: ["378846"],
				languageId: "1"
			},
			{
				id: "569874",
				start: "2019-03-20T09:00:00",
				end: "2019-03-20T09:40:00",
				title: "Von relationalen Datenbanken zu Daten mit Relationen",
				abstractText:
					'Im Lauf der letzten paar Jahre zeichnete sich eine deutliche Renaissance von relationalen Datenbanken und der "Macht" von SQL ab. Relationale Datenbanken spielen ihre Stärken immer dann aus, wenn Aggregationen über größere Datenreihen gebildet (Summen, Moving-Windows, Durchschnittswerte und so weiter) oder Listen von Dingen aus großen Sets zusammengestellt werden sollen, die nur auf eine beschränkte Menge an Joins angewiesen sind.\n\nGraph-Datenbanken wie Neo4j haben aber einige Eigenschaften, die kaum ein anderer Store hat. Graph-Datenbanken sind immer dann gefragt, wenn gerichtete, komplexe Objektbäume gespeichert und auf unterschiedliche Weise abgefragt werden sollen. Objekte und ihre Beziehungen untereinander sind gleichermaßen Kernkonzepte von Neo4j. Dank Cypher, der Graph-Abfragesprache von Neo4j, lassen sich Abfragen aller Art leichtfüßig formulieren. Weitere Anwendungsfälle sind Abfragen, die Pfadsuchen durchführen, Schwerpunkte in Beziehungsnetzwerken ermitteln und vieles andere mehr.\n\nIn diesem Vortrag werde ich mit dem Datenbestand meines SQL-Fetish-Vortrags beginnen. Die Zeitreihen, die musikalische Vorlieben widerspiegeln, werden mit Neo4js ETL-Tool (Extract-Transform-Load) direkt aus der relationalen Datenbank ausgelesen und in einen gerichteten Property-Graphen transformiert. \n\nIm zweiten Schritt werden die Zuhörer Abfragen kennen lernen, die die Aggregrationen der SQL-Daten perfekt ergänzen: Können wir in 40 Minuten eine Empfehlungs-Engine auf Basis von Beziehungen von Künstlern, Ländern, Alben und Hörgewohnheiten bauen, die über die Empfehlung bekannter Online-Portale ("Kunde hört die Die Ärzte, also mag er auch Sportfreunde Stiller") hinaus geht?\n\nIm letzten Schritt wird eine Anwendung auf Basis von Spring Data Neo4j skizziert.',
				demo: true,
				simultan: false,
				veryPopular: true,
				fullyBooked: false,
				numberOfFavorites: 0,
				keywords: {
					de: [
						"Analytics",
						"Datenbank",
						"Empfehlungen",
						"NoSQL",
						"Smart Data"
					],
					en: [
						"Analytics",
						"Database",
						"Recommendations",
						"NoSQL",
						"Smart Data"
					]
				},
				documents: {
					slides: null,
					manuscript: null,
					other: null
				},
				trackId: "11",
				audienceId: "3",
				typeId: "10",
				locationId: "12",
				speakerIds: ["13598"],
				languageId: "1"
			}
		]
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {}
});
