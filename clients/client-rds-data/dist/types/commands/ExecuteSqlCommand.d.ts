import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteSqlCommandInput extends ExecuteSqlRequest {
}
export interface ExecuteSqlCommandOutput extends ExecuteSqlResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Runs one or more SQL statements.</p>
 *         <important>
 *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
 *                     <code>ExecuteStatement</code> operation.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteSqlCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteSqlCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteSqlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteSqlCommandInput} for command's `input` shape.
 * @see {@link ExecuteSqlCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteSqlCommand extends $Command<ExecuteSqlCommandInput, ExecuteSqlCommandOutput, RDSDataClientResolvedConfig> {
    readonly input: ExecuteSqlCommandInput;
    constructor(input: ExecuteSqlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSDataClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteSqlCommandInput, ExecuteSqlCommandOutput>;
    private serialize;
    private deserialize;
}
