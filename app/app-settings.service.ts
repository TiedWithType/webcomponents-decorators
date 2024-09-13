import { Service } from "/web";

@Service() export class Settings {
 static defaultImage = "/assets/fallback.jpg";
 imageUrl = "https://picsum.photos/800";
 
 get seedUrl() {
  let seed = Math.floor(Math.random() * 100000);
  return `https://picsum.photos/seed/${seed}/800`
 }
}