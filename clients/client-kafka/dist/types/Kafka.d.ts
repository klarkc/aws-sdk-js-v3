import { KafkaClient } from "./KafkaClient";
import { BatchAssociateScramSecretCommandInput, BatchAssociateScramSecretCommandOutput } from "./commands/BatchAssociateScramSecretCommand";
import { BatchDisassociateScramSecretCommandInput, BatchDisassociateScramSecretCommandOutput } from "./commands/BatchDisassociateScramSecretCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateConfigurationCommandInput, CreateConfigurationCommandOutput } from "./commands/CreateConfigurationCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteConfigurationCommandInput, DeleteConfigurationCommandOutput } from "./commands/DeleteConfigurationCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import { DescribeClusterOperationCommandInput, DescribeClusterOperationCommandOutput } from "./commands/DescribeClusterOperationCommand";
import { DescribeConfigurationCommandInput, DescribeConfigurationCommandOutput } from "./commands/DescribeConfigurationCommand";
import { DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput } from "./commands/DescribeConfigurationRevisionCommand";
import { GetBootstrapBrokersCommandInput, GetBootstrapBrokersCommandOutput } from "./commands/GetBootstrapBrokersCommand";
import { GetCompatibleKafkaVersionsCommandInput, GetCompatibleKafkaVersionsCommandOutput } from "./commands/GetCompatibleKafkaVersionsCommand";
import { ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput } from "./commands/ListClusterOperationsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput } from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "./commands/ListScramSecretsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput } from "./commands/UpdateBrokerCountCommand";
import { UpdateBrokerStorageCommandInput, UpdateBrokerStorageCommandOutput } from "./commands/UpdateBrokerStorageCommand";
import { UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput } from "./commands/UpdateBrokerTypeCommand";
import { UpdateClusterConfigurationCommandInput, UpdateClusterConfigurationCommandOutput } from "./commands/UpdateClusterConfigurationCommand";
import { UpdateClusterKafkaVersionCommandInput, UpdateClusterKafkaVersionCommandOutput } from "./commands/UpdateClusterKafkaVersionCommand";
import { UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput } from "./commands/UpdateConfigurationCommand";
import { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "./commands/UpdateMonitoringCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export declare class Kafka extends KafkaClient {
    /**
     * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
     */
    batchAssociateScramSecret(args: BatchAssociateScramSecretCommandInput, options?: __HttpHandlerOptions): Promise<BatchAssociateScramSecretCommandOutput>;
    batchAssociateScramSecret(args: BatchAssociateScramSecretCommandInput, cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void): void;
    batchAssociateScramSecret(args: BatchAssociateScramSecretCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchAssociateScramSecretCommandOutput) => void): void;
    /**
     * <p>Disassociates one or more Scram Secrets from an Amazon MSK cluster.</p>
     */
    batchDisassociateScramSecret(args: BatchDisassociateScramSecretCommandInput, options?: __HttpHandlerOptions): Promise<BatchDisassociateScramSecretCommandOutput>;
    batchDisassociateScramSecret(args: BatchDisassociateScramSecretCommandInput, cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void): void;
    batchDisassociateScramSecret(args: BatchDisassociateScramSecretCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDisassociateScramSecretCommandOutput) => void): void;
    /**
     * <p>Creates a new MSK cluster.</p>
     */
    createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
    createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    createCluster(args: CreateClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
    /**
     * <p>Creates a new MSK configuration.</p>
     */
    createConfiguration(args: CreateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationCommandOutput>;
    createConfiguration(args: CreateConfigurationCommandInput, cb: (err: any, data?: CreateConfigurationCommandOutput) => void): void;
    createConfiguration(args: CreateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the MSK cluster specified by the Amazon Resource Name (ARN) in the request.</p>
     */
    deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
    deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    deleteCluster(args: DeleteClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
    /**
     * <p>Deletes an MSK Configuration.</p>
     */
    deleteConfiguration(args: DeleteConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigurationCommandOutput>;
    deleteConfiguration(args: DeleteConfigurationCommandInput, cb: (err: any, data?: DeleteConfigurationCommandOutput) => void): void;
    deleteConfiguration(args: DeleteConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
     */
    describeCluster(args: DescribeClusterCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterCommandOutput>;
    describeCluster(args: DescribeClusterCommandInput, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    describeCluster(args: DescribeClusterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterCommandOutput) => void): void;
    /**
     * <p>Returns a description of the cluster operation specified by the ARN.</p>
     */
    describeClusterOperation(args: DescribeClusterOperationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeClusterOperationCommandOutput>;
    describeClusterOperation(args: DescribeClusterOperationCommandInput, cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void): void;
    describeClusterOperation(args: DescribeClusterOperationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeClusterOperationCommandOutput) => void): void;
    /**
     * <p>Returns a description of this MSK configuration.</p>
     */
    describeConfiguration(args: DescribeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationCommandOutput>;
    describeConfiguration(args: DescribeConfigurationCommandInput, cb: (err: any, data?: DescribeConfigurationCommandOutput) => void): void;
    describeConfiguration(args: DescribeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationCommandOutput) => void): void;
    /**
     * <p>Returns a description of this revision of the configuration.</p>
     */
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationRevisionCommandOutput>;
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void): void;
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void): void;
    /**
     * <p>A list of brokers that a client application can use to bootstrap.</p>
     */
    getBootstrapBrokers(args: GetBootstrapBrokersCommandInput, options?: __HttpHandlerOptions): Promise<GetBootstrapBrokersCommandOutput>;
    getBootstrapBrokers(args: GetBootstrapBrokersCommandInput, cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void): void;
    getBootstrapBrokers(args: GetBootstrapBrokersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBootstrapBrokersCommandOutput) => void): void;
    /**
     * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
     */
    getCompatibleKafkaVersions(args: GetCompatibleKafkaVersionsCommandInput, options?: __HttpHandlerOptions): Promise<GetCompatibleKafkaVersionsCommandOutput>;
    getCompatibleKafkaVersions(args: GetCompatibleKafkaVersionsCommandInput, cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void): void;
    getCompatibleKafkaVersions(args: GetCompatibleKafkaVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCompatibleKafkaVersionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
     */
    listClusterOperations(args: ListClusterOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListClusterOperationsCommandOutput>;
    listClusterOperations(args: ListClusterOperationsCommandInput, cb: (err: any, data?: ListClusterOperationsCommandOutput) => void): void;
    listClusterOperations(args: ListClusterOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClusterOperationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the MSK clusters in the current Region.</p>
     */
    listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
    listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    listClusters(args: ListClustersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the MSK configurations in this Region.</p>
     */
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationRevisionsCommandOutput>;
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void): void;
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of all the MSK configurations in this Region.</p>
     */
    listConfigurations(args: ListConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationsCommandOutput>;
    listConfigurations(args: ListConfigurationsCommandInput, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    listConfigurations(args: ListConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of Kafka versions.</p>
     */
    listKafkaVersions(args: ListKafkaVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListKafkaVersionsCommandOutput>;
    listKafkaVersions(args: ListKafkaVersionsCommandInput, cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void): void;
    listKafkaVersions(args: ListKafkaVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListKafkaVersionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the broker nodes in the cluster.</p>
     */
    listNodes(args: ListNodesCommandInput, options?: __HttpHandlerOptions): Promise<ListNodesCommandOutput>;
    listNodes(args: ListNodesCommandInput, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
    listNodes(args: ListNodesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNodesCommandOutput) => void): void;
    /**
     * <p>Returns a list of the Scram Secrets associated with an Amazon MSK cluster.</p>
     */
    listScramSecrets(args: ListScramSecretsCommandInput, options?: __HttpHandlerOptions): Promise<ListScramSecretsCommandOutput>;
    listScramSecrets(args: ListScramSecretsCommandInput, cb: (err: any, data?: ListScramSecretsCommandOutput) => void): void;
    listScramSecrets(args: ListScramSecretsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListScramSecretsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the tags associated with the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * Reboots brokers.
     */
    rebootBroker(args: RebootBrokerCommandInput, options?: __HttpHandlerOptions): Promise<RebootBrokerCommandOutput>;
    rebootBroker(args: RebootBrokerCommandInput, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
    rebootBroker(args: RebootBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
    /**
     * <p>Adds tags to the specified MSK resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the tags associated with the keys that are provided in the query.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the number of broker nodes in the cluster.</p>
     */
    updateBrokerCount(args: UpdateBrokerCountCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBrokerCountCommandOutput>;
    updateBrokerCount(args: UpdateBrokerCountCommandInput, cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void): void;
    updateBrokerCount(args: UpdateBrokerCountCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBrokerCountCommandOutput) => void): void;
    /**
     * <p>Updates the EBS storage associated with MSK brokers.</p>
     */
    updateBrokerStorage(args: UpdateBrokerStorageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBrokerStorageCommandOutput>;
    updateBrokerStorage(args: UpdateBrokerStorageCommandInput, cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void): void;
    updateBrokerStorage(args: UpdateBrokerStorageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBrokerStorageCommandOutput) => void): void;
    /**
     * <p>Updates EC2 instance type.</p>
     */
    updateBrokerType(args: UpdateBrokerTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBrokerTypeCommandOutput>;
    updateBrokerType(args: UpdateBrokerTypeCommandInput, cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void): void;
    updateBrokerType(args: UpdateBrokerTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBrokerTypeCommandOutput) => void): void;
    /**
     * <p>Updates the cluster with the configuration that is specified in the request body.</p>
     */
    updateClusterConfiguration(args: UpdateClusterConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterConfigurationCommandOutput>;
    updateClusterConfiguration(args: UpdateClusterConfigurationCommandInput, cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void): void;
    updateClusterConfiguration(args: UpdateClusterConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the Apache Kafka version for the cluster.</p>
     */
    updateClusterKafkaVersion(args: UpdateClusterKafkaVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterKafkaVersionCommandOutput>;
    updateClusterKafkaVersion(args: UpdateClusterKafkaVersionCommandInput, cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void): void;
    updateClusterKafkaVersion(args: UpdateClusterKafkaVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateClusterKafkaVersionCommandOutput) => void): void;
    /**
     * <p>Updates an MSK configuration.</p>
     */
    updateConfiguration(args: UpdateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationCommandOutput>;
    updateConfiguration(args: UpdateConfigurationCommandInput, cb: (err: any, data?: UpdateConfigurationCommandOutput) => void): void;
    updateConfiguration(args: UpdateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationCommandOutput) => void): void;
    /**
     * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
     */
    updateMonitoring(args: UpdateMonitoringCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMonitoringCommandOutput>;
    updateMonitoring(args: UpdateMonitoringCommandInput, cb: (err: any, data?: UpdateMonitoringCommandOutput) => void): void;
    updateMonitoring(args: UpdateMonitoringCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMonitoringCommandOutput) => void): void;
}
