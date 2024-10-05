import { Service } from "../@web/decorators";
import fallbackImage from "/assets/fallback.webp";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 pool = 1e4;
 seed;
 baseUrl = "https://picsum.photos/seed";
 imageUrl = localStorage.url ??
 Settings.defaultImage;
 
 fixedUrl(seed) {
  this.seed = seed;
  const url =
  `${this.baseUrl}/${this.seed}/${this.size}`;
  
  localStorage.url = url;
  localStorage.seed = this.seed;
  
  return url;
 }
 
 get seedUrl() {
  this.seed = Math.floor(Math.random() * this.pool);
  const url =
  `${this.baseUrl}/${this.seed}/${this.size}`;
  
  localStorage.url = url;
  localStorage.seed = this.seed;
  
  return url;
 }
}