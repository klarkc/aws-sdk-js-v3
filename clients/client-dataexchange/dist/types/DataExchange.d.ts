import { DataExchangeClient } from "./DataExchangeClient";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "./commands/CreateRevisionCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "./commands/DeleteRevisionCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "./commands/GetDataSetCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import { ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput } from "./commands/ListDataSetRevisionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "./commands/ListRevisionAssetsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "./commands/UpdateRevisionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access file-based data set in the AWS Cloud.</p><p>As a subscriber, you can view and access the data sets that you have an entitlement to through a subscription. You can use the APIS to download or copy your entitled data sets to Amazon S3 for use across a variety of AWS analytics and machine learning services.</p><p>As a provider, you can create and manage your data sets that you would like to publish to a product. Being able to package and provide your data sets into products requires a few steps to determine eligibility. For more information, visit the AWS Data Exchange User Guide.</p><p>A data set is a collection of data that can be changed or updated over time. Data sets can be updated using revisions, which represent a new version or incremental change to a data set.  A revision contains one or more assets. An asset in AWS Data Exchange is a piece of data that can be stored as an Amazon S3 object. The asset can be a structured data file, an image file, or some other data file. Jobs are asynchronous import or export operations used to create or copy assets.</p>
 */
export declare class DataExchange extends DataExchangeClient {
    /**
     * <p>This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.</p>
     */
    cancelJob(args: CancelJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelJobCommandOutput>;
    cancelJob(args: CancelJobCommandInput, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    cancelJob(args: CancelJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelJobCommandOutput) => void): void;
    /**
     * <p>This operation creates a data set.</p>
     */
    createDataSet(args: CreateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSetCommandOutput>;
    createDataSet(args: CreateDataSetCommandInput, cb: (err: any, data?: CreateDataSetCommandOutput) => void): void;
    createDataSet(args: CreateDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSetCommandOutput) => void): void;
    /**
     * <p>This operation creates a job.</p>
     */
    createJob(args: CreateJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateJobCommandOutput>;
    createJob(args: CreateJobCommandInput, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    createJob(args: CreateJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateJobCommandOutput) => void): void;
    /**
     * <p>This operation creates a revision for a data set.</p>
     */
    createRevision(args: CreateRevisionCommandInput, options?: __HttpHandlerOptions): Promise<CreateRevisionCommandOutput>;
    createRevision(args: CreateRevisionCommandInput, cb: (err: any, data?: CreateRevisionCommandOutput) => void): void;
    createRevision(args: CreateRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRevisionCommandOutput) => void): void;
    /**
     * <p>This operation deletes an asset.</p>
     */
    deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
    deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    deleteAsset(args: DeleteAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    /**
     * <p>This operation deletes a data set.</p>
     */
    deleteDataSet(args: DeleteDataSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSetCommandOutput>;
    deleteDataSet(args: DeleteDataSetCommandInput, cb: (err: any, data?: DeleteDataSetCommandOutput) => void): void;
    deleteDataSet(args: DeleteDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataSetCommandOutput) => void): void;
    /**
     * <p>This operation deletes a revision.</p>
     */
    deleteRevision(args: DeleteRevisionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRevisionCommandOutput>;
    deleteRevision(args: DeleteRevisionCommandInput, cb: (err: any, data?: DeleteRevisionCommandOutput) => void): void;
    deleteRevision(args: DeleteRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRevisionCommandOutput) => void): void;
    /**
     * <p>This operation returns information about an asset.</p>
     */
    getAsset(args: GetAssetCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetCommandOutput>;
    getAsset(args: GetAssetCommandInput, cb: (err: any, data?: GetAssetCommandOutput) => void): void;
    getAsset(args: GetAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssetCommandOutput) => void): void;
    /**
     * <p>This operation returns information about a data set.</p>
     */
    getDataSet(args: GetDataSetCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSetCommandOutput>;
    getDataSet(args: GetDataSetCommandInput, cb: (err: any, data?: GetDataSetCommandOutput) => void): void;
    getDataSet(args: GetDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataSetCommandOutput) => void): void;
    /**
     * <p>This operation returns information about a job.</p>
     */
    getJob(args: GetJobCommandInput, options?: __HttpHandlerOptions): Promise<GetJobCommandOutput>;
    getJob(args: GetJobCommandInput, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    getJob(args: GetJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobCommandOutput) => void): void;
    /**
     * <p>This operation returns information about a revision.</p>
     */
    getRevision(args: GetRevisionCommandInput, options?: __HttpHandlerOptions): Promise<GetRevisionCommandOutput>;
    getRevision(args: GetRevisionCommandInput, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
    getRevision(args: GetRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRevisionCommandOutput) => void): void;
    /**
     * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
     */
    listDataSetRevisions(args: ListDataSetRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSetRevisionsCommandOutput>;
    listDataSetRevisions(args: ListDataSetRevisionsCommandInput, cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void): void;
    listDataSetRevisions(args: ListDataSetRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSetRevisionsCommandOutput) => void): void;
    /**
     * <p>This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.</p>
     */
    listDataSets(args: ListDataSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSetsCommandOutput>;
    listDataSets(args: ListDataSetsCommandInput, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
    listDataSets(args: ListDataSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSetsCommandOutput) => void): void;
    /**
     * <p>This operation lists your jobs sorted by CreatedAt in descending order.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>This operation lists a revision's assets sorted alphabetically in descending order.</p>
     */
    listRevisionAssets(args: ListRevisionAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListRevisionAssetsCommandOutput>;
    listRevisionAssets(args: ListRevisionAssetsCommandInput, cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void): void;
    listRevisionAssets(args: ListRevisionAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRevisionAssetsCommandOutput) => void): void;
    /**
     * <p>This operation lists the tags on the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>This operation starts a job.</p>
     */
    startJob(args: StartJobCommandInput, options?: __HttpHandlerOptions): Promise<StartJobCommandOutput>;
    startJob(args: StartJobCommandInput, cb: (err: any, data?: StartJobCommandOutput) => void): void;
    startJob(args: StartJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartJobCommandOutput) => void): void;
    /**
     * <p>This operation tags a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>This operation removes one or more tags from a resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>This operation updates an asset.</p>
     */
    updateAsset(args: UpdateAssetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetCommandOutput>;
    updateAsset(args: UpdateAssetCommandInput, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
    updateAsset(args: UpdateAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
    /**
     * <p>This operation updates a data set.</p>
     */
    updateDataSet(args: UpdateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSetCommandOutput>;
    updateDataSet(args: UpdateDataSetCommandInput, cb: (err: any, data?: UpdateDataSetCommandOutput) => void): void;
    updateDataSet(args: UpdateDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSetCommandOutput) => void): void;
    /**
     * <p>This operation updates a revision.</p>
     */
    updateRevision(args: UpdateRevisionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRevisionCommandOutput>;
    updateRevision(args: UpdateRevisionCommandInput, cb: (err: any, data?: UpdateRevisionCommandOutput) => void): void;
    updateRevision(args: UpdateRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRevisionCommandOutput) => void): void;
}
