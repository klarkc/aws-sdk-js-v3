import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { StreamJournalToKinesisRequest, StreamJournalToKinesisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StreamJournalToKinesisCommandInput extends StreamJournalToKinesisRequest {
}
export interface StreamJournalToKinesisCommandOutput extends StreamJournalToKinesisResponse, __MetadataBearer {
}
/**
 * <p>Creates a journal stream for a given Amazon QLDB ledger. The stream captures every
 *          document revision that is committed to the ledger's journal and delivers the data to a
 *          specified Amazon Kinesis Data Streams resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, StreamJournalToKinesisCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, StreamJournalToKinesisCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new StreamJournalToKinesisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StreamJournalToKinesisCommandInput} for command's `input` shape.
 * @see {@link StreamJournalToKinesisCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StreamJournalToKinesisCommand extends $Command<StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput, QLDBClientResolvedConfig> {
    readonly input: StreamJournalToKinesisCommandInput;
    constructor(input: StreamJournalToKinesisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StreamJournalToKinesisCommandInput, StreamJournalToKinesisCommandOutput>;
    private serialize;
    private deserialize;
}
