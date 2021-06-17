import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
export interface AssociateTeamMemberRequest {
    /**
     * <p>The ID of the project to which you will add the IAM user.</p>
     */
    projectId: string | undefined;
    /**
     * <p>A user- or system-generated token that identifies the entity that requested the team
     *       member association to the project. This token can be used to repeat the request.</p>
     */
    clientRequestToken?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the IAM user you want to add to the AWS CodeStar
     *       project.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The AWS CodeStar project role that will apply to this user. This role determines what actions
     *       a user can take in an AWS CodeStar project.</p>
     */
    projectRole: string | undefined;
    /**
     * <p>Whether the team member is allowed to use an SSH public/private key pair to remotely
     *       access project resources, for example Amazon EC2 instances.</p>
     */
    remoteAccessAllowed?: boolean;
}
export declare namespace AssociateTeamMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTeamMemberRequest) => any;
}
export interface AssociateTeamMemberResult {
    /**
     * <p>The user- or system-generated token from the initial request that can be used to repeat
     *       the request.</p>
     */
    clientRequestToken?: string;
}
export declare namespace AssociateTeamMemberResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateTeamMemberResult) => any;
}
/**
 * <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
    name: "ConcurrentModificationException";
    $fault: "server";
    message?: string;
}
export declare namespace ConcurrentModificationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConcurrentModificationException) => any;
}
/**
 * <p>The service role is not valid.</p>
 */
export interface InvalidServiceRoleException extends __SmithyException, $MetadataBearer {
    name: "InvalidServiceRoleException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidServiceRoleException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidServiceRoleException) => any;
}
/**
 * <p>A resource limit has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    message?: string;
}
export declare namespace LimitExceededException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: LimitExceededException) => any;
}
/**
 * <p>Project configuration information is required but not specified.</p>
 */
export interface ProjectConfigurationException extends __SmithyException, $MetadataBearer {
    name: "ProjectConfigurationException";
    $fault: "client";
    message?: string;
}
export declare namespace ProjectConfigurationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectConfigurationException) => any;
}
/**
 * <p>The specified AWS CodeStar project was not found.</p>
 */
export interface ProjectNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ProjectNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ProjectNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectNotFoundException) => any;
}
/**
 * <p>The team member is already associated with a role in this project.</p>
 */
export interface TeamMemberAlreadyAssociatedException extends __SmithyException, $MetadataBearer {
    name: "TeamMemberAlreadyAssociatedException";
    $fault: "client";
    message?: string;
}
export declare namespace TeamMemberAlreadyAssociatedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TeamMemberAlreadyAssociatedException) => any;
}
/**
 * <p>The specified input is either not valid, or it could not be validated.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
 *       with the project request will be uploaded after project creation.</p>
 */
export interface CodeCommitCodeDestination {
    /**
     * <p>The name of the AWS CodeCommit repository to be created in AWS CodeStar.</p>
     */
    name: string | undefined;
}
export declare namespace CodeCommitCodeDestination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeCommitCodeDestination) => any;
}
/**
 * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
 *       project request will be uploaded after project creation.</p>
 */
export interface GitHubCodeDestination {
    /**
     * <p>Name of the GitHub repository to be created in AWS CodeStar.</p>
     */
    name: string | undefined;
    /**
     * <p>Description for the GitHub repository to be created in AWS CodeStar. This description displays in
     *       GitHub after the repository is created.</p>
     */
    description?: string;
    /**
     * <p>The type of GitHub repository to be created in AWS CodeStar. Valid values are User or Organization.</p>
     */
    type: string | undefined;
    /**
     * <p>The GitHub username for the owner of the GitHub repository to be created in AWS CodeStar. If this repository should
     *       be owned by a GitHub organization, provide its name.</p>
     */
    owner: string | undefined;
    /**
     * <p>Whether the GitHub repository is to be a private repository.</p>
     */
    privateRepository: boolean | undefined;
    /**
     * <p>Whether to enable issues for the GitHub repository.</p>
     */
    issuesEnabled: boolean | undefined;
    /**
     * <p>The GitHub user's personal access token for the GitHub repository.</p>
     */
    token: string | undefined;
}
export declare namespace GitHubCodeDestination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: GitHubCodeDestination) => any;
}
/**
 * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
 *       source code files provided with the project request are placed in the repository.</p>
 */
