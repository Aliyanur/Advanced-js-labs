## SNIPPET_01
Pattern Family: Creational
Pattern: Singleton
Evidence:
if ( DatabaseConnection . _instance ) { return DatabaseConnection . _instance ;}
Book Reference: Ch.6 Creational; Ch. 7 Singleton
Reasoning: This code allow only one instance of class. Constructor block new objects if instance already exist. This is creational pattern because it control object creation.

## SNIPPET_02
Pattern Family: Behavioral
Pattern: Observer
Evidence:
subscribe(), publish()
Book Reference: Ch.6 Behavioral; Ch. 7 Observer
Reasoning: EventBus notify subscribers when event happen. Sender does not knoe receivers. This focus on communication, so it is behavioral.

## SNIPPET_03
Pattern Family: Structural
Pattern: Facade
Evidence:
login(), { this._auth; this._repo, this._logger; }
Book Reference: Ch.6 Structural; Ch. 7 Facade
Reasoning: One method hide many sybsystem calls. Client use simple interface. This is structural because it orgabize object interaction.

## SNIPPET_04
Pattern Family: Creational
Pattern: Factory Method
Evidence:
function createNotifier ( type ) switch ( type )
Book Reference: Ch.6 Creational, GoF Table
Reasoning: Object is created based on type. Client does not use new directly. This match creational family.

## SNIPPET_05
Pattern Family: Structural
Pattern: Decorator
Evidence:
this . _logger . log(...)
Book Reference: Ch.6 Structural; Ch.7 Decorator
Reasoning: Object is wrapped to add behavior without change original class. This is structural pattern using composition.

## SNIPPET_06
Pattern Family: Creational
Pattern: Prototype
Evidence:
Object .getPrototypeOf ( car ) === vehiclePrototype
Book Reference: Ch.6 Creational; Ch.7 Prototype
Reasoning: Object are created by cloning prototype This control creation proces, do it is creational.

## SNIPPET_07
Pattern Family: Behavioral
Pattern: Chain of Responsibility
Evidence:
this.next.handle(ticket)
Book Reference: Ch.6 Behavioral; GoF Table
Reasoning: Request move through chain of handlers. Each handler decide to process or pass. This is behavioral pattern.

## SNIPPET_08
Pattern Family: Behavioral
Pattern: Command
Evidence:
execute(), undo()
Book Reference: Ch.6 Creational; Ch.7 Command
Reasoning: Action is stored as object and can be undone. Invoker not knoe action details. This is behavioral.

## SNIPPET_09
Pattern Family: Structural
Pattern: Flyweight
Evidence:
TreeTypeFactory . get(...)
Book Reference: Ch.6 Structural; Ch.7 Flyweight
Reasoning: Shared objects reduce memory usage. Intrinsic state is reused. This is structural pattern.

## SNIPPET_10
Pattern Family: Behavioral
Pattern: Mediator
Evidence:
room.send(...)
Book Reference: Ch.6 Behavioral; Ch.7 Mediator
Reasoning: ChatRoom control communication between users. Users do not talk directly. This is Behavioral.