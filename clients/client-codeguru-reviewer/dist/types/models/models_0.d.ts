import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
    name: "AccessDeniedException";
    $fault: "client";
    Message?: string;
}
export declare namespace AccessDeniedException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AccessDeniedException) => any;
}
export declare enum EncryptionOption {
    AoCmk = "AWS_OWNED_CMK",
    CmCmk = "CUSTOMER_MANAGED_CMK"
}
/**
 * <p>An object that contains:</p>
 *          <ul>
 *             <li>
 *                <p>The encryption option for a repository association. It is either owned by AWS
 *             Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p>
 *             </li>
 *             <li>
 *                <p>The ID of the AWS KMS key that
 *             is associated with a respository association.</p>
 *             </li>
 *          </ul>
 */
export interface KMSKeyDetails {
    /**
     * <p>The ID of the AWS KMS key that is associated with a respository association.</p>
     */
    KMSKeyId?: string;
    /**
     * <p>The encryption option for a repository association. It is either owned by AWS
     *             Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p>
     */
    EncryptionOption?: EncryptionOption | string;
}
export declare namespace KMSKeyDetails {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: KMSKeyDetails) => any;
}
/**
 * <p>
 *          Information about a third-party source repository connected to CodeGuru Reviewer.
 *       </p>
 */
export interface ThirdPartySourceRepository {
    /**
     * <p>
     *          The name of the third party source repository.
     *       </p>
     */
    Name: string | undefined;
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
     *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
     *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">
     *                <code>Connection</code>
     *             </a> in
     *          the <i>AWS CodeStar Connections API Reference</i>.
     *       </p>
     */
    ConnectionArn: string | undefined;
    /**
     * <p>
     *          The owner of the repository. For a GitHub, GitHub Enterprise, or Bitbucket repository,
     *          this is the username for the account that owns the repository.
     *       </p>
     */
    Owner: string | undefined;
}
export declare namespace ThirdPartySourceRepository {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThirdPartySourceRepository) => any;
}
/**
 * <p>Information about an AWS CodeCommit repository. The CodeCommit repository must be in the same
 *       AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured. </p>
 */
export interface CodeCommitRepository {
    /**
     * <p>The name of the AWS CodeCommit repository. For more information, see
     *          <a href="https://docs.aws.amazon.com/codecommit/latest/APIReference/API_GetRepository.html#CodeCommit-GetRepository-request-repositoryName">repositoryName</a>
     *          in the <i>AWS CodeCommit API Reference</i>.</p>
     */
    Name: string | undefined;
}
export declare namespace CodeCommitRepository {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeCommitRepository) => any;
}
/**
 * <p>
 *          Information about an associated AWS CodeCommit repository or an associated repository that is managed
 *          by AWS CodeStar Connections (for example, Bitbucket). This <code>Repository</code> object
 *          is not used if your source code is in an associated GitHub repository.
 *       </p>
 */
export interface Repository {
    /**
     * <p>Information about an AWS CodeCommit repository.</p>
     */
    CodeCommit?: CodeCommitRepository;
    /**
     * <p>
     *          Information about a Bitbucket repository.
     *       </p>
     */
    Bitbucket?: ThirdPartySourceRepository;
    /**
     * <p>
     *          Information about a GitHub Enterprise Server repository.
     *       </p>
     */
    GitHubEnterpriseServer?: ThirdPartySourceRepository;
}
export declare namespace Repository {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Repository) => any;
}
export interface AssociateRepositoryRequest {
    /**
     * <p>The repository to associate.</p>
     */
    Repository: Repository | undefined;
    /**
     * <p>Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate repository
     *         associations if there are failures and retries. </p>
     */
    ClientRequestToken?: string;
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>A <code>KMSKeyDetails</code> object that contains:</p>
     *          <ul>
     *             <li>
     *                <p>The encryption option for this repository association. It is either owned by AWS
     *             Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p>
     *             </li>
     *             <li>
     *                <p>The ID of the AWS KMS key that
     *             is associated with this respository association.</p>
     *             </li>
     *          </ul>
     */
    KMSKeyDetails?: KMSKeyDetails;
}
export declare namespace AssociateRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRepositoryRequest) => any;
}
export declare enum ProviderType {
    BITBUCKET = "Bitbucket",
    CODE_COMMIT = "CodeCommit",
    GIT_HUB = "GitHub",
    GIT_HUB_ENTERPRISE_SERVER = "GitHubEnterpriseServer"
}
export declare enum RepositoryAssociationState {
    ASSOCIATED = "Associated",
    ASSOCIATING = "Associating",
    DISASSOCIATED = "Disassociated",
    DISASSOCIATING = "Disassociating",
    FAILED = "Failed"
}
/**
 * <p>Information about a repository association. The
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">
 *                <code>DescribeRepositoryAssociation</code>
 *             </a>
 *          operation returns a <code>RepositoryAssociation</code> object.</p>
 */
