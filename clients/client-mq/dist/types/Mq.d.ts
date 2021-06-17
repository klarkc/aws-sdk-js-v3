import { MqClient } from "./MqClient";
import { CreateBrokerCommandInput, CreateBrokerCommandOutput } from "./commands/CreateBrokerCommand";
import { CreateConfigurationCommandInput, CreateConfigurationCommandOutput } from "./commands/CreateConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteBrokerCommandInput, DeleteBrokerCommandOutput } from "./commands/DeleteBrokerCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeBrokerCommandInput, DescribeBrokerCommandOutput } from "./commands/DescribeBrokerCommand";
import { DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput } from "./commands/DescribeBrokerEngineTypesCommand";
import { DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput } from "./commands/DescribeBrokerInstanceOptionsCommand";
import { DescribeConfigurationCommandInput, DescribeConfigurationCommandOutput } from "./commands/DescribeConfigurationCommand";
import { DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput } from "./commands/DescribeConfigurationRevisionCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { ListBrokersCommandInput, ListBrokersCommandOutput } from "./commands/ListBrokersCommand";
import { ListConfigurationRevisionsCommandInput, ListConfigurationRevisionsCommandOutput } from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import { UpdateBrokerCommandInput, UpdateBrokerCommandOutput } from "./commands/UpdateBrokerCommand";
import { UpdateConfigurationCommandInput, UpdateConfigurationCommandOutput } from "./commands/UpdateConfigurationCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ that makes it easy to set up and operate message brokers in the cloud. A message broker allows software applications and components to communicate using various programming languages, operating systems, and formal messaging protocols.
 */
export declare class Mq extends MqClient {
    /**
     * Creates a broker. Note: This API is asynchronous.
     */
    createBroker(args: CreateBrokerCommandInput, options?: __HttpHandlerOptions): Promise<CreateBrokerCommandOutput>;
    createBroker(args: CreateBrokerCommandInput, cb: (err: any, data?: CreateBrokerCommandOutput) => void): void;
    createBroker(args: CreateBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBrokerCommandOutput) => void): void;
    /**
     * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
     */
    createConfiguration(args: CreateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigurationCommandOutput>;
    createConfiguration(args: CreateConfigurationCommandInput, cb: (err: any, data?: CreateConfigurationCommandOutput) => void): void;
    createConfiguration(args: CreateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateConfigurationCommandOutput) => void): void;
    /**
     * Add a tag to a resource.
     */
    createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
    createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    createTags(args: CreateTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
    /**
     * Creates an ActiveMQ user.
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * Deletes a broker. Note: This API is asynchronous.
     */
    deleteBroker(args: DeleteBrokerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBrokerCommandOutput>;
    deleteBroker(args: DeleteBrokerCommandInput, cb: (err: any, data?: DeleteBrokerCommandOutput) => void): void;
    deleteBroker(args: DeleteBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBrokerCommandOutput) => void): void;
    /**
     * Removes a tag from a resource.
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * Deletes an ActiveMQ user.
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * Returns information about the specified broker.
     */
    describeBroker(args: DescribeBrokerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBrokerCommandOutput>;
    describeBroker(args: DescribeBrokerCommandInput, cb: (err: any, data?: DescribeBrokerCommandOutput) => void): void;
    describeBroker(args: DescribeBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBrokerCommandOutput) => void): void;
    /**
     * Describe available engine types and versions.
     */
    describeBrokerEngineTypes(args: DescribeBrokerEngineTypesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBrokerEngineTypesCommandOutput>;
    describeBrokerEngineTypes(args: DescribeBrokerEngineTypesCommandInput, cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void): void;
    describeBrokerEngineTypes(args: DescribeBrokerEngineTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBrokerEngineTypesCommandOutput) => void): void;
    /**
     * Describe available broker instance options.
     */
    describeBrokerInstanceOptions(args: DescribeBrokerInstanceOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBrokerInstanceOptionsCommandOutput>;
    describeBrokerInstanceOptions(args: DescribeBrokerInstanceOptionsCommandInput, cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void): void;
    describeBrokerInstanceOptions(args: DescribeBrokerInstanceOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBrokerInstanceOptionsCommandOutput) => void): void;
    /**
     * Returns information about the specified configuration.
     */
    describeConfiguration(args: DescribeConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationCommandOutput>;
    describeConfiguration(args: DescribeConfigurationCommandInput, cb: (err: any, data?: DescribeConfigurationCommandOutput) => void): void;
    describeConfiguration(args: DescribeConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationCommandOutput) => void): void;
    /**
     * Returns the specified configuration revision for the specified configuration.
     */
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeConfigurationRevisionCommandOutput>;
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void): void;
    describeConfigurationRevision(args: DescribeConfigurationRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeConfigurationRevisionCommandOutput) => void): void;
    /**
     * Returns information about an ActiveMQ user.
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * Returns a list of all brokers.
     */
    listBrokers(args: ListBrokersCommandInput, options?: __HttpHandlerOptions): Promise<ListBrokersCommandOutput>;
    listBrokers(args: ListBrokersCommandInput, cb: (err: any, data?: ListBrokersCommandOutput) => void): void;
    listBrokers(args: ListBrokersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListBrokersCommandOutput) => void): void;
    /**
     * Returns a list of all revisions for the specified configuration.
     */
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationRevisionsCommandOutput>;
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void): void;
    listConfigurationRevisions(args: ListConfigurationRevisionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationRevisionsCommandOutput) => void): void;
    /**
     * Returns a list of all configurations.
     */
    listConfigurations(args: ListConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigurationsCommandOutput>;
    listConfigurations(args: ListConfigurationsCommandInput, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    listConfigurations(args: ListConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListConfigurationsCommandOutput) => void): void;
    /**
     * Lists tags for a resource.
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * Returns a list of all ActiveMQ users.
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * Reboots a broker. Note: This API is asynchronous.
     */
    rebootBroker(args: RebootBrokerCommandInput, options?: __HttpHandlerOptions): Promise<RebootBrokerCommandOutput>;
    rebootBroker(args: RebootBrokerCommandInput, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
    rebootBroker(args: RebootBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RebootBrokerCommandOutput) => void): void;
    /**
     * Adds a pending configuration change to a broker.
     */
    updateBroker(args: UpdateBrokerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBrokerCommandOutput>;
    updateBroker(args: UpdateBrokerCommandInput, cb: (err: any, data?: UpdateBrokerCommandOutput) => void): void;
    updateBroker(args: UpdateBrokerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBrokerCommandOutput) => void): void;
    /**
     * Updates the specified configuration.
     */
    updateConfiguration(args: UpdateConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigurationCommandOutput>;
    updateConfiguration(args: UpdateConfigurationCommandInput, cb: (err: any, data?: UpdateConfigurationCommandOutput) => void): void;
    updateConfiguration(args: UpdateConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateConfigurationCommandOutput) => void): void;
    /**
     * Updates the information for an ActiveMQ user.
     */
    updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
    updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    updateUser(args: UpdateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
}
