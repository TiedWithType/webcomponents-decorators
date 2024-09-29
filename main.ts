import { Module } from "./@web/decorators";
import { AppRoot } from "./app/app-root";
import { AppButton } from "./app/app-button";
import { AppCounter } from "./app/app-counter";
import { AppImage } from "./app/app-image";
import { AppSettings } from "./app/app-settings";
import { AppInput } from "./app/app-input";
import { AppTitle } from "./app/app-title";

@Module([ AppButton, AppCounter, AppImage, AppInput, AppSettings, AppTitle, AppRoot ]) export class AppModule {}