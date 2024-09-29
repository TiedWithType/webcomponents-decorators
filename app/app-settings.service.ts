import { Service } from "../@web/decorators";
import fallbackImage from "/assets/fallback.jpg";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 pool = 1e6; 
 baseUrl = "https://picsum.photos/seed";
 imageUrl = Settings.defaultImage;
 
 get seedUrl() {
  let seed = Math.floor(Math.random() * this.pool);
  return `${this.baseUrl}/${seed}/${this.size}`
 }
}