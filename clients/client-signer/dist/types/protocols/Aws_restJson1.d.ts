import { AddProfilePermissionCommandInput, AddProfilePermissionCommandOutput } from "../commands/AddProfilePermissionCommand";
import { CancelSigningProfileCommandInput, CancelSigningProfileCommandOutput } from "../commands/CancelSigningProfileCommand";
import { DescribeSigningJobCommandInput, DescribeSigningJobCommandOutput } from "../commands/DescribeSigningJobCommand";
import { GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput } from "../commands/GetSigningPlatformCommand";
import { GetSigningProfileCommandInput, GetSigningProfileCommandOutput } from "../commands/GetSigningProfileCommand";
import { ListProfilePermissionsCommandInput, ListProfilePermissionsCommandOutput } from "../commands/ListProfilePermissionsCommand";
import { ListSigningJobsCommandInput, ListSigningJobsCommandOutput } from "../commands/ListSigningJobsCommand";
import { ListSigningPlatformsCommandInput, ListSigningPlatformsCommandOutput } from "../commands/ListSigningPlatformsCommand";
import { ListSigningProfilesCommandInput, ListSigningProfilesCommandOutput } from "../commands/ListSigningProfilesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { PutSigningProfileCommandInput, PutSigningProfileCommandOutput } from "../commands/PutSigningProfileCommand";
import { RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput } from "../commands/RemoveProfilePermissionCommand";
import { RevokeSignatureCommandInput, RevokeSignatureCommandOutput } from "../commands/RevokeSignatureCommand";
import { RevokeSigningProfileCommandInput, RevokeSigningProfileCommandOutput } from "../commands/RevokeSigningProfileCommand";
import { StartSigningJobCommandInput, StartSigningJobCommandOutput } from "../commands/StartSigningJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AddProfilePermissionCommand: (input: AddProfilePermissionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CancelSigningProfileCommand: (input: CancelSigningProfileCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeSigningJobCommand: (input: DescribeSigningJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSigningPlatformCommand: (input: GetSigningPlatformCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetSigningProfileCommand: (input: GetSigningProfileCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListProfilePermissionsCommand: (input: ListProfilePermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListSigningJobsCommand: (input: ListSigningJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListSigningPlatformsCommand: (input: ListSigningPlatformsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListSigningProfilesCommand: (input: ListSigningProfilesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutSigningProfileCommand: (input: PutSigningProfileCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RemoveProfilePermissionCommand: (input: RemoveProfilePermissionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RevokeSignatureCommand: (input: RevokeSignatureCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RevokeSigningProfileCommand: (input: RevokeSigningProfileCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartSigningJobCommand: (input: StartSigningJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AddProfilePermissionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddProfilePermissionCommandOutput>;
export declare const deserializeAws_restJson1CancelSigningProfileCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelSigningProfileCommandOutput>;
export declare const deserializeAws_restJson1DescribeSigningJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeSigningJobCommandOutput>;
export declare const deserializeAws_restJson1GetSigningPlatformCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSigningPlatformCommandOutput>;
export declare const deserializeAws_restJson1GetSigningProfileCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetSigningProfileCommandOutput>;
export declare const deserializeAws_restJson1ListProfilePermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListProfilePermissionsCommandOutput>;
export declare const deserializeAws_restJson1ListSigningJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListSigningJobsCommandOutput>;
export declare const deserializeAws_restJson1ListSigningPlatformsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListSigningPlatformsCommandOutput>;
export declare const deserializeAws_restJson1ListSigningProfilesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListSigningProfilesCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1PutSigningProfileCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutSigningProfileCommandOutput>;
export declare const deserializeAws_restJson1RemoveProfilePermissionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveProfilePermissionCommandOutput>;
export declare const deserializeAws_restJson1RevokeSignatureCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RevokeSignatureCommandOutput>;
export declare const deserializeAws_restJson1RevokeSigningProfileCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RevokeSigningProfileCommandOutput>;
export declare const deserializeAws_restJson1StartSigningJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartSigningJobCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
