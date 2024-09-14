import { Service } from "/web";
import fallbackImage from "/assets/fallback.jpg";

@Service() export class Settings {
 static defaultImage = fallbackImage;
 
 size = 1024;
 imageUrl = "";// = "https://picsum.photos/800";
 
 get seedUrl() {
  let seed = Math.floor(Math.random() * 100000);
  return `https://picsum.photos/seed/${seed}/${this.size}`
 }
}