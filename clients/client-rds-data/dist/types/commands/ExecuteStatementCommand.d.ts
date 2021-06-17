import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteStatementCommandInput extends ExecuteStatementRequest {
}
export interface ExecuteStatementCommandOutput extends ExecuteStatementResponse, __MetadataBearer {
}
/**
 * <p>Runs a SQL statement against a database.</p>
 *         <important>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *         </important>
 *         <p>The response size limit is 1 MB. If the call returns more than 1 MB of response data, the call is terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteStatementCommand extends $Command<ExecuteStatementCommandInput, ExecuteStatementCommandOutput, RDSDataClientResolvedConfig> {
    readonly input: ExecuteStatementCommandInput;
    constructor(input: ExecuteStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput>;
    private serialize;
    private deserialize;
}