export interface RepositoryAssociation {
    /**
     * <p>The ID of the repository association.</p>
     */
    AssociationId?: string;
    /**
     * <p>The Amazon Resource Name (ARN) identifying the repository association.</p>
     */
    AssociationArn?: string;
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
     *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
     *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">
     *                <code>Connection</code>
     *             </a> in
     *          the <i>AWS CodeStar Connections API Reference</i>.
     *       </p>
     */
    ConnectionArn?: string;
    /**
     * <p>The name of the repository.</p>
     */
    Name?: string;
    /**
     * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
     *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.</p>
     */
    Owner?: string;
    /**
     * <p>The provider type of the repository association.</p>
     */
    ProviderType?: ProviderType | string;
    /**
     * <p>The state of the repository association.</p>
     *          <p>The valid repository association states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Associated</b>: The repository
     *                association is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Associating</b>: CodeGuru Reviewer is:
     *             </p>
     *                <ul>
     *                   <li>
     *                      <p>
     *                      Setting up pull request notifications. This is required
     *                      for pull requests to trigger a CodeGuru Reviewer review.
     *                   </p>
     *                      <note>
     *                         <p>
     *                         If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>,
     *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
     *                         reviews of code in your repository cannot be triggered.
     *                      </p>
     *                      </note>
     *                   </li>
     *                   <li>
     *                      <p>
     *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
     *                      clone code in your repository.
     *                   </p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Failed</b>: The repository failed to associate or disassociate.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
     *                source code access.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association
     *                with this repository if you want to review source code in it later. You can control access to code reviews created in an
     *                associated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to
     *                associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
     *             </p>
     *             </li>
     *          </ul>
     */
    State?: RepositoryAssociationState | string;
    /**
     * <p>A description of why the repository association is in the current state.</p>
     */
    StateReason?: string;
    /**
     * <p>The time, in milliseconds since the epoch, when the repository association was last updated.</p>
     */
    LastUpdatedTimeStamp?: Date;
    /**
     * <p>The time, in milliseconds since the epoch, when the repository association was created.</p>
     */
    CreatedTimeStamp?: Date;
    /**
     * <p>A <code>KMSKeyDetails</code> object that contains:</p>
     *          <ul>
     *             <li>
     *                <p>The encryption option for this repository association. It is either owned by AWS
     *             Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p>
     *             </li>
     *             <li>
     *                <p>The ID of the AWS KMS key that
     *             is associated with this respository association.</p>
     *             </li>
     *          </ul>
     */
    KMSKeyDetails?: KMSKeyDetails;
}
export declare namespace RepositoryAssociation {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryAssociation) => any;
}
export interface AssociateRepositoryResponse {
    /**
     * <p>Information about the repository association.</p>
     */
    RepositoryAssociation?: RepositoryAssociation;
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace AssociateRepositoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: AssociateRepositoryResponse) => any;
}
/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *          resource associated with the request. Resolve the conflict before retrying this request. </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
    name: "ConflictException";
    $fault: "client";
    Message?: string;
}
export declare namespace ConflictException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ConflictException) => any;
}
/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
    name: "InternalServerException";
    $fault: "server";
    Message?: string;
}
export declare namespace InternalServerException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: InternalServerException) => any;
}
/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
    name: "ThrottlingException";
    $fault: "client";
    Message?: string;
}
export declare namespace ThrottlingException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ThrottlingException) => any;
}
/**
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
    name: "ValidationException";
    $fault: "client";
    Message?: string;
}
export declare namespace ValidationException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ValidationException) => any;
}
/**
 * <p>
 *          A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">
 *                <code>SourceCodeType</code>
 *             </a> that specifies
 *          the tip of a branch in an associated repository.
 *       </p>
 */
export interface RepositoryHeadSourceCodeType {
    /**
     * <p>
     *          The name of the branch in an associated repository. The <code>RepositoryHeadSourceCodeType</code> specifies
     *          the tip of this branch.
     *       </p>
     */
    BranchName: string | undefined;
}
export declare namespace RepositoryHeadSourceCodeType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryHeadSourceCodeType) => any;
}
/**
 * <p> A code review type that analyzes all code under a specified branch in an associated
 * 			repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">
 *                <code>CreateCodeReview</code>
 *             </a>. </p>
 */
