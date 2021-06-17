import { CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput } from "../commands/CancelJournalKinesisStreamCommand";
import { CreateLedgerCommandInput, CreateLedgerCommandOutput } from "../commands/CreateLedgerCommand";
import { DeleteLedgerCommandInput, DeleteLedgerCommandOutput } from "../commands/DeleteLedgerCommand";
import { DescribeJournalKinesisStreamCommandInput, DescribeJournalKinesisStreamCommandOutput } from "../commands/DescribeJournalKinesisStreamCommand";
import { DescribeJournalS3ExportCommandInput, DescribeJournalS3ExportCommandOutput } from "../commands/DescribeJournalS3ExportCommand";
import { DescribeLedgerCommandInput, DescribeLedgerCommandOutput } from "../commands/DescribeLedgerCommand";
import { ExportJournalToS3CommandInput, ExportJournalToS3CommandOutput } from "../commands/ExportJournalToS3Command";
import { GetBlockCommandInput, GetBlockCommandOutput } from "../commands/GetBlockCommand";
import { GetDigestCommandInput, GetDigestCommandOutput } from "../commands/GetDigestCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "../commands/GetRevisionCommand";
import { ListJournalKinesisStreamsForLedgerCommandInput, ListJournalKinesisStreamsForLedgerCommandOutput } from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import { ListJournalS3ExportsCommandInput, ListJournalS3ExportsCommandOutput } from "../commands/ListJournalS3ExportsCommand";
import { ListJournalS3ExportsForLedgerCommandInput, ListJournalS3ExportsForLedgerCommandOutput } from "../commands/ListJournalS3ExportsForLedgerCommand";
import { ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "../commands/ListTagsForResourceCommand";
import { StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput } from "../commands/StreamJournalToKinesisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateLedgerCommandInput, UpdateLedgerCommandOutput } from "../commands/UpdateLedgerCommand";
import { UpdateLedgerPermissionsModeCommandInput, UpdateLedgerPermissionsModeCommandOutput } from "../commands/UpdateLedgerPermissionsModeCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1CancelJournalKinesisStreamCommand: (input: CancelJournalKinesisStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1CreateLedgerCommand: (input: CreateLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DeleteLedgerCommand: (input: DeleteLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJournalKinesisStreamCommand: (input: DescribeJournalKinesisStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeJournalS3ExportCommand: (input: DescribeJournalS3ExportCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeLedgerCommand: (input: DescribeLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ExportJournalToS3Command: (input: ExportJournalToS3CommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetBlockCommand: (input: GetBlockCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetDigestCommand: (input: GetDigestCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetRevisionCommand: (input: GetRevisionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand: (input: ListJournalKinesisStreamsForLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJournalS3ExportsCommand: (input: ListJournalS3ExportsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListJournalS3ExportsForLedgerCommand: (input: ListJournalS3ExportsForLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListLedgersCommand: (input: ListLedgersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListTagsForResourceCommand: (input: ListTagsForResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StreamJournalToKinesisCommand: (input: StreamJournalToKinesisCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1TagResourceCommand: (input: TagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UntagResourceCommand: (input: UntagResourceCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateLedgerCommand: (input: UpdateLedgerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateLedgerPermissionsModeCommand: (input: UpdateLedgerPermissionsModeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1CancelJournalKinesisStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CancelJournalKinesisStreamCommandOutput>;
export declare const deserializeAws_restJson1CreateLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLedgerCommandOutput>;
export declare const deserializeAws_restJson1DeleteLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLedgerCommandOutput>;
export declare const deserializeAws_restJson1DescribeJournalKinesisStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeJournalKinesisStreamCommandOutput>;
export declare const deserializeAws_restJson1DescribeJournalS3ExportCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeJournalS3ExportCommandOutput>;
export declare const deserializeAws_restJson1DescribeLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLedgerCommandOutput>;
export declare const deserializeAws_restJson1ExportJournalToS3Command: (output: __HttpResponse, context: __SerdeContext) => Promise<ExportJournalToS3CommandOutput>;
export declare const deserializeAws_restJson1GetBlockCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetBlockCommandOutput>;
export declare const deserializeAws_restJson1GetDigestCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDigestCommandOutput>;
export declare const deserializeAws_restJson1GetRevisionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRevisionCommandOutput>;
export declare const deserializeAws_restJson1ListJournalKinesisStreamsForLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListJournalKinesisStreamsForLedgerCommandOutput>;
export declare const deserializeAws_restJson1ListJournalS3ExportsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListJournalS3ExportsCommandOutput>;
export declare const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListJournalS3ExportsForLedgerCommandOutput>;
export declare const deserializeAws_restJson1ListLedgersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLedgersCommandOutput>;
export declare const deserializeAws_restJson1ListTagsForResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_restJson1StreamJournalToKinesisCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StreamJournalToKinesisCommandOutput>;
export declare const deserializeAws_restJson1TagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_restJson1UntagResourceCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_restJson1UpdateLedgerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLedgerCommandOutput>;
export declare const deserializeAws_restJson1UpdateLedgerPermissionsModeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateLedgerPermissionsModeCommandOutput>;
