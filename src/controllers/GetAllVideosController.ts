import { Request, Response } from 'express';
import { GetAllVideosService } from '../services/GetAllVideosService';

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideosService();

    const videos = await service.execute();

    if(videos instanceof Error) {
      return response.status(400).json(videos.message);
    }

    return response.json(videos);
  }
}