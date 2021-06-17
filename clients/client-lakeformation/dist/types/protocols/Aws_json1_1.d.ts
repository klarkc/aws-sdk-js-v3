import { AddLFTagsToResourceCommandInput, AddLFTagsToResourceCommandOutput } from "../commands/AddLFTagsToResourceCommand";
import { BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput } from "../commands/BatchGrantPermissionsCommand";
import { BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput } from "../commands/BatchRevokePermissionsCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "../commands/CreateLFTagCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "../commands/DeleteLFTagCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "../commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "../commands/DescribeResourceCommand";
import { GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput } from "../commands/GetDataLakeSettingsCommand";
import { GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput } from "../commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "../commands/GetLFTagCommand";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "../commands/GetResourceLFTagsCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "../commands/GrantPermissionsCommand";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "../commands/ListLFTagsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput } from "../commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "../commands/RegisterResourceCommand";
import { RemoveLFTagsFromResourceCommandInput, RemoveLFTagsFromResourceCommandOutput } from "../commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "../commands/RevokePermissionsCommand";
import { SearchDatabasesByLFTagsCommandInput, SearchDatabasesByLFTagsCommandOutput } from "../commands/SearchDatabasesByLFTagsCommand";
import { SearchTablesByLFTagsCommandInput, SearchTablesByLFTagsCommandOutput } from "../commands/SearchTablesByLFTagsCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "../commands/UpdateLFTagCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1AddLFTagsToResourceCommand: (input: AddLFTagsToResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchGrantPermissionsCommand: (input: BatchGrantPermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1BatchRevokePermissionsCommand: (input: BatchRevokePermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLFTagCommand: (input: CreateLFTagCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLFTagCommand: (input: DeleteLFTagCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeregisterResourceCommand: (input: DeregisterResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeResourceCommand: (input: DescribeResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetDataLakeSettingsCommand: (input: GetDataLakeSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetEffectivePermissionsForPathCommand: (input: GetEffectivePermissionsForPathCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetLFTagCommand: (input: GetLFTagCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetResourceLFTagsCommand: (input: GetResourceLFTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GrantPermissionsCommand: (input: GrantPermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLFTagsCommand: (input: ListLFTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListPermissionsCommand: (input: ListPermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListResourcesCommand: (input: ListResourcesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1PutDataLakeSettingsCommand: (input: PutDataLakeSettingsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RegisterResourceCommand: (input: RegisterResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RemoveLFTagsFromResourceCommand: (input: RemoveLFTagsFromResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RevokePermissionsCommand: (input: RevokePermissionsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchDatabasesByLFTagsCommand: (input: SearchDatabasesByLFTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SearchTablesByLFTagsCommand: (input: SearchTablesByLFTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateLFTagCommand: (input: UpdateLFTagCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateResourceCommand: (input: UpdateResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1AddLFTagsToResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddLFTagsToResourceCommandOutput>;
export declare const deserializeAws_json1_1BatchGrantPermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchGrantPermissionsCommandOutput>;
export declare const deserializeAws_json1_1BatchRevokePermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<BatchRevokePermissionsCommandOutput>;
export declare const deserializeAws_json1_1CreateLFTagCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLFTagCommandOutput>;
export declare const deserializeAws_json1_1DeleteLFTagCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLFTagCommandOutput>;
export declare const deserializeAws_json1_1DeregisterResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeregisterResourceCommandOutput>;
export declare const deserializeAws_json1_1DescribeResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeResourceCommandOutput>;
export declare const deserializeAws_json1_1GetDataLakeSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDataLakeSettingsCommandOutput>;
export declare const deserializeAws_json1_1GetEffectivePermissionsForPathCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetEffectivePermissionsForPathCommandOutput>;
export declare const deserializeAws_json1_1GetLFTagCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetLFTagCommandOutput>;
export declare const deserializeAws_json1_1GetResourceLFTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetResourceLFTagsCommandOutput>;
export declare const deserializeAws_json1_1GrantPermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GrantPermissionsCommandOutput>;
export declare const deserializeAws_json1_1ListLFTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLFTagsCommandOutput>;
export declare const deserializeAws_json1_1ListPermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListPermissionsCommandOutput>;
export declare const deserializeAws_json1_1ListResourcesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListResourcesCommandOutput>;
export declare const deserializeAws_json1_1PutDataLakeSettingsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutDataLakeSettingsCommandOutput>;
export declare const deserializeAws_json1_1RegisterResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterResourceCommandOutput>;
export declare const deserializeAws_json1_1RemoveLFTagsFromResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveLFTagsFromResourceCommandOutput>;
export declare const deserializeAws_json1_1RevokePermissionsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RevokePermissionsCommandOutput>;
export declare const deserializeAws_json1_1SearchDatabasesByLFTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchDatabasesByLFTagsCommandOutput>;
export declare const deserializeAws_json1_1SearchTablesByLFTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchTablesByLFTagsCommandOutput>;
export declare const deserializeAws_json1_1UpdateLFTagCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLFTagCommandOutput>;
export declare const deserializeAws_json1_1UpdateResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateResourceCommandOutput>;
