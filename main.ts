import { Module } from "./web";
import { AppTitle } from "./app/app-title";
import { AppImage } from "./app/app-image";
import { AppInput } from "./app/app-input";
import { AppCounter } from "./app/app-counter";
import { AppButton } from "./app/app-button";
import { AppRoot } from "./app/app-root";

@Module([ AppTitle, AppImage, AppInput, AppCounter, AppButton, AppRoot ]) export class AppModule {}