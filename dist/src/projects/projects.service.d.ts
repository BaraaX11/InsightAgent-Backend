import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto, UpdateProjectDto } from './dto';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: CreateProjectDto): Promise<{
        tables: {
            id: string;
            createdAt: Date;
            projectId: string;
            tableName: string;
            originalName: string;
            columns: string[];
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        tables: {
            id: string;
            createdAt: Date;
            projectId: string;
            tableName: string;
            originalName: string;
            columns: string[];
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        tables: {
            id: string;
            createdAt: Date;
            projectId: string;
            tableName: string;
            originalName: string;
            columns: string[];
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<{
        tables: {
            id: string;
            createdAt: Date;
            projectId: string;
            tableName: string;
            originalName: string;
            columns: string[];
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProjectTables(projectId: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        tableName: string;
        originalName: string;
        columns: string[];
    }[]>;
}
