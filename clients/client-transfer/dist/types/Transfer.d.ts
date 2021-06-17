import { TransferClient } from "./TransferClient";
import { CreateAccessCommandInput, CreateAccessCommandOutput } from "./commands/CreateAccessCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "./commands/DeleteAccessCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "./commands/DeleteServerCommand";
import { DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput } from "./commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "./commands/DescribeAccessCommand";
import { DescribeSecurityPolicyCommandInput, DescribeSecurityPolicyCommandOutput } from "./commands/DescribeSecurityPolicyCommand";
import { DescribeServerCommandInput, DescribeServerCommandOutput } from "./commands/DescribeServerCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "./commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "./commands/ListAccessesCommand";
import { ListSecurityPoliciesCommandInput, ListSecurityPoliciesCommandOutput } from "./commands/ListSecurityPoliciesCommand";
import { ListServersCommandInput, ListServersCommandOutput } from "./commands/ListServersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "./commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "./commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput } from "./commands/TestIdentityProviderCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "./commands/UpdateAccessCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "./commands/UpdateServerCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Transfer Family is a fully managed service that enables the transfer of files over the
 *       File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH)
 *       File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon
 *       S3). AWS helps you seamlessly migrate your file transfer workflows to AWS Transfer Family by
 *       integrating with existing authentication systems, and providing DNS routing with Amazon Route
 *       53 so nothing changes for your customers and partners, or their applications. With your data
 *       in Amazon S3, you can use it with AWS services for processing, analytics, machine learning,
 *       and archiving. Getting started with AWS Transfer Family is easy since there is no
 *       infrastructure to buy and set up.</p>
 */