export interface RepositoryAnalysis {
    /**
     * <p>
     *          A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">
     *                <code>SourceCodeType</code>
     *             </a> that
     *          specifies the tip of a branch in an associated repository.
     *       </p>
     */
    RepositoryHead: RepositoryHeadSourceCodeType | undefined;
}
export declare namespace RepositoryAnalysis {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryAnalysis) => any;
}
/**
 * <p>
 *          The type of a code review. There are two code review types:
 *       </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PullRequest</code> - A code review that is automatically triggered by a pull request on an associated repository. Because this
 *                type of code review is automatically generated, you cannot specify this code review type using <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">
 *                      <code>CreateCodeReview</code>
 *                   </a>.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 * 					             <code>RepositoryAnalysis</code> - A code review that analyzes all code under a specified
 * 					branch in an associated repository. The associated repository is specified using its ARN
 * 					in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">
 *                      <code>CreateCodeReview</code>
 *                   </a>. </p>
 *             </li>
 *          </ul>
 */
export interface CodeReviewType {
    /**
     * <p> A code review that analyzes all code under a specified branch in an associated
     * 			repository. The associated repository is specified using its ARN in <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview">
     *                <code>CreateCodeReview</code>
     *             </a>. </p>
     */
    RepositoryAnalysis: RepositoryAnalysis | undefined;
}
export declare namespace CodeReviewType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeReviewType) => any;
}
export interface CreateCodeReviewRequest {
    /**
     * <p>
     *          The name of the code review. The name of each code review in your AWS account must be unique.
     *       </p>
     */
    Name: string | undefined;
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     *          <p>
     *          A code review can only be created on an associated repository. This is the ARN of the
     *          associated repository.
     *       </p>
     */
    RepositoryAssociationArn: string | undefined;
    /**
     * <p>
     *          The type of code review to create. This is specified using a
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
     *                <code>CodeReviewType</code>
     *             </a>
     *          object. You can create a code review only of type <code>RepositoryAnalysis</code>.
     *       </p>
     */
    Type: CodeReviewType | undefined;
    /**
     * <p>
     *          Amazon CodeGuru Reviewer uses this value to prevent the accidental creation of duplicate code
     *          reviews if there are failures and retries.
     *       </p>
     */
    ClientRequestToken?: string;
}
export declare namespace CreateCodeReviewRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCodeReviewRequest) => any;
}
/**
 * <p>
 *          Information about the statistics from the code review.
 *       </p>
 */
export interface Metrics {
    /**
     * <p>
     *         Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions,
     *         this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already
     *         existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments
     *         and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in
     *         a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files,
     *         <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of
     *          code for a total of 2,725 lines of code.
     *       </p>
     */
    MeteredLinesOfCodeCount?: number;
    /**
     * <p>
     *          Total number of recommendations found in the code review.
     *       </p>
     */
    FindingsCount?: number;
}
export declare namespace Metrics {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: Metrics) => any;
}
/**
 * <p>
 *          A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">
 *                <code>SourceCodeType</code>
 *             </a> that
 *          specifies the commit diff for a pull request on an associated repository.
 *       </p>
 */
export interface CommitDiffSourceCodeType {
    /**
     * <p>
     *          The SHA of the source commit used to generate a commit diff.
     *       </p>
     */
    SourceCommit?: string;
    /**
     * <p>
     *          The SHA of the destination commit used to generate a commit diff.
     *       </p>
     */
    DestinationCommit?: string;
}
export declare namespace CommitDiffSourceCodeType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CommitDiffSourceCodeType) => any;
}
/**
 * <p>
 *          Specifies the source code that is analyzed in a code review. A code review can analyze the source code that is specified
 *          using a pull request diff or a branch in an associated repository.
 *       </p>
 */
export interface SourceCodeType {
    /**
     * <p>
     *          A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">
     *                <code>SourceCodeType</code>
     *             </a> that
     *          specifies a commit diff created by a pull request on an associated repository.
     *       </p>
     */
    CommitDiff?: CommitDiffSourceCodeType;
    /**
     * <p>
     *          A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType">
     *                <code>SourceCodeType</code>
     *             </a> that specifies
     *          the tip of a branch in an associated repository.
     *       </p>
     */
    RepositoryHead?: RepositoryHeadSourceCodeType;
}
export declare namespace SourceCodeType {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: SourceCodeType) => any;
}
export declare enum JobState {
    COMPLETED = "Completed",
    DELETING = "Deleting",
    FAILED = "Failed",
    PENDING = "Pending"
}
export declare enum Type {
    PULL_REQUEST = "PullRequest",
    REPOSITORY_ANALYSIS = "RepositoryAnalysis"
}
/**
 * <p>
 *          Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
 *       </p>
 */