export interface CodeDestination {
    /**
     * <p>Information about the AWS CodeCommit repository to be created in AWS CodeStar. This is where the source code files provided
     *       with the project request will be uploaded after project creation.</p>
     */
    codeCommit?: CodeCommitCodeDestination;
    /**
     * <p>Information about the GitHub repository to be created in AWS CodeStar. This is where the source code files provided with the
     *       project request will be uploaded after project creation.</p>
     */
    gitHub?: GitHubCodeDestination;
}
export declare namespace CodeDestination {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeDestination) => any;
}
/**
 * <p>The Amazon S3 location where the source code files provided with the project
 *       request are stored.</p>
 */
export interface S3Location {
    /**
     * <p>The Amazon S3 bucket name where the source code files provided with the project
     *       request are stored.</p>
     */
    bucketName?: string;
    /**
     * <p>The Amazon S3 object key where the source code files provided with the project
     *       request are stored.</p>
     */
    bucketKey?: string;
}
export declare namespace S3Location {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: S3Location) => any;
}
/**
 * <p>The location where the source code files provided with the project request are
 *       stored. AWS CodeStar retrieves the files during project creation.</p>
 */
export interface CodeSource {
    /**
     * <p>Information about the Amazon S3 location where the source code files provided with the
     *       project request are stored. </p>
     */
    s3: S3Location | undefined;
}
export declare namespace CodeSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeSource) => any;
}
/**
 * <p>Location and destination information about the source code files provided with the
 *       project request. The source code is uploaded to the new project source repository after
 *       project creation.</p>
 */
export interface Code {
    /**
     * <p>The location where the source code files provided with the project request are
     *       stored. AWS CodeStar retrieves the files during project creation.</p>
     */
    source: CodeSource | undefined;
    /**
     * <p>The repository to be created in AWS CodeStar. Valid values are AWS CodeCommit or GitHub. After AWS CodeStar provisions the new repository, the
     *       source code files provided with the project request are placed in the repository.</p>
     */
    destination: CodeDestination | undefined;
}
export declare namespace Code {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Code) => any;
}
/**
 * <p>The Amazon S3 location where the toolchain template file provided with the
 *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
 */
export interface ToolchainSource {
    /**
     * <p>The Amazon S3 bucket where the toolchain template file provided with the project
     *       request is stored.</p>
     */
    s3: S3Location | undefined;
}
export declare namespace ToolchainSource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ToolchainSource) => any;
}
/**
 * <p>The toolchain template file provided with the project request. AWS CodeStar uses
 *       the template to provision the toolchain stack in AWS CloudFormation.</p>
 */
export interface Toolchain {
    /**
     * <p>The Amazon S3 location where the toolchain template file provided with the
     *       project request is stored. AWS CodeStar retrieves the file during project creation.</p>
     */
    source: ToolchainSource | undefined;
    /**
     * <p>The service role ARN for AWS CodeStar to use for the toolchain template during stack
     *       provisioning.</p>
     */
    roleArn?: string;
    /**
     * <p>The list of parameter overrides to be passed into the toolchain template during stack
     *       provisioning, if any.</p>
     */
    stackParameters?: {
        [key: string]: string;
    };
}
export declare namespace Toolchain {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Toolchain) => any;
}
export interface CreateProjectRequest {
    /**
     * <p>The display name for the project to be created in AWS CodeStar.</p>
     */
    name: string | undefined;
    /**
     * <p>The ID of the project to be created in AWS CodeStar.</p>
     */
    id: string | undefined;
    /**
     * <p>The description of the project, if any.</p>
     */
    description?: string;
    /**
     * <p>A user- or system-generated token that identifies the entity that requested project
     *       creation. This token can be used to repeat the request.</p>
     */
    clientRequestToken?: string;
    /**
     * <p>A list of the Code objects submitted with the project request. If this
     *       parameter is specified, the request must also include the toolchain parameter.</p>
     */
    sourceCode?: Code[];
    /**
     * <p>The name of the toolchain template file submitted with the project request. If
     *       this parameter is specified, the request must also include the sourceCode parameter.</p>
     */
    toolchain?: Toolchain;
    /**
     * <p>The tags created for the project.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectRequest) => any;
}
export interface CreateProjectResult {
    /**
     * <p>The ID of the project.</p>
     */
    id: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the created project.</p>
     */
    arn: string | undefined;
    /**
     * <p>A user- or system-generated token that identifies the entity that requested project
     *       creation.</p>
     */
    clientRequestToken?: string;
    /**
     * <p>Reserved for future use.</p>
     */
    projectTemplateId?: string;
}
export declare namespace CreateProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateProjectResult) => any;
}
/**
 * <p>An AWS CodeStar project with the same ID already exists in this region for the AWS account.
 *       AWS CodeStar project IDs must be unique within a region for the AWS account.</p>
 */
