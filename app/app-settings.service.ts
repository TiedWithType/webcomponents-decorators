import { Service } from "../@web/decorators";
import fallbackImage from "/assets/fallback.webp";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 pool = 1e4;
 seed = 0;
 baseUrl = "https://picsum.photos/seed";
 imageUrl = localStorage.url ||
 Settings.defaultImage;
 
 fixedUrl(seed) {
  if (this.size > 4096) {
   this.size = 1024;
  }
  
  seed && (this.seed = seed);
  const url =
  `${this.baseUrl}/${this.seed}/${this.size}.webp`;

  localStorage.seed = this.seed;
  
  return url;
 }
 
 get seedUrl() {
  if (this.size > 4096) {
   this.size = 1024;
  }
  
  this.seed = Math.floor(Math.random() * this.pool);
  const url =
  `${this.baseUrl}/${this.seed}/${this.size}.webp`;

  localStorage.seed = this.seed;
  
  return url;
 }
}