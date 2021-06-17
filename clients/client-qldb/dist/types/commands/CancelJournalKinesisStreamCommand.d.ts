import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { CancelJournalKinesisStreamRequest, CancelJournalKinesisStreamResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelJournalKinesisStreamCommandInput extends CancelJournalKinesisStreamRequest {
}
export interface CancelJournalKinesisStreamCommandOutput extends CancelJournalKinesisStreamResponse, __MetadataBearer {
}
/**
 * <p>Ends a given Amazon QLDB journal stream. Before a stream can be canceled, its current
 *          status must be <code>ACTIVE</code>.</p>
 *          <p>You can't restart a stream after you cancel it. Canceled QLDB stream resources are
 *          subject to a 7-day retention period, so they are automatically deleted after this limit
 *          expires.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CancelJournalKinesisStreamCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CancelJournalKinesisStreamCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new CancelJournalKinesisStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelJournalKinesisStreamCommandInput} for command's `input` shape.
 * @see {@link CancelJournalKinesisStreamCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelJournalKinesisStreamCommand extends $Command<CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput, QLDBClientResolvedConfig> {
    readonly input: CancelJournalKinesisStreamCommandInput;
    constructor(input: CancelJournalKinesisStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelJournalKinesisStreamCommandInput, CancelJournalKinesisStreamCommandOutput>;
    private serialize;
    private deserialize;
}