export interface ProjectAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ProjectAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ProjectAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectAlreadyExistsException) => any;
}
/**
 * <p>The project creation request was valid, but a nonspecific exception or error occurred
 *       during project creation. The project could not be created in AWS CodeStar.</p>
 */
export interface ProjectCreationFailedException extends __SmithyException, $MetadataBearer {
    name: "ProjectCreationFailedException";
    $fault: "client";
    message?: string;
}
export declare namespace ProjectCreationFailedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectCreationFailedException) => any;
}
export interface CreateUserProfileRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The name that will be displayed as the friendly name for the user in AWS CodeStar. </p>
     */
    displayName: string | undefined;
    /**
     * <p>The email address that will be displayed as part of the user's profile in
     *       AWS CodeStar.</p>
     */
    emailAddress: string | undefined;
    /**
     * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
     *       user remote access to project resources, this public key will be used along with the user's
     *       private key for SSH access.</p>
     */
    sshPublicKey?: string;
}
export declare namespace CreateUserProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserProfileRequest) => any;
}
export interface CreateUserProfileResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
     */
    displayName?: string;
    /**
     * <p>The email address that is displayed as part of the user's profile in AWS CodeStar.</p>
     */
    emailAddress?: string;
    /**
     * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
     *       public/private keypair the user can use to access project resources if a project owner allows
     *       the user remote access to those resources.</p>
     */
    sshPublicKey?: string;
    /**
     * <p>The date the user profile was created, in timestamp format.</p>
     */
    createdTimestamp?: Date;
    /**
     * <p>The date the user profile was last modified, in timestamp format.</p>
     */
    lastModifiedTimestamp?: Date;
}
export declare namespace CreateUserProfileResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateUserProfileResult) => any;
}
/**
 * <p>A user profile with that name already exists in this region for the AWS account. AWS
 *       CodeStar user profile names must be unique within a region for the AWS account. </p>
 */
export interface UserProfileAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "UserProfileAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace UserProfileAlreadyExistsException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserProfileAlreadyExistsException) => any;
}
export interface DeleteProjectRequest {
    /**
     * <p>The ID of the project to be deleted in AWS CodeStar.</p>
     */
    id: string | undefined;
    /**
     * <p>A user- or system-generated token that identifies the entity that requested project
     *       deletion. This token can be used to repeat the request. </p>
     */
    clientRequestToken?: string;
    /**
     * <p>Whether to send a delete request for the primary stack in AWS CloudFormation originally
     *       used to generate the project and its resources. This option will delete all AWS resources for
     *       the project (except for any buckets in Amazon S3) as well as deleting the project itself.
     *       Recommended for most use cases.</p>
     */
    deleteStack?: boolean;
}
export declare namespace DeleteProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectRequest) => any;
}
export interface DeleteProjectResult {
    /**
     * <p>The ID of the primary stack in AWS CloudFormation that will be deleted as part of
     *       deleting the project and its resources.</p>
     */
    stackId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the deleted project.</p>
     */
    projectArn?: string;
}
export declare namespace DeleteProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteProjectResult) => any;
}
export interface DeleteUserProfileRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the user to delete from AWS CodeStar.</p>
     */
    userArn: string | undefined;
}
export declare namespace DeleteUserProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserProfileRequest) => any;
}
export interface DeleteUserProfileResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the user deleted from AWS CodeStar.</p>
     */
    userArn: string | undefined;
}
export declare namespace DeleteUserProfileResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DeleteUserProfileResult) => any;
}
export interface DescribeProjectRequest {
    /**
     * <p>The ID of the project.</p>
     */
    id: string | undefined;
}
export declare namespace DescribeProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectRequest) => any;
}
/**
 * <p>An indication of whether a project creation or deletion is failed or
 *       successful.</p>
 */
