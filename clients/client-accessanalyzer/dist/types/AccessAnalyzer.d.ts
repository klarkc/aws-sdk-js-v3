import { AccessAnalyzerClient } from "./AccessAnalyzerClient";
import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "./commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "./commands/CancelPolicyGenerationCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "./commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "./commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "./commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "./commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "./commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "./commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "./commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "./commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "./commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "./commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "./commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "./commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "./commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "./commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "./commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "./commands/ValidatePolicyCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external
 *          principal can be another AWS account, a root user, an IAM user or role, a federated
 *          user, an AWS service, or an anonymous user. You can also use Access Analyzer to preview and
 *          validate public and cross-account access to your resources before deploying permissions
 *          changes. This guide describes the AWS IAM Access Analyzer operations that you can call
 *          programmatically. For general information about Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
export declare class AccessAnalyzer extends AccessAnalyzerClient {
  /**
   * <p>Retroactively applies the archive rule to existing findings that meet the archive rule
   *          criteria.</p>
   */
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyArchiveRuleCommandOutput>;
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    cb: (err: any, data?: ApplyArchiveRuleCommandOutput) => void
  ): void;
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyArchiveRuleCommandOutput) => void
  ): void;
  /**
   * <p>Cancels the requested policy generation.</p>
   */
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPolicyGenerationCommandOutput>;
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    cb: (err: any, data?: CancelPolicyGenerationCommandOutput) => void
  ): void;
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPolicyGenerationCommandOutput) => void
  ): void;
  /**
   * <p>Creates an access preview that allows you to preview Access Analyzer findings for your resource
   *          before deploying resource permissions.</p>
   */
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPreviewCommandOutput>;
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    cb: (err: any, data?: CreateAccessPreviewCommandOutput) => void
  ): void;
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPreviewCommandOutput) => void
  ): void;
  /**
   * <p>Creates an analyzer for your account.</p>
   */
  createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalyzerCommandOutput>;
  createAnalyzer(args: CreateAnalyzerCommandInput, cb: (err: any, data?: CreateAnalyzerCommandOutput) => void): void;
  createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalyzerCommandOutput) => void
  ): void;
  /**
   * <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive
   *          new findings that meet the criteria you define when you create the rule.</p>
   *          <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">Access Analyzer filter keys</a> in the <b>IAM User
   *          Guide</b>.</p>
   */
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveRuleCommandOutput>;
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled for the
   *          account or organization in the current or specific Region. All findings that were generated
   *          by the analyzer are deleted. You cannot undo this action.</p>
   */
  deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalyzerCommandOutput>;
  deleteAnalyzer(args: DeleteAnalyzerCommandInput, cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void): void;
  deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void
  ): void;
  /**
   * <p>Deletes the specified archive rule.</p>
   */
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveRuleCommandOutput>;
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about an access preview for the specified analyzer.</p>
   */
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPreviewCommandOutput>;
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    cb: (err: any, data?: GetAccessPreviewCommandOutput) => void
  ): void;
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPreviewCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about a resource that was analyzed.</p>
   */
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalyzedResourceCommandOutput>;
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about the specified analyzer.</p>
   */
  getAnalyzer(args: GetAnalyzerCommandInput, options?: __HttpHandlerOptions): Promise<GetAnalyzerCommandOutput>;
  getAnalyzer(args: GetAnalyzerCommandInput, cb: (err: any, data?: GetAnalyzerCommandOutput) => void): void;
  getAnalyzer(
    args: GetAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzerCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about an archive rule.</p>
   *          <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">Access Analyzer filter keys</a> in the <b>IAM User
   *          Guide</b>.</p>
   */
  getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveRuleCommandOutput>;
  getArchiveRule(args: GetArchiveRuleCommandInput, cb: (err: any, data?: GetArchiveRuleCommandOutput) => void): void;
  getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveRuleCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves information about the specified finding.</p>
   */
  getFinding(args: GetFindingCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingCommandOutput>;
  getFinding(args: GetFindingCommandInput, cb: (err: any, data?: GetFindingCommandOutput) => void): void;
  getFinding(
    args: GetFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves the policy that was generated using <code>StartPolicyGeneration</code>.
   *       </p>
   */
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeneratedPolicyCommandOutput>;
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    cb: (err: any, data?: GetGeneratedPolicyCommandOutput) => void
  ): void;
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeneratedPolicyCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of access preview findings generated by the specified access
   *          preview.</p>
   */
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPreviewFindingsCommandOutput>;
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    cb: (err: any, data?: ListAccessPreviewFindingsCommandOutput) => void
  ): void;
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPreviewFindingsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of access previews for the specified analyzer.</p>
   */
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPreviewsCommandOutput>;
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    cb: (err: any, data?: ListAccessPreviewsCommandOutput) => void
  ): void;
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPreviewsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of resources of the specified type that have been analyzed by the
   *          specified analyzer..</p>
   */
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyzedResourcesCommandOutput>;
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of analyzers.</p>
   */
  listAnalyzers(args: ListAnalyzersCommandInput, options?: __HttpHandlerOptions): Promise<ListAnalyzersCommandOutput>;
  listAnalyzers(args: ListAnalyzersCommandInput, cb: (err: any, data?: ListAnalyzersCommandOutput) => void): void;
  listAnalyzers(
    args: ListAnalyzersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzersCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
   */
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchiveRulesCommandOutput>;
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of findings generated by the specified analyzer.</p>
   *          <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">Access Analyzer filter keys</a> in the <b>IAM User
   *          Guide</b>.</p>
   */
  listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
  listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  /**
   * <p>Lists all of the policy generations requested in the last seven days.</p>
   */
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyGenerationsCommandOutput>;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
  ): void;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
  ): void;
  /**
   * <p>Retrieves a list of tags applied to the specified resource.</p>
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
   * <p>Starts the policy generation request.</p>
   */
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPolicyGenerationCommandOutput>;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;
  /**
   * <p>Immediately starts a scan of the policies applied to the specified resource.</p>
   */
  startResourceScan(
    args: StartResourceScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceScanCommandOutput>;
  startResourceScan(
    args: StartResourceScanCommandInput,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
  ): void;
  startResourceScan(
    args: StartResourceScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
  ): void;
  /**
   * <p>Adds a tag to the specified resource.</p>
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Removes a tag from the specified resource.</p>
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  /**
   * <p>Updates the criteria and values for the specified archive rule.</p>
   */
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveRuleCommandOutput>;
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;
  /**
   * <p>Updates the status for the specified findings.</p>
   */
  updateFindings(
    args: UpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsCommandOutput>;
  updateFindings(args: UpdateFindingsCommandInput, cb: (err: any, data?: UpdateFindingsCommandOutput) => void): void;
  updateFindings(
    args: UpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;
  /**
   * <p>Requests the validation of a policy and returns a list of findings. The findings help
   *          you identify issues and provide actionable recommendations to resolve the issue and enable
   *          you to author functional policies that meet security best practices. </p>
   */
  validatePolicy(
    args: ValidatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePolicyCommandOutput>;
  validatePolicy(args: ValidatePolicyCommandInput, cb: (err: any, data?: ValidatePolicyCommandOutput) => void): void;
  validatePolicy(
    args: ValidatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePolicyCommandOutput) => void
  ): void;
}