export interface CodeReview {
    /**
     * <p>
     *          The name of the code review.
     *       </p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn?: string;
    /**
     * <p>
     *          The name of the repository.
     *       </p>
     */
    RepositoryName?: string;
    /**
     * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
     *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.</p>
     */
    Owner?: string;
    /**
     * <p>
     *          The type of repository that contains the reviewed code (for example, GitHub or Bitbucket).
     *       </p>
     */
    ProviderType?: ProviderType | string;
    /**
     * <p>The valid code review states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Completed</code>: The code review is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Pending</code>: The code review started and has not completed or failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Failed</code>: The code review failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Deleting</code>: The code review is being deleted.
     *             </p>
     *             </li>
     *          </ul>
     */
    State?: JobState | string;
    /**
     * <p>
     *          The reason for the state of the code review.
     *       </p>
     */
    StateReason?: string;
    /**
     * <p>
     *          The time, in milliseconds since the epoch, when the code review was created.
     *       </p>
     */
    CreatedTimeStamp?: Date;
    /**
     * <p>
     *          The time, in milliseconds since the epoch, when the code review was last updated.
     *       </p>
     */
    LastUpdatedTimeStamp?: Date;
    /**
     * <p>
     *          The type of code review.
     *       </p>
     */
    Type?: Type | string;
    /**
     * <p>
     *          The pull request ID for the code review.
     *       </p>
     */
    PullRequestId?: string;
    /**
     * <p>
     *          The type of the source code for the code review.
     *       </p>
     */
    SourceCodeType?: SourceCodeType;
    /**
     * <p>
     * 			The Amazon Resource Name (ARN) of the
     * 			<a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> that contains
     * 			the reviewed source code. You can retrieve associated repository ARNs by calling
     * 			<a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     * 		</p>
     */
    AssociationArn?: string;
    /**
     * <p>
     *          The statistics from the code review.
     *       </p>
     */
    Metrics?: Metrics;
}
export declare namespace CodeReview {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeReview) => any;
}
export interface CreateCodeReviewResponse {
    /**
     * <p>
     *          Information about a code review. A code review belongs to the associated repository that contains the reviewed code.
     *       </p>
     */
    CodeReview?: CodeReview;
}
export declare namespace CreateCodeReviewResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CreateCodeReviewResponse) => any;
}
/**
 * <p>
 *          The resource specified in the request was not found.
 *       </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ResourceNotFoundException) => any;
}
export interface DescribeCodeReviewRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn: string | undefined;
}
export declare namespace DescribeCodeReviewRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCodeReviewRequest) => any;
}
export interface DescribeCodeReviewResponse {
    /**
     * <p>
     *          Information about the code review.
     *       </p>
     */
    CodeReview?: CodeReview;
}
export declare namespace DescribeCodeReviewResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeCodeReviewResponse) => any;
}
export interface DescribeRecommendationFeedbackRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn: string | undefined;
    /**
     * <p>
     *          The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
     *       </p>
     */
    RecommendationId: string | undefined;
    /**
     * <p>
     *          Optional parameter to describe the feedback for a given user. If this is not supplied, it defaults to the user making the request.
     *       </p>
     *          <p>
     *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
     *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
     *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
     *       </p>
     */
    UserId?: string;
}
export declare namespace DescribeRecommendationFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecommendationFeedbackRequest) => any;
}
export declare enum Reaction {
    THUMBS_DOWN = "ThumbsDown",
    THUMBS_UP = "ThumbsUp"
}
/**
 * <p>
 *          Information about the recommendation feedback.
 *       </p>
 */