export interface ProjectStatus {
    /**
     * <p>The phase of completion for a project creation or deletion.</p>
     */
    state: string | undefined;
    /**
     * <p>In the case of a project creation or deletion failure, a reason for the
     *       failure.</p>
     */
    reason?: string;
}
export declare namespace ProjectStatus {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectStatus) => any;
}
export interface DescribeProjectResult {
    /**
     * <p>The display name for the project.</p>
     */
    name?: string;
    /**
     * <p>The ID of the project.</p>
     */
    id?: string;
    /**
     * <p>The Amazon Resource Name (ARN) for the project.</p>
     */
    arn?: string;
    /**
     * <p>The description of the project, if any.</p>
     */
    description?: string;
    /**
     * <p>A user- or system-generated token that identifies the entity that requested project
     *       creation. </p>
     */
    clientRequestToken?: string;
    /**
     * <p>The date and time the project was created, in timestamp format.</p>
     */
    createdTimeStamp?: Date;
    /**
     * <p>The ID of the primary stack in AWS CloudFormation used to generate resources for the
     *       project.</p>
     */
    stackId?: string;
    /**
     * <p>The ID for the AWS CodeStar project template used to create the project.</p>
     */
    projectTemplateId?: string;
    /**
     * <p>The project creation or deletion status.</p>
     */
    status?: ProjectStatus;
}
export declare namespace DescribeProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeProjectResult) => any;
}
export interface DescribeUserProfileRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the user.</p>
     */
    userArn: string | undefined;
}
export declare namespace DescribeUserProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserProfileRequest) => any;
}
export interface DescribeUserProfileResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the user.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The display name shown for the user in AWS CodeStar projects. For example, this could be set
     *       to both first and last name ("Mary Major") or a single name ("Mary"). The display name is also
     *       used to generate the initial icon associated with the user in AWS CodeStar projects. If spaces are
     *       included in the display name, the first character that appears after the space will be used as
     *       the second character in the user initial icon. The initial icon displays a maximum of two
     *       characters, so a display name with more than one space (for example "Mary Jane Major") would
     *       generate an initial icon using the first character and the first character after the space
     *       ("MJ", not "MM").</p>
     */
    displayName?: string;
    /**
     * <p>The email address for the user. Optional.</p>
     */
    emailAddress?: string;
    /**
     * <p>The SSH public key associated with the user. This SSH public key is associated with the
     *       user profile, and can be used in conjunction with the associated private key for access to
     *       project resources, such as Amazon EC2 instances, if a project owner grants remote access to
     *       those resources.</p>
     */
    sshPublicKey?: string;
    /**
     * <p>The date and time when the user profile was created in AWS CodeStar, in timestamp
     *       format.</p>
     */
    createdTimestamp: Date | undefined;
    /**
     * <p>The date and time when the user profile was last modified, in timestamp
     *       format.</p>
     */
    lastModifiedTimestamp: Date | undefined;
}
export declare namespace DescribeUserProfileResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeUserProfileResult) => any;
}
/**
 * <p>The user profile was not found.</p>
 */
export interface UserProfileNotFoundException extends __SmithyException, $MetadataBearer {
    name: "UserProfileNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace UserProfileNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserProfileNotFoundException) => any;
}
export interface DisassociateTeamMemberRequest {
    /**
     * <p>The ID of the AWS CodeStar project from which you want to remove a team member.</p>
     */
    projectId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM user or group whom you want to remove from
     *       the project.</p>
     */
    userArn: string | undefined;
}
export declare namespace DisassociateTeamMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTeamMemberRequest) => any;
}
export interface DisassociateTeamMemberResult {
}
export declare namespace DisassociateTeamMemberResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateTeamMemberResult) => any;
}
/**
 * <p>The next token is not valid.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
    name: "InvalidNextTokenException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidNextTokenException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InvalidNextTokenException) => any;
}
export interface ListProjectsRequest {
    /**
     * <p>The continuation token to be used to return the next set of results, if the results
     *       cannot be returned in one response.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum amount of data that can be contained in a single set of results.</p>
     */
    maxResults?: number;
}
export declare namespace ListProjectsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsRequest) => any;
}
/**
 * <p>Information about the metadata for a project.</p>
 */
export interface ProjectSummary {
    /**
     * <p>The ID of the project.</p>
     */
    projectId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the project.</p>
     */
    projectArn?: string;
}
export declare namespace ProjectSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ProjectSummary) => any;
}
export interface ListProjectsResult {
    /**
     * <p>A list of projects.</p>
     */
    projects: ProjectSummary[] | undefined;
    /**
     * <p>The continuation token to use when requesting the next set of results, if there are
     *       more results to be returned.</p>
     */
    nextToken?: string;
}
export declare namespace ListProjectsResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListProjectsResult) => any;
}
export interface ListResourcesRequest {
    /**
     * <p>The ID of the project.</p>
     */
    projectId: string | undefined;
    /**
     * <p>The continuation token for the next set of results, if the results cannot be returned
     *       in one response.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum amount of data that can be contained in a single set of results.</p>
     */
    maxResults?: number;
}
export declare namespace ListResourcesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesRequest) => any;
}
/**
 * <p>Information about a resource for a project.</p>
 */
