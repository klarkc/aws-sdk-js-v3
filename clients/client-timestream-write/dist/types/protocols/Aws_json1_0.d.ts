import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "../commands/CreateDatabaseCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "../commands/DeleteDatabaseCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput } from "../commands/DescribeDatabaseCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "../commands/UpdateDatabaseCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { WriteRecordsCommandInput, WriteRecordsCommandOutput } from "../commands/WriteRecordsCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_0CreateDatabaseCommand: (input: CreateDatabaseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0CreateTableCommand: (input: CreateTableCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DeleteDatabaseCommand: (input: DeleteDatabaseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DeleteTableCommand: (input: DeleteTableCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeDatabaseCommand: (input: DescribeDatabaseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeEndpointsCommand: (input: DescribeEndpointsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0DescribeTableCommand: (input: DescribeTableCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListDatabasesCommand: (input: ListDatabasesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListTablesCommand: (input: ListTablesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0UpdateDatabaseCommand: (input: UpdateDatabaseCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0UpdateTableCommand: (input: UpdateTableCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_0WriteRecordsCommand: (input: WriteRecordsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_0CreateDatabaseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDatabaseCommandOutput>;
export declare const deserializeAws_json1_0CreateTableCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateTableCommandOutput>;
export declare const deserializeAws_json1_0DeleteDatabaseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDatabaseCommandOutput>;
export declare const deserializeAws_json1_0DeleteTableCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTableCommandOutput>;
export declare const deserializeAws_json1_0DescribeDatabaseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDatabaseCommandOutput>;
export declare const deserializeAws_json1_0DescribeEndpointsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeEndpointsCommandOutput>;
export declare const deserializeAws_json1_0DescribeTableCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeTableCommandOutput>;
export declare const deserializeAws_json1_0ListDatabasesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDatabasesCommandOutput>;
export declare const deserializeAws_json1_0ListTablesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTablesCommandOutput>;
export declare const deserializeAws_json1_0ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_0TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_0UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_0UpdateDatabaseCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDatabaseCommandOutput>;
export declare const deserializeAws_json1_0UpdateTableCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateTableCommandOutput>;
export declare const deserializeAws_json1_0WriteRecordsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<WriteRecordsCommandOutput>;