export interface RecommendationFeedback {
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn?: string;
    /**
     * <p>
     *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
     *       </p>
     */
    RecommendationId?: string;
    /**
     * <p>
     *          List for storing reactions. Reactions are utf-8 text code for emojis. You can send an empty list to clear off all your feedback.
     *       </p>
     */
    Reactions?: (Reaction | string)[];
    /**
     * <p>
     *          The ID of the user that made the API call.
     *       </p>
     *          <p>
     *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
     *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
     *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
     *       </p>
     */
    UserId?: string;
    /**
     * <p>
     *          The time at which the feedback was created.
     *       </p>
     */
    CreatedTimeStamp?: Date;
    /**
     * <p>
     *          The time at which the feedback was last updated.
     *       </p>
     */
    LastUpdatedTimeStamp?: Date;
}
export declare namespace RecommendationFeedback {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationFeedback) => any;
}
export interface DescribeRecommendationFeedbackResponse {
    /**
     * <p>
     *          The recommendation feedback given by the user.
     *       </p>
     */
    RecommendationFeedback?: RecommendationFeedback;
}
export declare namespace DescribeRecommendationFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRecommendationFeedbackResponse) => any;
}
export interface DescribeRepositoryAssociationRequest {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    AssociationArn: string | undefined;
}
export declare namespace DescribeRepositoryAssociationRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRepositoryAssociationRequest) => any;
}
export interface DescribeRepositoryAssociationResponse {
    /**
     * <p>Information about the repository association.</p>
     */
    RepositoryAssociation?: RepositoryAssociation;
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeRepositoryAssociationResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DescribeRepositoryAssociationResponse) => any;
}
/**
 * <p>The resource specified in the request was not found.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
    name: "NotFoundException";
    $fault: "client";
    Message?: string;
}
export declare namespace NotFoundException {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: NotFoundException) => any;
}
export interface DisassociateRepositoryRequest {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    AssociationArn: string | undefined;
}
export declare namespace DisassociateRepositoryRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateRepositoryRequest) => any;
}
export interface DisassociateRepositoryResponse {
    /**
     * <p>Information about the disassociated repository.</p>
     */
    RepositoryAssociation?: RepositoryAssociation;
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace DisassociateRepositoryResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: DisassociateRepositoryResponse) => any;
}
export interface ListCodeReviewsRequest {
    /**
     * <p>
     *          List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code>  lists code reviews from GitHub.
     *       </p>
     */
    ProviderTypes?: (ProviderType | string)[];
    /**
     * <p>
     *          List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.
     *       </p>
     *          <p>The valid code review states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Completed</code>: The code review is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Pending</code>: The code review started and has not completed or failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Failed</code>: The code review failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Deleting</code>: The code review is being deleted.
     *             </p>
     *             </li>
     *          </ul>
     */
    States?: (JobState | string)[];
    /**
     * <p>
     *          List of repository names for filtering that needs to be applied before displaying the result.
     *       </p>
     */
    RepositoryNames?: string[];
    /**
     * <p>
     *          The type of code reviews to list in the response.
     *       </p>
     */
    Type: Type | string | undefined;
    /**
     * <p>
     *          The maximum number of results that are returned per call. The default is 100.
     *       </p>
     */
    MaxResults?: number;
    /**
     * <p>
     *          If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
     *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     *       </p>
     */
    NextToken?: string;
}
export declare namespace ListCodeReviewsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCodeReviewsRequest) => any;
}
/**
 * <p>
 *          Information about metrics summaries.
 *       </p>
 */
export interface MetricsSummary {
    /**
     * <p>
     *          Lines of code metered in the code review. For the initial code review pull request and all subsequent revisions,
     *          this includes all lines of code in the files added to the pull request. In subsequent revisions, for files that already
     *          existed in the pull request, this includes only the changed lines of code. In both cases, this does not include non-code lines such as comments
     *          and import statements. For example, if you submit a pull request containing 5 files, each with 500 lines of code, and in
     *          a subsequent revision you added a new file with 200 lines of code, and also modified a total of 25 lines across the initial 5 files,
     *          <code>MeteredLinesOfCodeCount</code> includes the first 5 files (5 * 500 = 2,500 lines), the new file (200 lines) and the 25 changed lines of
     *          code for a total of 2,725 lines of code.
     *       </p>
     */
    MeteredLinesOfCodeCount?: number;
    /**
     * <p>
     *          Total number of recommendations found in the code review.
     *       </p>
     */
    FindingsCount?: number;
}
export declare namespace MetricsSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: MetricsSummary) => any;
}
/**
 * <p>
 *          Information about the summary of the code review.
 *       </p>
 */