export interface Resource {
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    id: string | undefined;
}
export declare namespace Resource {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Resource) => any;
}
export interface ListResourcesResult {
    /**
     * <p>An array of resources associated with the project. </p>
     */
    resources?: Resource[];
    /**
     * <p>The continuation token to use when requesting the next set of results, if there are
     *       more results to be returned.</p>
     */
    nextToken?: string;
}
export declare namespace ListResourcesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListResourcesResult) => any;
}
export interface ListTagsForProjectRequest {
    /**
     * <p>The ID of the project to get tags for.</p>
     */
    id: string | undefined;
    /**
     * <p>Reserved for future use.</p>
     */
    nextToken?: string;
    /**
     * <p>Reserved for future use.</p>
     */
    maxResults?: number;
}
export declare namespace ListTagsForProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForProjectRequest) => any;
}
export interface ListTagsForProjectResult {
    /**
     * <p>The tags for the project.</p>
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>Reserved for future use.</p>
     */
    nextToken?: string;
}
export declare namespace ListTagsForProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForProjectResult) => any;
}
export interface ListTeamMembersRequest {
    /**
     * <p>The ID of the project for which you want to list team members.</p>
     */
    projectId: string | undefined;
    /**
     * <p>The continuation token for the next set of results, if the results cannot be returned
     *       in one response.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of team members you want returned in a response.</p>
     */
    maxResults?: number;
}
export declare namespace ListTeamMembersRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTeamMembersRequest) => any;
}
/**
 * <p>Information about a team member in a project.</p>
 */
export interface TeamMember {
    /**
     * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The role assigned to the user in the project. Project roles have different levels of
     *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
     *         Teams</a> in the <i>AWS CodeStar User Guide</i>. </p>
     */
    projectRole: string | undefined;
    /**
     * <p>Whether the user is allowed to remotely access project resources using an SSH
     *       public/private key pair.</p>
     */
    remoteAccessAllowed?: boolean;
}
export declare namespace TeamMember {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TeamMember) => any;
}
export interface ListTeamMembersResult {
    /**
     * <p>A list of team member objects for the project.</p>
     */
    teamMembers: TeamMember[] | undefined;
    /**
     * <p>The continuation token to use when requesting the next set of results, if there are
     *       more results to be returned.</p>
     */
    nextToken?: string;
}
export declare namespace ListTeamMembersResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTeamMembersResult) => any;
}
export interface ListUserProfilesRequest {
    /**
     * <p>The continuation token for the next set of results, if the results cannot be returned
     *       in one response.</p>
     */
    nextToken?: string;
    /**
     * <p>The maximum number of results to return in a response.</p>
     */
    maxResults?: number;
}
export declare namespace ListUserProfilesRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUserProfilesRequest) => any;
}
/**
 * <p>Information about a user's profile in AWS CodeStar.</p>
 */
export interface UserProfileSummary {
    /**
     * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
     */
    userArn?: string;
    /**
     * <p>The display name of a user in AWS CodeStar. For example, this could be set to both first and
     *       last name ("Mary Major") or a single name ("Mary"). The display name is also used to generate
     *       the initial icon associated with the user in AWS CodeStar projects. If spaces are included in the
     *       display name, the first character that appears after the space will be used as the second
     *       character in the user initial icon. The initial icon displays a maximum of two characters, so
     *       a display name with more than one space (for example "Mary Jane Major") would generate an
     *       initial icon using the first character and the first character after the space ("MJ", not
     *       "MM").</p>
     */
    displayName?: string;
    /**
     * <p>The email address associated with the user.</p>
     */
    emailAddress?: string;
    /**
     * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
     *       user remote access to project resources, this public key will be used along with the user's
     *       private key for SSH access.</p>
     */
    sshPublicKey?: string;
}
export declare namespace UserProfileSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UserProfileSummary) => any;
}
export interface ListUserProfilesResult {
    /**
     * <p>All the user profiles configured in AWS CodeStar for an AWS account.</p>
     */
    userProfiles: UserProfileSummary[] | undefined;
    /**
     * <p>The continuation token to use when requesting the next set of results, if there are
     *       more results to be returned.</p>
     */
    nextToken?: string;
}
export declare namespace ListUserProfilesResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListUserProfilesResult) => any;
}
export interface TagProjectRequest {
    /**
     * <p>The ID of the project you want to add a tag to.</p>
     */
    id: string | undefined;
    /**
     * <p>The tags you want to add to the project.</p>
     */
    tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagProjectRequest) => any;
}
export interface TagProjectResult {
    /**
     * <p>The tags for the project.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace TagProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagProjectResult) => any;
}
export interface UntagProjectRequest {
    /**
     * <p>The ID of the project to remove tags from.</p>
     */
    id: string | undefined;
    /**
     * <p>The tags to remove from the project.</p>
     */
    tags: string[] | undefined;
}
export declare namespace UntagProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagProjectRequest) => any;
}
export interface UntagProjectResult {
}
export declare namespace UntagProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagProjectResult) => any;
}
export interface UpdateProjectRequest {
    /**
     * <p>The ID of the project you want to update.</p>
     */
    id: string | undefined;
    /**
     * <p>The name of the project you want to update.</p>
     */
    name?: string;
    /**
     * <p>The description of the project, if any.</p>
     */
    description?: string;
}
export declare namespace UpdateProjectRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectRequest) => any;
}
export interface UpdateProjectResult {
}
export declare namespace UpdateProjectResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateProjectResult) => any;
}
/**
 * <p>The specified team member was not found.</p>
 */
