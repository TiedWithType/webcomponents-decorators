import { Service } from "../@web/decorators";
import fallbackImage from "/assets/fallback.jpg";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 pool = 1e4;
 seed;
 baseUrl = "https://picsum.photos/seed";
 imageUrl = Settings.defaultImage;
 
 fixedUrl(seed) {
  this.seed = seed;
  return `${this.baseUrl}/${this.seed}/${this.size}`
 }
 
 get seedUrl() {
  this.seed = Math.floor(Math.random() * this.pool);
  return `${this.baseUrl}/${this.seed}/${this.size}`
 }
}