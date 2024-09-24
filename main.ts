import { Module } from "./@web/decorators";
import { AppRoot } from "./app/app-root";
import { AppHello } from "./app/app-hello";
import { AppLogo } from "./app/app-logo";

@Module([ AppHello, AppLogo, AppRoot ]) export class AppModule {}