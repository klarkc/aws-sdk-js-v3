import { CodeGuruReviewerClient } from "./CodeGuruReviewerClient";
import { AssociateRepositoryCommandInput, AssociateRepositoryCommandOutput } from "./commands/AssociateRepositoryCommand";
import { CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput } from "./commands/CreateCodeReviewCommand";
import { DescribeCodeReviewCommandInput, DescribeCodeReviewCommandOutput } from "./commands/DescribeCodeReviewCommand";
import { DescribeRecommendationFeedbackCommandInput, DescribeRecommendationFeedbackCommandOutput } from "./commands/DescribeRecommendationFeedbackCommand";
import { DescribeRepositoryAssociationCommandInput, DescribeRepositoryAssociationCommandOutput } from "./commands/DescribeRepositoryAssociationCommand";
import { DisassociateRepositoryCommandInput, DisassociateRepositoryCommandOutput } from "./commands/DisassociateRepositoryCommand";
import { ListCodeReviewsCommandInput, ListCodeReviewsCommandOutput } from "./commands/ListCodeReviewsCommand";
import { ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput } from "./commands/ListRecommendationFeedbackCommand";
import { ListRecommendationsCommandInput, ListRecommendationsCommandOutput } from "./commands/ListRecommendationsCommand";
import { ListRepositoryAssociationsCommandInput, ListRepositoryAssociationsCommandOutput } from "./commands/ListRepositoryAssociationsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutRecommendationFeedbackCommandInput, PutRecommendationFeedbackCommandOutput } from "./commands/PutRecommendationFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This section provides documentation for the Amazon CodeGuru Reviewer API operations. CodeGuru Reviewer is a service
 *          that uses program analysis and machine learning to detect potential defects that are difficult for developers to find and recommendations to
 *          address them in your Java and Python code.</p>
 *
 *          <p>By proactively detecting and providing recommendations for addressing code defects and implementing best practices, CodeGuru Reviewer
 *             improves the overall quality and maintainability of your code base during the code review stage. For more information about CodeGuru Reviewer, see the
 *             <i>
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/welcome.html">Amazon CodeGuru Reviewer User Guide</a>.</i>
 *          </p>
 *
 *          <p>
 *          To improve the security of your CodeGuru Reviewer API calls, you can establish a private connection between your VPC and CodeGuru Reviewer by
 *          creating an <i>interface VPC endpoint</i>. For more information, see
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/vpc-interface-endpoints.html">CodeGuru Reviewer and interface
 *             VPC endpoints (AWS PrivateLink)</a> in the <i>Amazon CodeGuru Reviewer User Guide</i>.
 *       </p>
 */
