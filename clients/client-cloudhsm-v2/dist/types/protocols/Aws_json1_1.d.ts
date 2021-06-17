import { CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput } from "../commands/CopyBackupToRegionCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "../commands/CreateHsmCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "../commands/DeleteHsmCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import { InitializeClusterCommandInput, InitializeClusterCommandOutput } from "../commands/InitializeClusterCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ModifyBackupAttributesCommandInput, ModifyBackupAttributesCommandOutput } from "../commands/ModifyBackupAttributesCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "../commands/ModifyClusterCommand";
import { RestoreBackupCommandInput, RestoreBackupCommandOutput } from "../commands/RestoreBackupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CopyBackupToRegionCommand: (input: CopyBackupToRegionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateClusterCommand: (input: CreateClusterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateHsmCommand: (input: CreateHsmCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteBackupCommand: (input: DeleteBackupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteClusterCommand: (input: DeleteClusterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteHsmCommand: (input: DeleteHsmCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeBackupsCommand: (input: DescribeBackupsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeClustersCommand: (input: DescribeClustersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1InitializeClusterCommand: (input: InitializeClusterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsCommand: (input: ListTagsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ModifyBackupAttributesCommand: (input: ModifyBackupAttributesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ModifyClusterCommand: (input: ModifyClusterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1RestoreBackupCommand: (input: RestoreBackupCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CopyBackupToRegionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CopyBackupToRegionCommandOutput>;
export declare const deserializeAws_json1_1CreateClusterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateClusterCommandOutput>;
export declare const deserializeAws_json1_1CreateHsmCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateHsmCommandOutput>;
export declare const deserializeAws_json1_1DeleteBackupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteBackupCommandOutput>;
export declare const deserializeAws_json1_1DeleteClusterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteClusterCommandOutput>;
export declare const deserializeAws_json1_1DeleteHsmCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteHsmCommandOutput>;
export declare const deserializeAws_json1_1DescribeBackupsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeBackupsCommandOutput>;
export declare const deserializeAws_json1_1DescribeClustersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeClustersCommandOutput>;
export declare const deserializeAws_json1_1InitializeClusterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InitializeClusterCommandOutput>;
export declare const deserializeAws_json1_1ListTagsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsCommandOutput>;
export declare const deserializeAws_json1_1ModifyBackupAttributesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyBackupAttributesCommandOutput>;
export declare const deserializeAws_json1_1ModifyClusterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ModifyClusterCommandOutput>;
export declare const deserializeAws_json1_1RestoreBackupCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RestoreBackupCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
