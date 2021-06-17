import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BeginTransactionCommandInput extends BeginTransactionRequest {
}
export interface BeginTransactionCommandOutput extends BeginTransactionResponse, __MetadataBearer {
}
/**
 * <p>Starts a SQL transaction.</p>
 *
 *         <important>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and
 *                 rolled back automatically after 24 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes.
 *                 If a transaction times out before it's committed, it's rolled back
 *                 automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend
 *                 that you run each DDL statement in a separate <code>ExecuteStatement</code> call with
 *                 <code>continueAfterTimeout</code> enabled.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BeginTransactionCommand extends $Command<BeginTransactionCommandInput, BeginTransactionCommandOutput, RDSDataClientResolvedConfig> {
    readonly input: BeginTransactionCommandInput;
    constructor(input: BeginTransactionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BeginTransactionCommandInput, BeginTransactionCommandOutput>;
    private serialize;
    private deserialize;
}
