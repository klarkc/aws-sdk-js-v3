import { AppflowClient } from "./AppflowClient";
import {
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "./commands/CreateConnectorProfileCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "./commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import {
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "./commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "./commands/DescribeConnectorProfilesCommand";
import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "./commands/DescribeConnectorsCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "./commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "./commands/ListConnectorEntitiesCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "./commands/UpdateConnectorProfileCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift. </p>
 *
 *
 *
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 */
export declare class Appflow extends AppflowClient {
  /**
   * <p>
   *   Creates a new connector profile associated with your AWS account. There is a soft quota of 100 connector profiles per AWS account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel.
   * </p>
   */
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorProfileCommandOutput>;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  createConnectorProfile(
    args: CreateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorProfileCommandOutput) => void
  ): void;
  /**
   * <p>
   * Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.
   *
   * </p>
   */
  createFlow(args: CreateFlowCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowCommandOutput>;
  createFlow(args: CreateFlowCommandInput, cb: (err: any, data?: CreateFlowCommandOutput) => void): void;
  createFlow(
    args: CreateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowCommandOutput) => void
  ): void;
  /**
   * <p>
   *  Enables you to delete an existing connector profile.
   * </p>
   */
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorProfileCommandOutput>;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  deleteConnectorProfile(
    args: DeleteConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorProfileCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.
   *
   * </p>
   */
  deleteFlow(args: DeleteFlowCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowCommandOutput>;
  deleteFlow(args: DeleteFlowCommandInput, cb: (err: any, data?: DeleteFlowCommandOutput) => void): void;
  deleteFlow(
    args: DeleteFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowCommandOutput) => void
  ): void;
  /**
   * <p>
   * Provides details regarding the entity used with the connector, with a description of the data model for each entity.
   * </p>
   */
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorEntityCommandOutput>;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  describeConnectorEntity(
    args: DescribeConnectorEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorEntityCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p>
   *          <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
   */
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorProfilesCommandOutput>;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  describeConnectorProfiles(
    args: DescribeConnectorProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorProfilesCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow.
   *   If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
   * </p>
   */
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectorsCommandOutput>;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  describeConnectors(
    args: DescribeConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectorsCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Provides a description of the specified flow.
   *
   * </p>
   */
  describeFlow(args: DescribeFlowCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowCommandOutput>;
  describeFlow(args: DescribeFlowCommandInput, cb: (err: any, data?: DescribeFlowCommandOutput) => void): void;
  describeFlow(
    args: DescribeFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowCommandOutput) => void
  ): void;
  /**
   * <p>
   * Fetches the execution history of the flow.
   * </p>
   */
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowExecutionRecordsCommandOutput>;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  describeFlowExecutionRecords(
    args: DescribeFlowExecutionRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowExecutionRecordsCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
   * </p>
   */
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorEntitiesCommandOutput>;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  listConnectorEntities(
    args: ListConnectorEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorEntitiesCommandOutput) => void
  ): void;
  /**
   * <p>
   * Lists all of the flows associated with your account.
   * </p>
   */
  listFlows(args: ListFlowsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowsCommandOutput>;
  listFlows(args: ListFlowsCommandInput, cb: (err: any, data?: ListFlowsCommandOutput) => void): void;
  listFlows(
    args: ListFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowsCommandOutput) => void
  ): void;
  /**
   * <p>
   * Retrieves the tags that are associated with a specified flow.
   * </p>
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   * Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.
   *
   * </p>
   */
  startFlow(args: StartFlowCommandInput, options?: __HttpHandlerOptions): Promise<StartFlowCommandOutput>;
  startFlow(args: StartFlowCommandInput, cb: (err: any, data?: StartFlowCommandOutput) => void): void;
  startFlow(
    args: StartFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFlowCommandOutput) => void
  ): void;
  /**
   * <p>
   * Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow.
   * </p>
   */
  stopFlow(args: StopFlowCommandInput, options?: __HttpHandlerOptions): Promise<StopFlowCommandOutput>;
  stopFlow(args: StopFlowCommandInput, cb: (err: any, data?: StopFlowCommandOutput) => void): void;
  stopFlow(
    args: StopFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFlowCommandOutput) => void
  ): void;
  /**
   * <p>
   *  Applies a tag to the specified flow.
   * </p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   *  Removes a tag from the specified flow.
   * </p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>
   *   Updates a given connector profile associated with your account.
   * </p>
   */
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectorProfileCommandOutput>;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  updateConnectorProfile(
    args: UpdateConnectorProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectorProfileCommandOutput) => void
  ): void;
  /**
   * <p>
   *      Updates an existing flow.
   * </p>
   */
  updateFlow(args: UpdateFlowCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFlowCommandOutput>;
  updateFlow(args: UpdateFlowCommandInput, cb: (err: any, data?: UpdateFlowCommandOutput) => void): void;
  updateFlow(
    args: UpdateFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFlowCommandOutput) => void
  ): void;
}
