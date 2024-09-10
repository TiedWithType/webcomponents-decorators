import { Service } from "/web";

@Service() export class Settings {
 static defaultImage = "/assets/fallback.jpg";
 imageUrl = "https://picsum.photos/800";
}