export interface TeamMemberNotFoundException extends __SmithyException, $MetadataBearer {
    name: "TeamMemberNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace TeamMemberNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TeamMemberNotFoundException) => any;
}
export interface UpdateTeamMemberRequest {
    /**
     * <p>The ID of the project.</p>
     */
    projectId: string | undefined;
    /**
     * <p>The Amazon Resource Name (ARN) of the user for whom you want to change team membership
     *       attributes.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The role assigned to the user in the project. Project roles have different levels of
     *       access. For more information, see <a href="http://docs.aws.amazon.com/codestar/latest/userguide/working-with-teams.html">Working with
     *         Teams</a> in the <i>AWS CodeStar User Guide</i>.</p>
     */
    projectRole?: string;
    /**
     * <p>Whether a team member is allowed to remotely access project resources using the SSH
     *       public key associated with the user's profile. Even if this is set to True, the user must
     *       associate a public key with their profile before the user can access resources.</p>
     */
    remoteAccessAllowed?: boolean;
}
export declare namespace UpdateTeamMemberRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTeamMemberRequest) => any;
}
export interface UpdateTeamMemberResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the user whose team membership attributes were
     *       updated.</p>
     */
    userArn?: string;
    /**
     * <p>The project role granted to the user.</p>
     */
    projectRole?: string;
    /**
     * <p>Whether a team member is allowed to remotely access project resources using the SSH
     *       public key associated with the user's profile.</p>
     */
    remoteAccessAllowed?: boolean;
}
export declare namespace UpdateTeamMemberResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateTeamMemberResult) => any;
}
export interface UpdateUserProfileRequest {
    /**
     * <p>The name that will be displayed as the friendly name for the user in AWS
     *       CodeStar.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
     */
    displayName?: string;
    /**
     * <p>The email address that is displayed as part of the user's profile in AWS
     *       CodeStar.</p>
     */
    emailAddress?: string;
    /**
     * <p>The SSH public key associated with the user in AWS CodeStar. If a project owner allows the
     *       user remote access to project resources, this public key will be used along with the user's
     *       private key for SSH access.</p>
     */
    sshPublicKey?: string;
}
export declare namespace UpdateUserProfileRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserProfileRequest) => any;
}
export interface UpdateUserProfileResult {
    /**
     * <p>The Amazon Resource Name (ARN) of the user in IAM.</p>
     */
    userArn: string | undefined;
    /**
     * <p>The name that is displayed as the friendly name for the user in AWS CodeStar.</p>
     */
    displayName?: string;
    /**
     * <p>The email address that is displayed as part of the user's profile in AWS
     *       CodeStar.</p>
     */
    emailAddress?: string;
    /**
     * <p>The SSH public key associated with the user in AWS CodeStar. This is the public portion of the
     *       public/private keypair the user can use to access project resources if a project owner allows
     *       the user remote access to those resources.</p>
     */
    sshPublicKey?: string;
    /**
     * <p>The date the user profile was created, in timestamp format.</p>
     */
    createdTimestamp?: Date;
    /**
     * <p>The date the user profile was last modified, in timestamp format.</p>
     */
    lastModifiedTimestamp?: Date;
}
export declare namespace UpdateUserProfileResult {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UpdateUserProfileResult) => any;
}
