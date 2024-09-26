import { Service } from "../@web/decorators";
import fallbackImage from "/assets/fallback.jpg";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 baseUrl = "https://picsum.photos/seed";
 imageUrl = "";
 
 get seedUrl() {
  let seed = Math.floor(Math.random() * 100000);
  return `${this.baseUrl}/${seed}/${this.size}`
 }
}