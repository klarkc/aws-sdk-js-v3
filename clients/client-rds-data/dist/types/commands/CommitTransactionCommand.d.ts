import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { CommitTransactionRequest, CommitTransactionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CommitTransactionCommandInput extends CommitTransactionRequest {
}
export interface CommitTransactionCommandOutput extends CommitTransactionResponse, __MetadataBearer {
}
/**
 * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
 *             commits the changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, CommitTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, CommitTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new CommitTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CommitTransactionCommandInput} for command's `input` shape.
 * @see {@link CommitTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CommitTransactionCommand extends $Command<CommitTransactionCommandInput, CommitTransactionCommandOutput, RDSDataClientResolvedConfig> {
    readonly input: CommitTransactionCommandInput;
    constructor(input: CommitTransactionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CommitTransactionCommandInput, CommitTransactionCommandOutput>;
    private serialize;
    private deserialize;
}
