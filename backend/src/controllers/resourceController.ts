import { Request, Response } from 'express';
import { prisma } from '../config/db.js';
import { AuthenticatedRequest } from '../types/auth.js';

/**
 * GET /api/resources
 * Query study resources (Formulas, Textbooks, PYQ sheets)
 */
export const getResources = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { category, standard, stream, subject } = req.query as {
      category?: string;
      standard?: string;
      stream?: string;
      subject?: string;
    };

    const whereClause: any = {};
    if (category && category !== 'all') whereClause.category = category;
    if (standard && standard !== 'all') whereClause.standard = standard;
    if (stream && stream !== 'all') whereClause.stream = stream;
    if (subject && subject !== 'all') whereClause.subject = subject;

    const resources = await prisma.studyResource.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ success: true, resources });
  } catch (error: any) {
    console.error('Get Resources Error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch study resources' });
  }
};

/**
 * GET /api/resources/:id
 */
export const getResourceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const resource = await prisma.studyResource.findUnique({
      where: { id },
    });

    if (!resource) {
      res.status(404).json({ success: false, message: 'Resource not found' });
      return;
    }

    res.status(200).json({ success: true, resource });
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Failed to fetch resource' });
  }
};