export declare class CodeGuruReviewer extends CodeGuruReviewerClient {
    /**
     * <p>
     *          Use to associate an AWS CodeCommit repository or a repostory managed by
     *          AWS CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a
     *         repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides
     *         automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
     *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
     *         </p>
     *
     *          <p>If you associate a CodeCommit repository, it must be in the same
     *          AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured.</p>
     *
     *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by AWS CodeStar
     *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in
     *          the <i>Amazon CodeGuru Reviewer User Guide.</i>
     *          </p>
     *
     *          <note>
     *             <p>
     *             You cannot use the CodeGuru Reviewer SDK or the AWS CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate
     *             a GitHub repository, use the console. For more information, see
     *             <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting
     *             started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
     *             </p>
     *          </note>
     */
    associateRepository(args: AssociateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<AssociateRepositoryCommandOutput>;
    associateRepository(args: AssociateRepositoryCommandInput, cb: (err: any, data?: AssociateRepositoryCommandOutput) => void): void;
    associateRepository(args: AssociateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateRepositoryCommandOutput) => void): void;
    /**
     * <p>
     *          Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
     *                <code>CodeReviewType</code>
     *             </a>
     *          of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository.
     *          <code>PullRequest</code> code reviews are automatically triggered by a pull request so cannot be created using this method.
     *       </p>
     */
    createCodeReview(args: CreateCodeReviewCommandInput, options?: __HttpHandlerOptions): Promise<CreateCodeReviewCommandOutput>;
    createCodeReview(args: CreateCodeReviewCommandInput, cb: (err: any, data?: CreateCodeReviewCommandOutput) => void): void;
    createCodeReview(args: CreateCodeReviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCodeReviewCommandOutput) => void): void;
    /**
     * <p> Returns the metadata associated with the code review along with its status.</p>
     */
    describeCodeReview(args: DescribeCodeReviewCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCodeReviewCommandOutput>;
    describeCodeReview(args: DescribeCodeReviewCommandInput, cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void): void;
    describeCodeReview(args: DescribeCodeReviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCodeReviewCommandOutput) => void): void;
    /**
     * <p>
     *          Describes the customer feedback for a CodeGuru Reviewer recommendation.
     *       </p>
     */
    describeRecommendationFeedback(args: DescribeRecommendationFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRecommendationFeedbackCommandOutput>;
    describeRecommendationFeedback(args: DescribeRecommendationFeedbackCommandInput, cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void): void;
    describeRecommendationFeedback(args: DescribeRecommendationFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRecommendationFeedbackCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html">
     *                <code>RepositoryAssociation</code>
     *             </a> object
     *          that contains information about the requested repository association.
     *       </p>
     */
    describeRepositoryAssociation(args: DescribeRepositoryAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRepositoryAssociationCommandOutput>;
    describeRepositoryAssociation(args: DescribeRepositoryAssociationCommandInput, cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void): void;
    describeRepositoryAssociation(args: DescribeRepositoryAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRepositoryAssociationCommandOutput) => void): void;
    /**
     * <p>Removes the association between Amazon CodeGuru Reviewer and a repository.</p>
     */
    disassociateRepository(args: DisassociateRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateRepositoryCommandOutput>;
    disassociateRepository(args: DisassociateRepositoryCommandInput, cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void): void;
    disassociateRepository(args: DisassociateRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateRepositoryCommandOutput) => void): void;
    /**
     * <p>
     *          Lists all the code reviews that the customer has created in the past 90 days.
     *       </p>
     */
    listCodeReviews(args: ListCodeReviewsCommandInput, options?: __HttpHandlerOptions): Promise<ListCodeReviewsCommandOutput>;
    listCodeReviews(args: ListCodeReviewsCommandInput, cb: (err: any, data?: ListCodeReviewsCommandOutput) => void): void;
    listCodeReviews(args: ListCodeReviewsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCodeReviewsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">
     *                <code>RecommendationFeedbackSummary</code>
     *             </a>
     *          objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
     *       </p>
     */
    listRecommendationFeedback(args: ListRecommendationFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<ListRecommendationFeedbackCommandOutput>;
    listRecommendationFeedback(args: ListRecommendationFeedbackCommandInput, cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void): void;
    listRecommendationFeedback(args: ListRecommendationFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecommendationFeedbackCommandOutput) => void): void;
    /**
     * <p>
     *          Returns the list of all recommendations for a completed code review.
     *       </p>
     */
    listRecommendations(args: ListRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ListRecommendationsCommandOutput>;
    listRecommendations(args: ListRecommendationsCommandInput, cb: (err: any, data?: ListRecommendationsCommandOutput) => void): void;
    listRecommendations(args: ListRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecommendationsCommandOutput) => void): void;
    /**
     * <p>
     *          Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html">
     *                <code>RepositoryAssociationSummary</code>
     *             </a> objects that
     *          contain summary information about a repository association. You can filter the returned list by
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType">
     *                <code>ProviderType</code>
     *             </a>,
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name">
     *                <code>Name</code>
     *             </a>,
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State">
     *                <code>State</code>
     *             </a>, and
     *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner">
     *                <code>Owner</code>
     *             </a>.
     *       </p>
     */
    listRepositoryAssociations(args: ListRepositoryAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListRepositoryAssociationsCommandOutput>;
    listRepositoryAssociations(args: ListRepositoryAssociationsCommandInput, cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void): void;
    listRepositoryAssociations(args: ListRepositoryAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRepositoryAssociationsCommandOutput) => void): void;
    /**
     * <p>Returns the list of tags associated with an associated repository resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>
     *          Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
     *       </p>
     */
    putRecommendationFeedback(args: PutRecommendationFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutRecommendationFeedbackCommandOutput>;
    putRecommendationFeedback(args: PutRecommendationFeedbackCommandInput, cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void): void;
    putRecommendationFeedback(args: PutRecommendationFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRecommendationFeedbackCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to an associated repository.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes a tag from an associated repository.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
