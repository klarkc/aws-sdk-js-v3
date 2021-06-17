import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { RollbackTransactionRequest, RollbackTransactionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RollbackTransactionCommandInput extends RollbackTransactionRequest {
}
export interface RollbackTransactionCommandOutput extends RollbackTransactionResponse, __MetadataBearer {
}
/**
 * <p>Performs a rollback of a transaction. Rolling back a transaction cancels its changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, RollbackTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, RollbackTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new RollbackTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackTransactionCommandInput} for command's `input` shape.
 * @see {@link RollbackTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RollbackTransactionCommand extends $Command<RollbackTransactionCommandInput, RollbackTransactionCommandOutput, RDSDataClientResolvedConfig> {
    readonly input: RollbackTransactionCommandInput;
    constructor(input: RollbackTransactionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RollbackTransactionCommandInput, RollbackTransactionCommandOutput>;
    private serialize;
    private deserialize;
}