export interface CodeReviewSummary {
    /**
     * <p>
     *          The name of the code review.
     *       </p>
     */
    Name?: string;
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn?: string;
    /**
     * <p>
     *          The name of the repository.
     *       </p>
     */
    RepositoryName?: string;
    /**
     * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
     *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.</p>
     */
    Owner?: string;
    /**
     * <p>
     *          The provider type of the repository association.
     *       </p>
     */
    ProviderType?: ProviderType | string;
    /**
     * <p>
     *          The state of the code review.
     *       </p>
     *          <p>The valid code review states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>Completed</code>: The code review is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Pending</code>: The code review started and has not completed or failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Failed</code>: The code review failed.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>Deleting</code>: The code review is being deleted.
     *             </p>
     *             </li>
     *          </ul>
     */
    State?: JobState | string;
    /**
     * <p>
     *          The time, in milliseconds since the epoch, when the code review was created.
     *       </p>
     */
    CreatedTimeStamp?: Date;
    /**
     * <p>
     *          The time, in milliseconds since the epoch, when the code review was last updated.
     *       </p>
     */
    LastUpdatedTimeStamp?: Date;
    /**
     * <p>
     *          The type of the code review.
     *       </p>
     */
    Type?: Type | string;
    /**
     * <p>
     *          The pull request ID for the code review.
     *       </p>
     */
    PullRequestId?: string;
    /**
     * <p>
     *          The statistics from the code review.
     *       </p>
     */
    MetricsSummary?: MetricsSummary;
}
export declare namespace CodeReviewSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: CodeReviewSummary) => any;
}
export interface ListCodeReviewsResponse {
    /**
     * <p>
     *          A list of code reviews that meet the criteria of the request.
     *       </p>
     */
    CodeReviewSummaries?: CodeReviewSummary[];
    /**
     * <p>
     *          Pagination token.
     *       </p>
     */
    NextToken?: string;
}
export declare namespace ListCodeReviewsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListCodeReviewsResponse) => any;
}
export interface ListRecommendationFeedbackRequest {
    /**
     * <p>
     *          If <code>nextToken</code> is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
     *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     *       </p>
     */
    NextToken?: string;
    /**
     * <p>
     *          The maximum number of results that are returned per call. The default is 100.
     *       </p>
     */
    MaxResults?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn: string | undefined;
    /**
     * <p>
     *          An AWS user's account ID or Amazon Resource Name (ARN). Use this ID to query the recommendation feedback for a code review from that user.
     *       </p>
     *          <p>
     *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
     *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
     *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
     *       </p>
     */
    UserIds?: string[];
    /**
     * <p>
     *          Used to query the recommendation feedback for a given recommendation.
     *       </p>
     */
    RecommendationIds?: string[];
}
export declare namespace ListRecommendationFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationFeedbackRequest) => any;
}
/**
 * <p>
 *          Information about recommendation feedback summaries.
 *       </p>
 */
export interface RecommendationFeedbackSummary {
    /**
     * <p>
     *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
     *       </p>
     */
    RecommendationId?: string;
    /**
     * <p>
     *          List for storing reactions. Reactions are utf-8 text code for emojis.
     *       </p>
     */
    Reactions?: (Reaction | string)[];
    /**
     * <p>
     *          The ID of the user that gave the feedback.
     *       </p>
     *          <p>
     *          The <code>UserId</code> is an IAM principal that can be specified as an AWS account ID or an Amazon Resource Name (ARN). For
     *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">
     *             Specifying a Principal</a> in the <i>AWS Identity and Access Management User Guide</i>.
     *       </p>
     */
    UserId?: string;
}
export declare namespace RecommendationFeedbackSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationFeedbackSummary) => any;
}
export interface ListRecommendationFeedbackResponse {
    /**
     * <p> Recommendation feedback summaries corresponding to the code review ARN. </p>
     */
    RecommendationFeedbackSummaries?: RecommendationFeedbackSummary[];
    /**
     * <p>
     *          If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page.
     *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     *       </p>
     */
    NextToken?: string;
}
export declare namespace ListRecommendationFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationFeedbackResponse) => any;
}
export interface ListRecommendationsRequest {
    /**
     * <p>
     *          Pagination token.
     *       </p>
     */
    NextToken?: string;
    /**
     * <p>
     *          The maximum number of results that are returned per call. The default is 100.
     *       </p>
     */
    MaxResults?: number;
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn: string | undefined;
}
export declare namespace ListRecommendationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationsRequest) => any;
}
/**
 * <p>
 *          Information about recommendations.
 *       </p>
 */
