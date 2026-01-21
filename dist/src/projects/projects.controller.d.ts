import { ProjectsService } from './projects.service';
import { CreateProjectDto, UpdateProjectDto } from './dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
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
    getProjectTables(id: string): Promise<{
        id: string;
        createdAt: Date;
        projectId: string;
        tableName: string;
        originalName: string;
        columns: string[];
    }[]>;
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
}
