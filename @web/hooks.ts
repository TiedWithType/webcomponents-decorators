import { EventListener } from "./events";

export const onInitDispatcher = new CustomEvent("onInit", {})

export const onInit = () => EventListener("onInit")