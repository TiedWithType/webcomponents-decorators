import { Module } from "./@web/decorators";
import { AppRoot } from "./app/app-root";
import { AppHello } from "./app/app-hello";
import { AppLogo } from "./app/app-logo";
import { AppRepoList } from "./app/app-repo-list";

@Module([ AppHello, AppLogo, AppRepoList, AppRoot ]) export class AppModule {}