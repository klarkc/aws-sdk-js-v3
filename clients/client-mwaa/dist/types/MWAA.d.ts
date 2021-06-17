import { MWAAClient } from "./MWAAClient";
import { CreateCliTokenCommandInput, CreateCliTokenCommandOutput } from "./commands/CreateCliTokenCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import { CreateWebLoginTokenCommandInput, CreateWebLoginTokenCommandOutput } from "./commands/CreateWebLoginTokenCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PublishMetricsCommandInput, PublishMetricsCommandOutput } from "./commands/PublishMetricsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Managed Workflows for Apache Airflow</fullname>
 *         <p>This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html">What Is Amazon MWAA?</a>.</p>
 */
export declare class MWAA extends MWAAClient {
    /**
     * <p>Create a CLI token to use Airflow CLI.</p>
     */
    createCliToken(args: CreateCliTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateCliTokenCommandOutput>;
    createCliToken(args: CreateCliTokenCommandInput, cb: (err: any, data?: CreateCliTokenCommandOutput) => void): void;
    createCliToken(args: CreateCliTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCliTokenCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
     */
    createEnvironment(args: CreateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateEnvironmentCommandOutput>;
    createEnvironment(args: CreateEnvironmentCommandInput, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    createEnvironment(args: CreateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEnvironmentCommandOutput) => void): void;
    /**
     * <p>Create a JWT token to be used to login to Airflow Web UI with claims based Authentication.</p>
     */
    createWebLoginToken(args: CreateWebLoginTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebLoginTokenCommandOutput>;
    createWebLoginToken(args: CreateWebLoginTokenCommandInput, cb: (err: any, data?: CreateWebLoginTokenCommandOutput) => void): void;
    createWebLoginToken(args: CreateWebLoginTokenCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWebLoginTokenCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
     */
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEnvironmentCommandOutput>;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    deleteEnvironment(args: DeleteEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
     */
    getEnvironment(args: GetEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<GetEnvironmentCommandOutput>;
    getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
    getEnvironment(args: GetEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.</p>
     */
    listEnvironments(args: ListEnvironmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListEnvironmentsCommandOutput>;
    listEnvironments(args: ListEnvironmentsCommandInput, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    listEnvironments(args: ListEnvironmentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEnvironmentsCommandOutput) => void): void;
    /**
     * <p>Lists the key-value tag pairs associated to the Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * An operation for publishing metrics from the customers to the Ops plane.
     */
    publishMetrics(args: PublishMetricsCommandInput, options?: __HttpHandlerOptions): Promise<PublishMetricsCommandOutput>;
    publishMetrics(args: PublishMetricsCommandInput, cb: (err: any, data?: PublishMetricsCommandOutput) => void): void;
    publishMetrics(args: PublishMetricsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishMetricsCommandOutput) => void): void;
    /**
     * <p>Associates key-value tag pairs to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes key-value tag pairs associated to your Amazon Managed Workflows for Apache Airflow (MWAA) environment. For example, <code>"Environment": "Staging"</code>.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
     */
    updateEnvironment(args: UpdateEnvironmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEnvironmentCommandOutput>;
    updateEnvironment(args: UpdateEnvironmentCommandInput, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
    updateEnvironment(args: UpdateEnvironmentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void): void;
}
