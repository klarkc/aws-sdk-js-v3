import { MarketplaceCatalogClient } from "./MarketplaceCatalogClient";
import { CancelChangeSetCommandInput, CancelChangeSetCommandOutput } from "./commands/CancelChangeSetCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "./commands/DescribeChangeSetCommand";
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "./commands/DescribeEntityCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "./commands/ListChangeSetsCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "./commands/ListEntitiesCommand";
import { StartChangeSetCommandInput, StartChangeSetCommandOutput } from "./commands/StartChangeSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Catalog API actions allow you to manage your entities through list, describe, and update
 *             capabilities. An entity can be a product or an offer on AWS Marketplace. </p>
 *
 *         <p>You can automate your entity update process by integrating the AWS Marketplace Catalog
 *             API with your AWS Marketplace product build or deployment pipelines. You can also create
 *             your own applications on top of the Catalog API to manage your products on AWS
 *             Marketplace.</p>
 */
export declare class MarketplaceCatalog extends MarketplaceCatalogClient {
    /**
     * <p>Used to cancel an open change request. Must be sent before the status of the request
     *             changes to <code>APPLYING</code>, the final stage of completing your change request. You
     *             can describe a change during the 60-day request history retention period for API
     *             calls.</p>
     */
    cancelChangeSet(args: CancelChangeSetCommandInput, options?: __HttpHandlerOptions): Promise<CancelChangeSetCommandOutput>;
    cancelChangeSet(args: CancelChangeSetCommandInput, cb: (err: any, data?: CancelChangeSetCommandOutput) => void): void;
    cancelChangeSet(args: CancelChangeSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelChangeSetCommandOutput) => void): void;
    /**
     * <p>Provides information about a given change set.</p>
     */
    describeChangeSet(args: DescribeChangeSetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeChangeSetCommandOutput>;
    describeChangeSet(args: DescribeChangeSetCommandInput, cb: (err: any, data?: DescribeChangeSetCommandOutput) => void): void;
    describeChangeSet(args: DescribeChangeSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeChangeSetCommandOutput) => void): void;
    /**
     * <p>Returns the metadata and content of the entity.</p>
     */
    describeEntity(args: DescribeEntityCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEntityCommandOutput>;
    describeEntity(args: DescribeEntityCommandInput, cb: (err: any, data?: DescribeEntityCommandOutput) => void): void;
    describeEntity(args: DescribeEntityCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEntityCommandOutput) => void): void;
    /**
     * <p>Returns the list of change sets owned by the account being used to make the call. You
     *             can filter this list by providing any combination of <code>entityId</code>,
     *                 <code>ChangeSetName</code>, and status. If you provide more than one filter, the API
     *             operation applies a logical AND between the filters.</p>
     *
     *         <p>You can describe a change during the 60-day request history retention period for API
     *             calls.</p>
     */
    listChangeSets(args: ListChangeSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListChangeSetsCommandOutput>;
    listChangeSets(args: ListChangeSetsCommandInput, cb: (err: any, data?: ListChangeSetsCommandOutput) => void): void;
    listChangeSets(args: ListChangeSetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListChangeSetsCommandOutput) => void): void;
    /**
     * <p>Provides the list of entities of a given type.</p>
     */
    listEntities(args: ListEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesCommandOutput>;
    listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
    listEntities(args: ListEntitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
    /**
     * <p>This operation allows you to request changes for your entities. Within a single
     *             ChangeSet, you cannot start the same change type against the same entity multiple times.
     *             Additionally, when a ChangeSet is running, all the entities targeted by the different
     *             changes are locked until the ChangeSet has completed (either succeeded, cancelled, or failed). If
     *             you try to start a ChangeSet containing a change against an entity that is already
     *             locked, you will receive a <code>ResourceInUseException</code>.</p>
     *
     *         <p>For example, you cannot start the ChangeSet described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic, because it contains two changes to execute the same change
     *             type (<code>AddRevisions</code>) against the same entity
     *             (<code>entity-id@1)</code>.</p>
     *
     *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">
     *             Working with change sets</a>.</p>
     */
    startChangeSet(args: StartChangeSetCommandInput, options?: __HttpHandlerOptions): Promise<StartChangeSetCommandOutput>;
    startChangeSet(args: StartChangeSetCommandInput, cb: (err: any, data?: StartChangeSetCommandOutput) => void): void;
    startChangeSet(args: StartChangeSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartChangeSetCommandOutput) => void): void;
}
