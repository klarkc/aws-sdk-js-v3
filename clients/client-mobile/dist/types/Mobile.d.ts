import { MobileClient } from "./MobileClient";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DescribeBundleCommandInput, DescribeBundleCommandOutput } from "./commands/DescribeBundleCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { ExportBundleCommandInput, ExportBundleCommandOutput } from "./commands/ExportBundleCommand";
import { ExportProjectCommandInput, ExportProjectCommandOutput } from "./commands/ExportProjectCommand";
import { ListBundlesCommandInput, ListBundlesCommandOutput } from "./commands/ListBundlesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>
 *             AWS Mobile Service provides mobile app and website developers with capabilities
 *             required to configure AWS resources and bootstrap their developer desktop projects
 *             with the necessary SDKs, constants, tools and samples to make use of those resources.
 *         </p>
 */
export declare class Mobile extends MobileClient {
    /**
     * <p>
     *             Creates an AWS Mobile Hub project.
     *         </p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>
     *             Delets a project in AWS Mobile Hub.
     *         </p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>
     *             Get the bundle details for the requested bundle id.
     *         </p>
     */
    describeBundle(args: DescribeBundleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBundleCommandOutput>;
    describeBundle(args: DescribeBundleCommandInput, cb: (err: any, data?: DescribeBundleCommandOutput) => void): void;
    describeBundle(args: DescribeBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBundleCommandOutput) => void): void;
    /**
     * <p>
     *             Gets details about a project in AWS Mobile Hub.
     *         </p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>
     *             Generates customized software development kit (SDK) and or tool packages
     *             used to integrate mobile web or mobile app clients with backend AWS resources.
     *         </p>
     */
    exportBundle(args: ExportBundleCommandInput, options?: __HttpHandlerOptions): Promise<ExportBundleCommandOutput>;
    exportBundle(args: ExportBundleCommandInput, cb: (err: any, data?: ExportBundleCommandOutput) => void): void;
    exportBundle(args: ExportBundleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportBundleCommandOutput) => void): void;
    /**
     * <p>
     *             Exports project configuration to a snapshot which can be downloaded and shared.
     *             Note that mobile app push credentials are encrypted in exported projects, so they
     *             can only be shared successfully within the same AWS account.
     *         </p>
     */
    exportProject(args: ExportProjectCommandInput, options?: __HttpHandlerOptions): Promise<ExportProjectCommandOutput>;
    exportProject(args: ExportProjectCommandInput, cb: (err: any, data?: ExportProjectCommandOutput) => void): void;
    exportProject(args: ExportProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ExportProjectCommandOutput) => void): void;
    /**
     * <p>
     *             List all available bundles.
     *         </p>
     */
    listBundles(args: ListBundlesCommandInput, options?: __HttpHandlerOptions): Promise<ListBundlesCommandOutput>;
    listBundles(args: ListBundlesCommandInput, cb: (err: any, data?: ListBundlesCommandOutput) => void): void;
    listBundles(args: ListBundlesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBundlesCommandOutput) => void): void;
    /**
     * <p>
     *             Lists projects in AWS Mobile Hub.
     *         </p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>
     *             Update an existing project.
     *         </p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
}
