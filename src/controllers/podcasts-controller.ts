import {IncomingMessage, ServerResponse} from "http";
import {serviceLIstEpisodes} from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const defaultContent = {"Content-Type": ContentType.JSON};

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content: PodcastTransferModel = await serviceLIstEpisodes();
  
    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));
    res.end();
}


export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));
  res.end();
}