export declare class Transfer extends TransferClient {
    /**
     * <p>Used by administrators to choose which groups in the directory should have access to
     *       upload and download files over the enabled protocols using AWS Transfer Family. For example, a
     *       Microsoft Active Directory might contain 50,000 users, but only a small fraction might need
     *       the ability to transfer files to the server. An administrator can use
     *         <code>CreateAccess</code> to limit the access to the correct set of users who need this
     *       ability.</p>
     */
    createAccess(args: CreateAccessCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccessCommandOutput>;
    createAccess(args: CreateAccessCommandInput, cb: (err: any, data?: CreateAccessCommandOutput) => void): void;
    createAccess(args: CreateAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAccessCommandOutput) => void): void;
    /**
     * <p>Instantiates an auto-scaling virtual server based on the selected file transfer protocol
     *       in AWS. When you make updates to your file transfer protocol-enabled server or when you work
     *       with users, use the service-generated <code>ServerId</code> property that is assigned to the
     *       newly created server.</p>
     */
    createServer(args: CreateServerCommandInput, options?: __HttpHandlerOptions): Promise<CreateServerCommandOutput>;
    createServer(args: CreateServerCommandInput, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
    createServer(args: CreateServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateServerCommandOutput) => void): void;
    /**
     * <p>Creates a user and associates them with an existing file transfer protocol-enabled server.
     *       You can only create and associate users with servers that have the
     *         <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for
     *         <code>CreateUser</code>, you can specify the user name, set the home directory, store the
     *       user's public key, and assign the user's AWS Identity and Access Management (IAM)
     *       role. You can also optionally add a scope-down policy, and assign metadata with tags that can
     *       be used to group and search for users.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Allows you to delete the access specified in the <code>ServerID</code> and
     *       <code>ExternalID</code> parameters.</p>
     */
    deleteAccess(args: DeleteAccessCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAccessCommandOutput>;
    deleteAccess(args: DeleteAccessCommandInput, cb: (err: any, data?: DeleteAccessCommandOutput) => void): void;
    deleteAccess(args: DeleteAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAccessCommandOutput) => void): void;
    /**
     * <p>Deletes the file transfer protocol-enabled server that you specify.</p>
     *
     *          <p>No response returns from this operation.</p>
     */
    deleteServer(args: DeleteServerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServerCommandOutput>;
    deleteServer(args: DeleteServerCommandInput, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
    deleteServer(args: DeleteServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServerCommandOutput) => void): void;
    /**
     * <p>Deletes a user's Secure Shell (SSH) public key.</p>
     *
     *          <p>No response is returned from this operation.</p>
     */
    deleteSshPublicKey(args: DeleteSshPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSshPublicKeyCommandOutput>;
    deleteSshPublicKey(args: DeleteSshPublicKeyCommandInput, cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void): void;
    deleteSshPublicKey(args: DeleteSshPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSshPublicKeyCommandOutput) => void): void;
    /**
     * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p>
     *
     *          <p>No response returns from this operation.</p>
     *
     *          <note>
     *             <p>When you delete a user from a server, the user's information is lost.</p>
     *          </note>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
     *       server, as identified by its <code>ServerId</code> property and its
     *       <code>ExternalID</code>.</p>
     *
     *          <p>The response from this call returns the properties of the access that is associated with
     *       the <code>ServerId</code> value that was specified.</p>
     */
    describeAccess(args: DescribeAccessCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccessCommandOutput>;
    describeAccess(args: DescribeAccessCommandInput, cb: (err: any, data?: DescribeAccessCommandOutput) => void): void;
    describeAccess(args: DescribeAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccessCommandOutput) => void): void;
    /**
     * <p>Describes the security policy that is attached to your file transfer protocol-enabled
     *       server. The response contains a description of the security policy's properties. For more
     *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
     *         policies</a>.</p>
     */
    describeSecurityPolicy(args: DescribeSecurityPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSecurityPolicyCommandOutput>;
    describeSecurityPolicy(args: DescribeSecurityPolicyCommandInput, cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void): void;
    describeSecurityPolicy(args: DescribeSecurityPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSecurityPolicyCommandOutput) => void): void;
    /**
     * <p>Describes a file transfer protocol-enabled server that you specify by passing the
     *         <code>ServerId</code> parameter.</p>
     *
     *          <p>The response contains a description of a server's properties. When you set
     *         <code>EndpointType</code> to VPC, the response will contain the
     *       <code>EndpointDetails</code>.</p>
     */
    describeServer(args: DescribeServerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServerCommandOutput>;
    describeServer(args: DescribeServerCommandInput, cb: (err: any, data?: DescribeServerCommandOutput) => void): void;
    describeServer(args: DescribeServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServerCommandOutput) => void): void;
    /**
     * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as
     *       identified by its <code>ServerId</code> property.</p>
     *
     *          <p>The response from this call returns the properties of the user associated with the
     *         <code>ServerId</code> value that was specified.</p>
     */
    describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
    describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    describeUser(args: DescribeUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
    /**
     * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
     *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
     *       identified by <code>ServerId</code>.</p>
     *
     *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
     *       the name of the <code>SshPublicKeyId</code>.</p>
     */
    importSshPublicKey(args: ImportSshPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<ImportSshPublicKeyCommandOutput>;
    importSshPublicKey(args: ImportSshPublicKeyCommandInput, cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void): void;
    importSshPublicKey(args: ImportSshPublicKeyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportSshPublicKeyCommandOutput) => void): void;
    /**
     * <p>Lists the details for all the accesses you have on your server.</p>
     */
    listAccesses(args: ListAccessesCommandInput, options?: __HttpHandlerOptions): Promise<ListAccessesCommandOutput>;
    listAccesses(args: ListAccessesCommandInput, cb: (err: any, data?: ListAccessesCommandOutput) => void): void;
    listAccesses(args: ListAccessesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAccessesCommandOutput) => void): void;
    /**
     * <p>Lists the security policies that are attached to your file transfer protocol-enabled
     *       servers.</p>
     */
    listSecurityPolicies(args: ListSecurityPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListSecurityPoliciesCommandOutput>;
    listSecurityPolicies(args: ListSecurityPoliciesCommandInput, cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void): void;
    listSecurityPolicies(args: ListSecurityPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSecurityPoliciesCommandOutput) => void): void;
    /**
     * <p>Lists the file transfer protocol-enabled servers that are associated with your AWS
     *       account.</p>
     */
    listServers(args: ListServersCommandInput, options?: __HttpHandlerOptions): Promise<ListServersCommandOutput>;
    listServers(args: ListServersCommandInput, cb: (err: any, data?: ListServersCommandOutput) => void): void;
    listServers(args: ListServersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServersCommandOutput) => void): void;
    /**
     * <p>Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The
     *       resource can be a user, server, or role.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists the users for a file transfer protocol-enabled server that you specify by passing
     *       the <code>ServerId</code> parameter.</p>
     */
    listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
    listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    listUsers(args: ListUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
    /**
     * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to
     *         <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An
     *         <code>ONLINE</code> server can accept and process file transfer jobs.</p>
     *
     *          <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state,
     *       either not fully able to respond, or not fully online. The values of <code>START_FAILED</code>
     *       can indicate an error condition.</p>
     *
     *          <p>No response is returned from this call.</p>
     */
    startServer(args: StartServerCommandInput, options?: __HttpHandlerOptions): Promise<StartServerCommandOutput>;
    startServer(args: StartServerCommandInput, cb: (err: any, data?: StartServerCommandOutput) => void): void;
    startServer(args: StartServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartServerCommandOutput) => void): void;
    /**
     * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to
     *         <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer
     *       jobs. Information tied to your server, such as server and user properties, are not affected by
     *       stopping your server.</p>
     *
     *          <note>
     *             <p>Stopping the server will not reduce or impact your file transfer protocol endpoint
     *         billing; you must delete the server to stop being billed.</p>
     *          </note>
     *
     *          <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state,
     *       either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code>
     *       can indicate an error condition.</p>
     *
     *          <p>No response is returned from this call.</p>
     */
    stopServer(args: StopServerCommandInput, options?: __HttpHandlerOptions): Promise<StopServerCommandOutput>;
    stopServer(args: StopServerCommandInput, cb: (err: any, data?: StopServerCommandOutput) => void): void;
    stopServer(args: StopServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopServerCommandOutput) => void): void;
    /**
     * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN).
     *       Resources are users, servers, roles, and other entities.</p>
     *
     *          <p>There is no response returned from this call.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is
     *         <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity
     *       provider is set up successfully. We highly recommend that you call this operation to test your
     *       authentication method as soon as you create your server. By doing so, you can troubleshoot
     *       issues with the identity provider integration to ensure that your users can successfully use
     *       the service.</p>
     */
    testIdentityProvider(args: TestIdentityProviderCommandInput, options?: __HttpHandlerOptions): Promise<TestIdentityProviderCommandOutput>;
    testIdentityProvider(args: TestIdentityProviderCommandInput, cb: (err: any, data?: TestIdentityProviderCommandOutput) => void): void;
    testIdentityProvider(args: TestIdentityProviderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TestIdentityProviderCommandOutput) => void): void;
    /**
     * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name
     *       (ARN). Resources are users, servers, roles, and other entities.</p>
     *
     *          <p>No response is returned from this call.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Allows you to update parameters for the access specified in the <code>ServerID</code> and
     *       <code>ExternalID</code> parameters.</p>
     */
    updateAccess(args: UpdateAccessCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAccessCommandOutput>;
    updateAccess(args: UpdateAccessCommandInput, cb: (err: any, data?: UpdateAccessCommandOutput) => void): void;
    updateAccess(args: UpdateAccessCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAccessCommandOutput) => void): void;
    /**
     * <p>Updates the file transfer protocol-enabled server's properties after that server has
     *       been created.</p>
     *
     *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
     *       updated.</p>
     */
    updateServer(args: UpdateServerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServerCommandOutput>;
    updateServer(args: UpdateServerCommandInput, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
    updateServer(args: UpdateServerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServerCommandOutput) => void): void;
    /**
     * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following:
     *       the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code>
     *       you specify.</p>
     *
     *          <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the
     *       updated user.</p>
     */
    updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
    updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    updateUser(args: UpdateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
}
