import { BatchCheckLayerAvailabilityCommandInput, BatchCheckLayerAvailabilityCommandOutput } from "../commands/BatchCheckLayerAvailabilityCommand";
import { BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput } from "../commands/BatchDeleteImageCommand";
import { BatchGetImageCommandInput, BatchGetImageCommandOutput } from "../commands/BatchGetImageCommand";
import { CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput } from "../commands/CompleteLayerUploadCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import { DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput } from "../commands/DeleteLifecyclePolicyCommand";
import { DeleteRegistryPolicyCommandInput, DeleteRegistryPolicyCommandOutput } from "../commands/DeleteRegistryPolicyCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import { DeleteRepositoryPolicyCommandInput, DeleteRepositoryPolicyCommandOutput } from "../commands/DeleteRepositoryPolicyCommand";
import { DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput } from "../commands/DescribeImageScanFindingsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "../commands/DescribeImagesCommand";
import { DescribeRegistryCommandInput, DescribeRegistryCommandOutput } from "../commands/DescribeRegistryCommand";
import { DescribeRepositoriesCommandInput, DescribeRepositoriesCommandOutput } from "../commands/DescribeRepositoriesCommand";
import { GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput } from "../commands/GetAuthorizationTokenCommand";
import { GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput } from "../commands/GetDownloadUrlForLayerCommand";
import { GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput } from "../commands/GetLifecyclePolicyCommand";
import { GetLifecyclePolicyPreviewCommandInput, GetLifecyclePolicyPreviewCommandOutput } from "../commands/GetLifecyclePolicyPreviewCommand";
import { GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput } from "../commands/GetRegistryPolicyCommand";
import { GetRepositoryPolicyCommandInput, GetRepositoryPolicyCommandOutput } from "../commands/GetRepositoryPolicyCommand";
import { InitiateLayerUploadCommandInput, InitiateLayerUploadCommandOutput } from "../commands/InitiateLayerUploadCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { PutImageCommandInput, PutImageCommandOutput } from "../commands/PutImageCommand";
import { PutImageScanningConfigurationCommandInput, PutImageScanningConfigurationCommandOutput } from "../commands/PutImageScanningConfigurationCommand";
import { PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput } from "../commands/PutImageTagMutabilityCommand";
import { PutLifecyclePolicyCommandInput, PutLifecyclePolicyCommandOutput } from "../commands/PutLifecyclePolicyCommand";
import { PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput } from "../commands/PutRegistryPolicyCommand";
import { PutReplicationConfigurationCommandInput, PutReplicationConfigurationCommandOutput } from "../commands/PutReplicationConfigurationCommand";
import { SetRepositoryPolicyCommandInput, SetRepositoryPolicyCommandOutput } from "../commands/SetRepositoryPolicyCommand";
import { StartImageScanCommandInput, StartImageScanCommandOutput } from "../commands/StartImageScanCommand";
import { StartLifecyclePolicyPreviewCommandInput, StartLifecyclePolicyPreviewCommandOutput } from "../commands/StartLifecyclePolicyPreviewCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UploadLayerPartCommandInput, UploadLayerPartCommandOutput } from "../commands/UploadLayerPartCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1BatchCheckLayerAvailabilityCommand: (input: BatchCheckLayerAvailabilityCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchDeleteImageCommand: (input: BatchDeleteImageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchGetImageCommand: (input: BatchGetImageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CompleteLayerUploadCommand: (input: CompleteLayerUploadCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateRepositoryCommand: (input: CreateRepositoryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLifecyclePolicyCommand: (input: DeleteLifecyclePolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteRegistryPolicyCommand: (input: DeleteRegistryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteRepositoryCommand: (input: DeleteRepositoryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteRepositoryPolicyCommand: (input: DeleteRepositoryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImagesCommand: (input: DescribeImagesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeImageScanFindingsCommand: (input: DescribeImageScanFindingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeRegistryCommand: (input: DescribeRegistryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeRepositoriesCommand: (input: DescribeRepositoriesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetAuthorizationTokenCommand: (input: GetAuthorizationTokenCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDownloadUrlForLayerCommand: (input: GetDownloadUrlForLayerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLifecyclePolicyCommand: (input: GetLifecyclePolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLifecyclePolicyPreviewCommand: (input: GetLifecyclePolicyPreviewCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetRegistryPolicyCommand: (input: GetRegistryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetRepositoryPolicyCommand: (input: GetRepositoryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1InitiateLayerUploadCommand: (input: InitiateLayerUploadCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListImagesCommand: (input: ListImagesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutImageCommand: (input: PutImageCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutImageScanningConfigurationCommand: (input: PutImageScanningConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutImageTagMutabilityCommand: (input: PutImageTagMutabilityCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutLifecyclePolicyCommand: (input: PutLifecyclePolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutRegistryPolicyCommand: (input: PutRegistryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutReplicationConfigurationCommand: (input: PutReplicationConfigurationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SetRepositoryPolicyCommand: (input: SetRepositoryPolicyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartImageScanCommand: (input: StartImageScanCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartLifecyclePolicyPreviewCommand: (input: StartLifecyclePolicyPreviewCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UploadLayerPartCommand: (input: UploadLayerPartCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1BatchCheckLayerAvailabilityCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchCheckLayerAvailabilityCommandOutput>;
export declare const deserializeAws_json1_1BatchDeleteImageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchDeleteImageCommandOutput>;
export declare const deserializeAws_json1_1BatchGetImageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchGetImageCommandOutput>;
export declare const deserializeAws_json1_1CompleteLayerUploadCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CompleteLayerUploadCommandOutput>;
export declare const deserializeAws_json1_1CreateRepositoryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateRepositoryCommandOutput>;
export declare const deserializeAws_json1_1DeleteLifecyclePolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLifecyclePolicyCommandOutput>;
export declare const deserializeAws_json1_1DeleteRegistryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRegistryPolicyCommandOutput>;
export declare const deserializeAws_json1_1DeleteRepositoryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRepositoryCommandOutput>;
export declare const deserializeAws_json1_1DeleteRepositoryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteRepositoryPolicyCommandOutput>;
export declare const deserializeAws_json1_1DescribeImagesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeImagesCommandOutput>;
export declare const deserializeAws_json1_1DescribeImageScanFindingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeImageScanFindingsCommandOutput>;
export declare const deserializeAws_json1_1DescribeRegistryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRegistryCommandOutput>;
export declare const deserializeAws_json1_1DescribeRepositoriesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeRepositoriesCommandOutput>;
export declare const deserializeAws_json1_1GetAuthorizationTokenCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetAuthorizationTokenCommandOutput>;
export declare const deserializeAws_json1_1GetDownloadUrlForLayerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDownloadUrlForLayerCommandOutput>;
export declare const deserializeAws_json1_1GetLifecyclePolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLifecyclePolicyCommandOutput>;
export declare const deserializeAws_json1_1GetLifecyclePolicyPreviewCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLifecyclePolicyPreviewCommandOutput>;
export declare const deserializeAws_json1_1GetRegistryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRegistryPolicyCommandOutput>;
export declare const deserializeAws_json1_1GetRepositoryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRepositoryPolicyCommandOutput>;
export declare const deserializeAws_json1_1InitiateLayerUploadCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InitiateLayerUploadCommandOutput>;
export declare const deserializeAws_json1_1ListImagesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListImagesCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1PutImageCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutImageCommandOutput>;
export declare const deserializeAws_json1_1PutImageScanningConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutImageScanningConfigurationCommandOutput>;
export declare const deserializeAws_json1_1PutImageTagMutabilityCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutImageTagMutabilityCommandOutput>;
export declare const deserializeAws_json1_1PutLifecyclePolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutLifecyclePolicyCommandOutput>;
export declare const deserializeAws_json1_1PutRegistryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRegistryPolicyCommandOutput>;
export declare const deserializeAws_json1_1PutReplicationConfigurationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutReplicationConfigurationCommandOutput>;
export declare const deserializeAws_json1_1SetRepositoryPolicyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SetRepositoryPolicyCommandOutput>;
export declare const deserializeAws_json1_1StartImageScanCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartImageScanCommandOutput>;
export declare const deserializeAws_json1_1StartLifecyclePolicyPreviewCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartLifecyclePolicyPreviewCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UploadLayerPartCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UploadLayerPartCommandOutput>;