export interface RecommendationSummary {
    /**
     * <p>Name of the file on which a recommendation is provided.</p>
     */
    FilePath?: string;
    /**
     * <p>
     *          The recommendation ID that can be used to track the provided recommendations. Later on it can be used to collect the feedback.
     *       </p>
     */
    RecommendationId?: string;
    /**
     * <p>
     *          Start line from where the recommendation is applicable in the source commit or source branch.
     *       </p>
     */
    StartLine?: number;
    /**
     * <p>
     *          Last line where the recommendation is applicable in the source commit or source branch. For a single line comment the start line and end line values are the same.
     *       </p>
     */
    EndLine?: number;
    /**
     * <p>
     *          A description of the recommendation generated by CodeGuru Reviewer for the lines of code between the start line and the end line.
     *       </p>
     */
    Description?: string;
}
export declare namespace RecommendationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RecommendationSummary) => any;
}
export interface ListRecommendationsResponse {
    /**
     * <p>
     *          List of recommendations for the requested code review.
     *       </p>
     */
    RecommendationSummaries?: RecommendationSummary[];
    /**
     * <p>
     *          Pagination token.
     *       </p>
     */
    NextToken?: string;
}
export declare namespace ListRecommendationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRecommendationsResponse) => any;
}
export interface ListRepositoryAssociationsRequest {
    /**
     * <p>List of provider types to use as a filter.</p>
     */
    ProviderTypes?: (ProviderType | string)[];
    /**
     * <p>List of repository association states to use as a filter.</p>
     *          <p>The valid repository association states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Associated</b>: The repository
     *                association is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Associating</b>: CodeGuru Reviewer is:
     *             </p>
     *                <ul>
     *                   <li>
     *                      <p>
     *                      Setting up pull request notifications. This is required
     *                      for pull requests to trigger a CodeGuru Reviewer review.
     *                   </p>
     *                      <note>
     *                         <p>
     *                         If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>,
     *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
     *                         reviews of code in your repository cannot be triggered.
     *                      </p>
     *                      </note>
     *                   </li>
     *                   <li>
     *                      <p>
     *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
     *                      clone code in your repository.
     *                   </p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Failed</b>: The repository failed to associate or disassociate.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
     *                source code access.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association
     *                with this repository if you want to review source code in it later. You can control access to code reviews created in an
     *                associated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to
     *                associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
     *             </p>
     *             </li>
     *          </ul>
     */
    States?: (RepositoryAssociationState | string)[];
    /**
     * <p>List of repository names to use as a filter.</p>
     */
    Names?: string[];
    /**
     * <p>List of owners to use as a filter.
     *         For AWS CodeCommit, it is the name of the CodeCommit account that was
     *         used to associate the repository. For other repository source providers, such as Bitbucket and GitHub Enterprise Server, this is name of the account
     *         that was used to associate the repository. </p>
     */
    Owners?: string[];
    /**
     * <p>The maximum number of repository association results returned by <code>ListRepositoryAssociations</code>
     *          in paginated output. When this parameter is used, <code>ListRepositoryAssociations</code> only returns
     *          <code>maxResults</code> results in a single page with a <code>nextToken</code> response
     *          element. The remaining results of the initial request
     *          can be seen by sending another <code>ListRepositoryAssociations</code> request with the returned
     *          <code>nextToken</code> value.
     *          This value can be between 1 and 100. If this parameter is not used, <code>ListRepositoryAssociations</code>
     *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
     */
    MaxResults?: number;
    /**
     * <p>The <code>nextToken</code> value returned from a previous paginated
     *          <code>ListRepositoryAssociations</code> request where <code>maxResults</code> was used and the results
     *          exceeded the value of that parameter. Pagination continues from the end of the previous results
     *          that returned the <code>nextToken</code> value.
     *       </p>
     *          <note>
     *             <p>Treat this token as an opaque identifier that is only used to retrieve
     *          the next items in a list and not for other programmatic purposes.</p>
     *          </note>
     */
    NextToken?: string;
}
export declare namespace ListRepositoryAssociationsRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoryAssociationsRequest) => any;
}
/**
 * <p>Summary information about a repository association. The
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
 *                <code>ListRepositoryAssociations</code>
 *             </a>
 *          operation returns a list of <code>RepositoryAssociationSummary</code> objects.</p>
 */
