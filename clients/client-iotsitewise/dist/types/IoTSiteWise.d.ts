import { IoTSiteWiseClient } from "./IoTSiteWiseClient";
import { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "./commands/AssociateAssetsCommand";
import { BatchAssociateProjectAssetsCommandInput, BatchAssociateProjectAssetsCommandOutput } from "./commands/BatchAssociateProjectAssetsCommand";
import { BatchDisassociateProjectAssetsCommandInput, BatchDisassociateProjectAssetsCommandOutput } from "./commands/BatchDisassociateProjectAssetsCommand";
import { BatchPutAssetPropertyValueCommandInput, BatchPutAssetPropertyValueCommandOutput } from "./commands/BatchPutAssetPropertyValueCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "./commands/CreateAccessPolicyCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "./commands/CreateAssetModelCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "./commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "./commands/DeleteAssetModelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DescribeAccessPolicyCommandInput, DescribeAccessPolicyCommandOutput } from "./commands/DescribeAccessPolicyCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand";
import { DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput } from "./commands/DescribeAssetModelCommand";
import { DescribeAssetPropertyCommandInput, DescribeAssetPropertyCommandOutput } from "./commands/DescribeAssetPropertyCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import { DescribeDefaultEncryptionConfigurationCommandInput, DescribeDefaultEncryptionConfigurationCommandOutput } from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import { DescribeGatewayCapabilityConfigurationCommandInput, DescribeGatewayCapabilityConfigurationCommandOutput } from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "./commands/DescribeGatewayCommand";
import { DescribeLoggingOptionsCommandInput, DescribeLoggingOptionsCommandOutput } from "./commands/DescribeLoggingOptionsCommand";
import { DescribePortalCommandInput, DescribePortalCommandOutput } from "./commands/DescribePortalCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput } from "./commands/DisassociateAssetsCommand";
import { GetAssetPropertyAggregatesCommandInput, GetAssetPropertyAggregatesCommandOutput } from "./commands/GetAssetPropertyAggregatesCommand";
import { GetAssetPropertyValueCommandInput, GetAssetPropertyValueCommandOutput } from "./commands/GetAssetPropertyValueCommand";
import { GetAssetPropertyValueHistoryCommandInput, GetAssetPropertyValueHistoryCommandOutput } from "./commands/GetAssetPropertyValueHistoryCommand";
import { GetInterpolatedAssetPropertyValuesCommandInput, GetInterpolatedAssetPropertyValuesCommandOutput } from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "./commands/ListAccessPoliciesCommand";
import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "./commands/ListAssetModelsCommand";
import { ListAssetRelationshipsCommandInput, ListAssetRelationshipsCommandOutput } from "./commands/ListAssetRelationshipsCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import { ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput } from "./commands/ListAssociatedAssetsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "./commands/ListProjectAssetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutDefaultEncryptionConfigurationCommandInput, PutDefaultEncryptionConfigurationCommandOutput } from "./commands/PutDefaultEncryptionConfigurationCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput } from "./commands/UpdateAccessPolicyCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import { UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput } from "./commands/UpdateAssetModelCommand";
import { UpdateAssetPropertyCommandInput, UpdateAssetPropertyCommandOutput } from "./commands/UpdateAssetPropertyCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import { UpdateGatewayCapabilityConfigurationCommandInput, UpdateGatewayCapabilityConfigurationCommandOutput } from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Welcome to the AWS IoT SiteWise API Reference. AWS IoT SiteWise is an AWS service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the AWS Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">AWS IoT SiteWise User Guide</a>. For information about AWS IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export declare class IoTSiteWise extends IoTSiteWiseClient {
    /**
     * <p>Associates a child asset with the given parent asset through a hierarchy defined in the
     *       parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    associateAssets(args: AssociateAssetsCommandInput, options?: __HttpHandlerOptions): Promise<AssociateAssetsCommandOutput>;
    associateAssets(args: AssociateAssetsCommandInput, cb: (err: any, data?: AssociateAssetsCommandOutput) => void): void;
    associateAssets(args: AssociateAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateAssetsCommandOutput) => void): void;
    /**
     * <p>Associates a group (batch) of assets with an AWS IoT SiteWise Monitor project.</p>
     */
    batchAssociateProjectAssets(args: BatchAssociateProjectAssetsCommandInput, options?: __HttpHandlerOptions): Promise<BatchAssociateProjectAssetsCommandOutput>;
    batchAssociateProjectAssets(args: BatchAssociateProjectAssetsCommandInput, cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void): void;
    batchAssociateProjectAssets(args: BatchAssociateProjectAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void): void;
    /**
     * <p>Disassociates a group (batch) of assets from an AWS IoT SiteWise Monitor project.</p>
     */
    batchDisassociateProjectAssets(args: BatchDisassociateProjectAssetsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisassociateProjectAssetsCommandOutput>;
    batchDisassociateProjectAssets(args: BatchDisassociateProjectAssetsCommandInput, cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void): void;
    batchDisassociateProjectAssets(args: BatchDisassociateProjectAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void): void;
    /**
     * <p>Sends a list of asset property values to AWS IoT SiteWise. Each value is a timestamp-quality-value
     *       (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     *          <p>To identify an asset property, you must specify one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
     *             </li>
     *             <li>
     *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
     *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
     *             </li>
     *          </ul>
     *          <important>
     *             <p>With respect to Unix epoch time, AWS IoT SiteWise accepts only TQVs that have a timestamp of no more
     *         than 7 days in the past and no more than 10 minutes in the future. AWS IoT SiteWise rejects timestamps
     *         outside of the inclusive range of [-7 days, +10 minutes] and returns a
     *           <code>TimestampOutOfRangeException</code> error.</p>
     *             <p>For each asset property, AWS IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
     *         TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>,
     *         then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p>
     *          </important>
     *          <p>AWS IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually.
     *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the
     *       <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    batchPutAssetPropertyValue(args: BatchPutAssetPropertyValueCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutAssetPropertyValueCommandOutput>;
    batchPutAssetPropertyValue(args: BatchPutAssetPropertyValueCommandInput, cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void): void;
    batchPutAssetPropertyValue(args: BatchPutAssetPropertyValueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void): void;
    /**
     * <p>Creates an access policy that grants the specified identity (AWS SSO user, AWS SSO group, or
     *       IAM user) access to the specified AWS IoT SiteWise Monitor portal or project resource.</p>
     */
    createAccessPolicy(args: CreateAccessPolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessPolicyCommandOutput>;
    createAccessPolicy(args: CreateAccessPolicyCommandInput, cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void): void;
    createAccessPolicy(args: CreateAccessPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void): void;
    /**
     * <p>Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
    createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
    createAsset(args: CreateAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
    /**
     * <p>Creates an asset model from specified property and hierarchy definitions. You create
     *       assets from asset models. With asset models, you can easily create assets of the same type
     *       that have standardized definitions. Each asset created from a model inherits the asset model's
     *       property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    createAssetModel(args: CreateAssetModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetModelCommandOutput>;
    createAssetModel(args: CreateAssetModelCommandInput, cb: (err: any, data?: CreateAssetModelCommandOutput) => void): void;
    createAssetModel(args: CreateAssetModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssetModelCommandOutput) => void): void;
    /**
     * <p>Creates a dashboard in an AWS IoT SiteWise Monitor project.</p>
     */
    createDashboard(args: CreateDashboardCommandInput, options?: __HttpHandlerOptions): Promise<CreateDashboardCommandOutput>;
    createDashboard(args: CreateDashboardCommandInput, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
    createDashboard(args: CreateDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
    /**
     * <p>Creates a gateway, which is a virtual or edge device that delivers industrial data streams
     *       from local servers to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    createGateway(args: CreateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayCommandOutput>;
    createGateway(args: CreateGatewayCommandInput, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
    createGateway(args: CreateGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
    /**
     * <p>Creates a portal, which can contain projects and dashboards. AWS IoT SiteWise Monitor uses AWS SSO or IAM
     *       to authenticate portal users and manage user permissions.</p>
     *          <note>
     *             <p>Before you can sign in to a new portal, you must add at least one identity to that
     *         portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal
     *           administrators</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
     *          </note>
     */
    createPortal(args: CreatePortalCommandInput, options?: __HttpHandlerOptions): Promise<CreatePortalCommandOutput>;
    createPortal(args: CreatePortalCommandInput, cb: (err: any, data?: CreatePortalCommandOutput) => void): void;
    createPortal(args: CreatePortalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePortalCommandOutput) => void): void;
    /**
     * <p>Creates a project in the specified portal.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Deletes an access policy that grants the specified identity access to the specified
     *       AWS IoT SiteWise Monitor resource. You can use this operation to revoke access to an AWS IoT SiteWise Monitor
     *       resource.</p>
     */
    deleteAccessPolicy(args: DeleteAccessPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessPolicyCommandOutput>;
    deleteAccessPolicy(args: DeleteAccessPolicyCommandInput, cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void): void;
    deleteAccessPolicy(args: DeleteAccessPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and
     *         models</a> in the <i>AWS IoT SiteWise User Guide</i>.
     *       </p>
     *          <note>
     *             <p>You can't delete an asset that's associated to another asset. For more information, see
     *           <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p>
     *          </note>
     */
    deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
    deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    deleteAsset(args: DeleteAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
    /**
     * <p>Deletes an asset model. This action can't be undone. You must delete all assets created
     *       from an asset model before you can delete the model. Also, you can't delete an asset model if
     *       a parent asset model exists that contains a property formula expression that depends on the
     *       asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    deleteAssetModel(args: DeleteAssetModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetModelCommandOutput>;
    deleteAssetModel(args: DeleteAssetModelCommandInput, cb: (err: any, data?: DeleteAssetModelCommandOutput) => void): void;
    deleteAssetModel(args: DeleteAssetModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssetModelCommandOutput) => void): void;
    /**
     * <p>Deletes a dashboard from AWS IoT SiteWise Monitor.</p>
     */
    deleteDashboard(args: DeleteDashboardCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDashboardCommandOutput>;
    deleteDashboard(args: DeleteDashboardCommandInput, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
    deleteDashboard(args: DeleteDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
    /**
     * <p>Deletes a gateway from AWS IoT SiteWise. When you delete a gateway, some of the gateway's files remain
     *       in your gateway's file system.</p>
     */
    deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
    deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
    deleteGateway(args: DeleteGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
    /**
     * <p>Deletes a portal from AWS IoT SiteWise Monitor.</p>
     */
    deletePortal(args: DeletePortalCommandInput, options?: __HttpHandlerOptions): Promise<DeletePortalCommandOutput>;
    deletePortal(args: DeletePortalCommandInput, cb: (err: any, data?: DeletePortalCommandOutput) => void): void;
    deletePortal(args: DeletePortalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePortalCommandOutput) => void): void;
    /**
     * <p>Deletes a project from AWS IoT SiteWise Monitor.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Describes an access policy, which specifies an identity's access to an AWS IoT SiteWise Monitor portal or
     *       project.</p>
     */
    describeAccessPolicy(args: DescribeAccessPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccessPolicyCommandOutput>;
    describeAccessPolicy(args: DescribeAccessPolicyCommandInput, cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void): void;
    describeAccessPolicy(args: DescribeAccessPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an asset.</p>
     */
    describeAsset(args: DescribeAssetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetCommandOutput>;
    describeAsset(args: DescribeAssetCommandInput, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
    describeAsset(args: DescribeAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an asset model.</p>
     */
    describeAssetModel(args: DescribeAssetModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetModelCommandOutput>;
    describeAssetModel(args: DescribeAssetModelCommandInput, cb: (err: any, data?: DescribeAssetModelCommandOutput) => void): void;
    describeAssetModel(args: DescribeAssetModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssetModelCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an asset property.</p>
     *          <note>
     *             <p>When you call this operation for an attribute property, this response includes the
     *         default attribute value that you define in the asset model. If you update the default value
     *         in the model, this operation's response includes the new default value.</p>
     *          </note>
     *          <p>This operation doesn't return the value of the asset property. To get the value of an
     *       asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
     */
    describeAssetProperty(args: DescribeAssetPropertyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetPropertyCommandOutput>;
    describeAssetProperty(args: DescribeAssetPropertyCommandInput, cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void): void;
    describeAssetProperty(args: DescribeAssetPropertyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a dashboard.</p>
     */
    describeDashboard(args: DescribeDashboardCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDashboardCommandOutput>;
    describeDashboard(args: DescribeDashboardCommandInput, cb: (err: any, data?: DescribeDashboardCommandOutput) => void): void;
    describeDashboard(args: DescribeDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDashboardCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the default encryption configuration for the
     *       AWS account in the default or specified region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
     *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    describeDefaultEncryptionConfiguration(args: DescribeDefaultEncryptionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDefaultEncryptionConfigurationCommandOutput>;
    describeDefaultEncryptionConfiguration(args: DescribeDefaultEncryptionConfigurationCommandInput, cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void): void;
    describeDefaultEncryptionConfiguration(args: DescribeDefaultEncryptionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a gateway.</p>
     */
    describeGateway(args: DescribeGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGatewayCommandOutput>;
    describeGateway(args: DescribeGatewayCommandInput, cb: (err: any, data?: DescribeGatewayCommandOutput) => void): void;
    describeGateway(args: DescribeGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGatewayCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a gateway capability configuration.
     *       Each gateway capability defines data sources for a gateway. A capability configuration
     *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
     *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
     *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
     */
    describeGatewayCapabilityConfiguration(args: DescribeGatewayCapabilityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGatewayCapabilityConfigurationCommandOutput>;
    describeGatewayCapabilityConfiguration(args: DescribeGatewayCapabilityConfigurationCommandInput, cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void): void;
    describeGatewayCapabilityConfiguration(args: DescribeGatewayCapabilityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void): void;
    /**
     * <p>Retrieves the current AWS IoT SiteWise logging options.</p>
     */
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoggingOptionsCommandOutput>;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a portal.</p>
     */
    describePortal(args: DescribePortalCommandInput, options?: __HttpHandlerOptions): Promise<DescribePortalCommandOutput>;
    describePortal(args: DescribePortalCommandInput, cb: (err: any, data?: DescribePortalCommandOutput) => void): void;
    describePortal(args: DescribePortalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePortalCommandOutput) => void): void;
    /**
     * <p>Retrieves information about a project.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Disassociates a child asset from the given parent asset through a hierarchy defined in the
     *       parent asset's model.</p>
     */
    disassociateAssets(args: DisassociateAssetsCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateAssetsCommandOutput>;
    disassociateAssets(args: DisassociateAssetsCommandInput, cb: (err: any, data?: DisassociateAssetsCommandOutput) => void): void;
    disassociateAssets(args: DisassociateAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateAssetsCommandOutput) => void): void;
    /**
     * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
     *         aggregates</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
     *          <p>To identify an asset property, you must specify one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
     *             </li>
     *             <li>
     *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
     *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
     *             </li>
     *          </ul>
     */
    getAssetPropertyAggregates(args: GetAssetPropertyAggregatesCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetPropertyAggregatesCommandOutput>;
    getAssetPropertyAggregates(args: GetAssetPropertyAggregatesCommandInput, cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void): void;
    getAssetPropertyAggregates(args: GetAssetPropertyAggregatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void): void;
    /**
     * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying
     *         current values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
     *          <p>To identify an asset property, you must specify one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
     *             </li>
     *             <li>
     *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
     *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
     *             </li>
     *          </ul>
     */
    getAssetPropertyValue(args: GetAssetPropertyValueCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetPropertyValueCommandOutput>;
    getAssetPropertyValue(args: GetAssetPropertyValueCommandInput, cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void): void;
    getAssetPropertyValue(args: GetAssetPropertyValueCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void): void;
    /**
     * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying
     *         historical values</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
     *          <p>To identify an asset property, you must specify one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
     *             </li>
     *             <li>
     *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
     *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
     *             </li>
     *          </ul>
     */
    getAssetPropertyValueHistory(args: GetAssetPropertyValueHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetAssetPropertyValueHistoryCommandOutput>;
    getAssetPropertyValueHistory(args: GetAssetPropertyValueHistoryCommandInput, cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void): void;
    getAssetPropertyValueHistory(args: GetAssetPropertyValueHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void): void;
    /**
     * <p>Get interpolated values for an asset property for a specified time interval, during a
     *       period of time. For example, you can use the this operation to return the interpolated temperature values for a wind turbine every 24 hours
     *       over a duration of 7 days.</p>
     *          <note>
     *             <p>This API isn't available in China (Beijing).</p>
     *          </note>
     *          <p>To identify an asset property, you must specify one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
     *             </li>
     *             <li>
     *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
     *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
     *             </li>
     *          </ul>
     */
    getInterpolatedAssetPropertyValues(args: GetInterpolatedAssetPropertyValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetInterpolatedAssetPropertyValuesCommandOutput>;
    getInterpolatedAssetPropertyValues(args: GetInterpolatedAssetPropertyValuesCommandInput, cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void): void;
    getInterpolatedAssetPropertyValues(args: GetInterpolatedAssetPropertyValuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of access policies for an identity (an AWS SSO user, an AWS SSO
     *       group, or an IAM user) or an AWS IoT SiteWise Monitor resource (a portal or project).</p>
     */
    listAccessPolicies(args: ListAccessPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessPoliciesCommandOutput>;
    listAccessPolicies(args: ListAccessPoliciesCommandInput, cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void): void;
    listAccessPolicies(args: ListAccessPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of summaries of all asset models.</p>
     */
    listAssetModels(args: ListAssetModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetModelsCommandOutput>;
    listAssetModels(args: ListAssetModelsCommandInput, cb: (err: any, data?: ListAssetModelsCommandOutput) => void): void;
    listAssetModels(args: ListAssetModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssetModelsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
     *       to identify an asset's root asset and all associated assets between that asset and its
     *       root.</p>
     */
    listAssetRelationships(args: ListAssetRelationshipsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetRelationshipsCommandOutput>;
    listAssetRelationships(args: ListAssetRelationshipsCommandInput, cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void): void;
    listAssetRelationships(args: ListAssetRelationshipsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of asset summaries.</p>
     *          <p>You can use this operation to do the following:</p>
     *          <ul>
     *             <li>
     *                <p>List assets based on a specific asset model.</p>
     *             </li>
     *             <li>
     *                <p>List top-level assets.</p>
     *             </li>
     *          </ul>
     *          <p>You can't use this operation to list all assets. To retrieve summaries for all of your
     *       assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all
     *       assets for each asset model.</p>
     */
    listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
    listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
    listAssets(args: ListAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of associated assets.</p>
     *          <p>You can use this operation to do the following:</p>
     *          <ul>
     *             <li>
     *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
     *             </li>
     *             <li>
     *                <p>List an asset's parent asset.</p>
     *             </li>
     *          </ul>
     */
    listAssociatedAssets(args: ListAssociatedAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociatedAssetsCommandOutput>;
    listAssociatedAssets(args: ListAssociatedAssetsCommandInput, cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void): void;
    listAssociatedAssets(args: ListAssociatedAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of dashboards for an AWS IoT SiteWise Monitor project.</p>
     */
    listDashboards(args: ListDashboardsCommandInput, options?: __HttpHandlerOptions): Promise<ListDashboardsCommandOutput>;
    listDashboards(args: ListDashboardsCommandInput, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
    listDashboards(args: ListDashboardsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of gateways.</p>
     */
    listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
    listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    listGateways(args: ListGatewaysCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of AWS IoT SiteWise Monitor portals.</p>
     */
    listPortals(args: ListPortalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPortalsCommandOutput>;
    listPortals(args: ListPortalsCommandInput, cb: (err: any, data?: ListPortalsCommandOutput) => void): void;
    listPortals(args: ListPortalsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPortalsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of assets associated with an AWS IoT SiteWise Monitor project.</p>
     */
    listProjectAssets(args: ListProjectAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectAssetsCommandOutput>;
    listProjectAssets(args: ListProjectAssetsCommandInput, cb: (err: any, data?: ListProjectAssetsCommandOutput) => void): void;
    listProjectAssets(args: ListProjectAssetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectAssetsCommandOutput) => void): void;
    /**
     * <p>Retrieves a paginated list of projects for an AWS IoT SiteWise Monitor portal.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Retrieves the list of tags for an AWS IoT SiteWise resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Sets the default encryption configuration for the AWS
     *       account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a>
     *       in the <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    putDefaultEncryptionConfiguration(args: PutDefaultEncryptionConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<PutDefaultEncryptionConfigurationCommandOutput>;
    putDefaultEncryptionConfiguration(args: PutDefaultEncryptionConfigurationCommandInput, cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void): void;
    putDefaultEncryptionConfiguration(args: PutDefaultEncryptionConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void): void;
    /**
     * <p>Sets logging options for AWS IoT SiteWise.</p>
     */
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutLoggingOptionsCommandOutput>;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Adds tags to an AWS IoT SiteWise resource. If a tag already exists for the resource, this operation
     *       updates the tag's value.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from an AWS IoT SiteWise resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing access policy that specifies an identity's access to an AWS IoT SiteWise Monitor
     *       portal or project resource.</p>
     */
    updateAccessPolicy(args: UpdateAccessPolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccessPolicyCommandOutput>;
    updateAccessPolicy(args: UpdateAccessPolicyCommandInput, cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void): void;
    updateAccessPolicy(args: UpdateAccessPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void): void;
    /**
     * <p>Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     */
    updateAsset(args: UpdateAssetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetCommandOutput>;
    updateAsset(args: UpdateAssetCommandInput, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
    updateAsset(args: UpdateAssetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
    /**
     * <p>Updates an asset model and all of the assets that were created from the model. Each asset
     *       created from the model inherits the updated asset model's property and hierarchy definitions.
     *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
     *         <i>AWS IoT SiteWise User Guide</i>.</p>
     *          <important>
     *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
     *         your asset model's properties or hierarchies, you must include their IDs and definitions in
     *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
     *             <p>If you remove a property from an asset model, AWS IoT SiteWise deletes all previous data for that
     *         property. If you remove a hierarchy definition from an asset model, AWS IoT SiteWise disassociates every
     *         asset associated with that hierarchy. You can't change the type or data type of an existing
     *         property.</p>
     *          </important>
     */
    updateAssetModel(args: UpdateAssetModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetModelCommandOutput>;
    updateAssetModel(args: UpdateAssetModelCommandInput, cb: (err: any, data?: UpdateAssetModelCommandOutput) => void): void;
    updateAssetModel(args: UpdateAssetModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssetModelCommandOutput) => void): void;
    /**
     * <p>Updates an asset property's alias and notification state.</p>
     *          <important>
     *             <p>This operation overwrites the property's existing alias and notification state. To keep
     *         your existing property's alias or notification state, you must include the existing values
     *         in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p>
     *          </important>
     */
    updateAssetProperty(args: UpdateAssetPropertyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetPropertyCommandOutput>;
    updateAssetProperty(args: UpdateAssetPropertyCommandInput, cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void): void;
    updateAssetProperty(args: UpdateAssetPropertyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void): void;
    /**
     * <p>Updates an AWS IoT SiteWise Monitor dashboard.</p>
     */
    updateDashboard(args: UpdateDashboardCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDashboardCommandOutput>;
    updateDashboard(args: UpdateDashboardCommandInput, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
    updateDashboard(args: UpdateDashboardCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
    /**
     * <p>Updates a gateway's name.</p>
     */
    updateGateway(args: UpdateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCommandOutput>;
    updateGateway(args: UpdateGatewayCommandInput, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
    updateGateway(args: UpdateGatewayCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
    /**
     * <p>Updates a gateway capability configuration or defines a new capability configuration.
     *       Each gateway capability defines data sources for a gateway. A capability configuration
     *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
     *       the AWS IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
     *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
     */
    updateGatewayCapabilityConfiguration(args: UpdateGatewayCapabilityConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCapabilityConfigurationCommandOutput>;
    updateGatewayCapabilityConfiguration(args: UpdateGatewayCapabilityConfigurationCommandInput, cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void): void;
    updateGatewayCapabilityConfiguration(args: UpdateGatewayCapabilityConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates an AWS IoT SiteWise Monitor portal.</p>
     */
    updatePortal(args: UpdatePortalCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePortalCommandOutput>;
    updatePortal(args: UpdatePortalCommandInput, cb: (err: any, data?: UpdatePortalCommandOutput) => void): void;
    updatePortal(args: UpdatePortalCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePortalCommandOutput) => void): void;
    /**
     * <p>Updates an AWS IoT SiteWise Monitor project.</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
}
