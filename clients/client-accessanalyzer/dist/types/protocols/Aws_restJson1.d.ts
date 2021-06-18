import { ApplyArchiveRuleCommandInput, ApplyArchiveRuleCommandOutput } from "../commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "../commands/CancelPolicyGenerationCommand";
import {
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "../commands/CreateAccessPreviewCommand";
import { CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput } from "../commands/CreateAnalyzerCommand";
import { CreateArchiveRuleCommandInput, CreateArchiveRuleCommandOutput } from "../commands/CreateArchiveRuleCommand";
import { DeleteAnalyzerCommandInput, DeleteAnalyzerCommandOutput } from "../commands/DeleteAnalyzerCommand";
import { DeleteArchiveRuleCommandInput, DeleteArchiveRuleCommandOutput } from "../commands/DeleteArchiveRuleCommand";
import { GetAccessPreviewCommandInput, GetAccessPreviewCommandOutput } from "../commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "../commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "../commands/GetAnalyzerCommand";
import { GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput } from "../commands/GetArchiveRuleCommand";
import { GetFindingCommandInput, GetFindingCommandOutput } from "../commands/GetFindingCommand";
import { GetGeneratedPolicyCommandInput, GetGeneratedPolicyCommandOutput } from "../commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand";
import { ListAccessPreviewsCommandInput, ListAccessPreviewsCommandOutput } from "../commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "../commands/ListAnalyzedResourcesCommand";
import { ListAnalyzersCommandInput, ListAnalyzersCommandOutput } from "../commands/ListAnalyzersCommand";
import { ListArchiveRulesCommandInput, ListArchiveRulesCommandOutput } from "../commands/ListArchiveRulesCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "../commands/ListFindingsCommand";
import {
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "../commands/StartPolicyGenerationCommand";
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "../commands/StartResourceScanCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateArchiveRuleCommandInput, UpdateArchiveRuleCommandOutput } from "../commands/UpdateArchiveRuleCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand";
import { ValidatePolicyCommandInput, ValidatePolicyCommandOutput } from "../commands/ValidatePolicyCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1ApplyArchiveRuleCommand: (
  input: ApplyArchiveRuleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CancelPolicyGenerationCommand: (
  input: CancelPolicyGenerationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAccessPreviewCommand: (
  input: CreateAccessPreviewCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateAnalyzerCommand: (
  input: CreateAnalyzerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateArchiveRuleCommand: (
  input: CreateArchiveRuleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteAnalyzerCommand: (
  input: DeleteAnalyzerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteArchiveRuleCommand: (
  input: DeleteArchiveRuleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAccessPreviewCommand: (
  input: GetAccessPreviewCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAnalyzedResourceCommand: (
  input: GetAnalyzedResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetAnalyzerCommand: (
  input: GetAnalyzerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetArchiveRuleCommand: (
  input: GetArchiveRuleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetFindingCommand: (
  input: GetFindingCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetGeneratedPolicyCommand: (
  input: GetGeneratedPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAccessPreviewFindingsCommand: (
  input: ListAccessPreviewFindingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAccessPreviewsCommand: (
  input: ListAccessPreviewsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAnalyzedResourcesCommand: (
  input: ListAnalyzedResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAnalyzersCommand: (
  input: ListAnalyzersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListArchiveRulesCommand: (
  input: ListArchiveRulesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListFindingsCommand: (
  input: ListFindingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListPolicyGenerationsCommand: (
  input: ListPolicyGenerationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartPolicyGenerationCommand: (
  input: StartPolicyGenerationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartResourceScanCommand: (
  input: StartResourceScanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateArchiveRuleCommand: (
  input: UpdateArchiveRuleCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateFindingsCommand: (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ValidatePolicyCommand: (
  input: ValidatePolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1ApplyArchiveRuleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ApplyArchiveRuleCommandOutput>;
export declare const deserializeAws_restJson1CancelPolicyGenerationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CancelPolicyGenerationCommandOutput>;
export declare const deserializeAws_restJson1CreateAccessPreviewCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAccessPreviewCommandOutput>;
export declare const deserializeAws_restJson1CreateAnalyzerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateAnalyzerCommandOutput>;
export declare const deserializeAws_restJson1CreateArchiveRuleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateArchiveRuleCommandOutput>;
export declare const deserializeAws_restJson1DeleteAnalyzerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteAnalyzerCommandOutput>;
export declare const deserializeAws_restJson1DeleteArchiveRuleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteArchiveRuleCommandOutput>;
export declare const deserializeAws_restJson1GetAccessPreviewCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAccessPreviewCommandOutput>;
export declare const deserializeAws_restJson1GetAnalyzedResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAnalyzedResourceCommandOutput>;
export declare const deserializeAws_restJson1GetAnalyzerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetAnalyzerCommandOutput>;
export declare const deserializeAws_restJson1GetArchiveRuleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetArchiveRuleCommandOutput>;
export declare const deserializeAws_restJson1GetFindingCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetFindingCommandOutput>;
export declare const deserializeAws_restJson1GetGeneratedPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetGeneratedPolicyCommandOutput>;
export declare const deserializeAws_restJson1ListAccessPreviewFindingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAccessPreviewFindingsCommandOutput>;
export declare const deserializeAws_restJson1ListAccessPreviewsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAccessPreviewsCommandOutput>;
export declare const deserializeAws_restJson1ListAnalyzedResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAnalyzedResourcesCommandOutput>;
export declare const deserializeAws_restJson1ListAnalyzersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListAnalyzersCommandOutput>;
export declare const deserializeAws_restJson1ListArchiveRulesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListArchiveRulesCommandOutput>;
export declare const deserializeAws_restJson1ListFindingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListFindingsCommandOutput>;
export declare const deserializeAws_restJson1ListPolicyGenerationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListPolicyGenerationsCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1StartPolicyGenerationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartPolicyGenerationCommandOutput>;
export declare const deserializeAws_restJson1StartResourceScanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartResourceScanCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateArchiveRuleCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateArchiveRuleCommandOutput>;
export declare const deserializeAws_restJson1UpdateFindingsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateFindingsCommandOutput>;
export declare const deserializeAws_restJson1ValidatePolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ValidatePolicyCommandOutput>;