export interface RepositoryAssociationSummary {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    AssociationArn?: string;
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is
     *          <code>arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id</code>. For more information, see
     *          <a href="https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html">
     *                <code>Connection</code>
     *             </a> in
     *          the <i>AWS CodeStar Connections API Reference</i>.
     *       </p>
     */
    ConnectionArn?: string;
    /**
     * <p>The time, in milliseconds since the epoch, since the repository association
     *         was last updated.
     *       </p>
     */
    LastUpdatedTimeStamp?: Date;
    /**
     * <p>
     *          The repository association ID.
     *       </p>
     */
    AssociationId?: string;
    /**
     * <p>The name of the repository association.</p>
     */
    Name?: string;
    /**
     * <p>The owner of the repository. For an AWS CodeCommit repository, this is the AWS account ID of the
     *       account that owns the repository. For a GitHub, GitHub Enterprise Server, or Bitbucket repository, this is the username for the account that owns the repository.</p>
     */
    Owner?: string;
    /**
     * <p>The provider type of the repository association.</p>
     */
    ProviderType?: ProviderType | string;
    /**
     * <p>The state of the repository association.</p>
     *          <p>The valid repository association states are:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Associated</b>: The repository
     *                association is complete.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Associating</b>: CodeGuru Reviewer is:
     *             </p>
     *                <ul>
     *                   <li>
     *                      <p>
     *                      Setting up pull request notifications. This is required
     *                      for pull requests to trigger a CodeGuru Reviewer review.
     *                   </p>
     *                      <note>
     *                         <p>
     *                         If your repository <code>ProviderType</code> is <code>GitHub</code>, <code>GitHub Enterprise Server</code>, or <code>Bitbucket</code>,
     *                         CodeGuru Reviewer creates webhooks in your repository to trigger CodeGuru Reviewer reviews. If you delete these webhooks,
     *                         reviews of code in your repository cannot be triggered.
     *                      </p>
     *                      </note>
     *                   </li>
     *                   <li>
     *                      <p>
     *                      Setting up source code access. This is required for CodeGuru Reviewer to securely
     *                      clone code in your repository.
     *                   </p>
     *                   </li>
     *                </ul>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Failed</b>: The repository failed to associate or disassociate.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociating</b>: CodeGuru Reviewer is removing the repository's pull request notifications and
     *                source code access.
     *             </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Disassociated</b>: CodeGuru Reviewer successfully disassociated the repository. You can create a new association
     *                with this repository if you want to review source code in it later. You can control access to code reviews created in an
     *                associated repository with tags after it has been disassociated. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/auth-and-access-control-using-tags.html">Using tags to control access to
     *                associated repositories</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
     *             </p>
     *             </li>
     *          </ul>
     */
    State?: RepositoryAssociationState | string;
}
export declare namespace RepositoryAssociationSummary {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: RepositoryAssociationSummary) => any;
}
export interface ListRepositoryAssociationsResponse {
    /**
     * <p>A list of repository associations that meet the criteria of the request.</p>
     */
    RepositoryAssociationSummaries?: RepositoryAssociationSummary[];
    /**
     * <p>The <code>nextToken</code> value to include in a future <code>ListRecommendations</code> request.
     *          When the results of a <code>ListRecommendations</code> request exceed <code>maxResults</code>, this
     *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
     *          results to return. </p>
     */
    NextToken?: string;
}
export declare namespace ListRepositoryAssociationsResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListRepositoryAssociationsResponse) => any;
}
export interface ListTagsForResourceRequest {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    resourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceRequest) => any;
}
export interface ListTagsForResourceResponse {
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: ListTagsForResourceResponse) => any;
}
export interface PutRecommendationFeedbackRequest {
    /**
     * <p>The Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReview.html">
     *                <code>CodeReview</code>
     *             </a> object.
     *       </p>
     */
    CodeReviewArn: string | undefined;
    /**
     * <p>
     *          The recommendation ID that can be used to track the provided recommendations and then to collect the feedback.
     *       </p>
     */
    RecommendationId: string | undefined;
    /**
     * <p>
     *          List for storing reactions. Reactions are utf-8 text code for emojis. If you send an empty list it clears all your feedback.
     *       </p>
     */
    Reactions: (Reaction | string)[] | undefined;
}
export declare namespace PutRecommendationFeedbackRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRecommendationFeedbackRequest) => any;
}
export interface PutRecommendationFeedbackResponse {
}
export declare namespace PutRecommendationFeedbackResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: PutRecommendationFeedbackResponse) => any;
}
export interface TagResourceRequest {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    resourceArn: string | undefined;
    /**
     * <p>
     * 			An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * 		</p>
     * 		       <ul>
     *             <li>
     * 				           <p>A <i>tag key</i> (for example, <code>CostCenter</code>,
     * 					<code>Environment</code>, <code>Project</code>, or <code>Secret</code>). Tag
     * 					keys are case sensitive.</p>
     * 			         </li>
     *             <li>
     * 				           <p>An optional field known as a <i>tag value</i> (for example,
     * 					<code>111122223333</code>, <code>Production</code>, or a team name).
     * 					Omitting the tag value is the same as using an empty string. Like tag keys, tag
     * 					values are case sensitive.</p>
     * 			         </li>
     *          </ul>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceRequest) => any;
}
export interface TagResourceResponse {
}
export declare namespace TagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: TagResourceResponse) => any;
}
export interface UntagResourceRequest {
    /**
     * <p>
     *          The Amazon Resource Name (ARN) of the
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object.
     *          You can retrieve this ARN by calling
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html">
     *                <code>ListRepositoryAssociations</code>
     *             </a>.
     *       </p>
     */
    resourceArn: string | undefined;
    /**
     * <p>A list of the keys for each tag you want to remove from an associated repository.</p>
     */
    TagKeys: string[] | undefined;
}
export declare namespace UntagResourceRequest {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceRequest) => any;
}
export interface UntagResourceResponse {
}
export declare namespace UntagResourceResponse {
    /**
     * @internal
     */
    const filterSensitiveLog: (obj: UntagResourceResponse) => any;
}
