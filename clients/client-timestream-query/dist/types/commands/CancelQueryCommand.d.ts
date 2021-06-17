import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";
import { CancelQueryRequest, CancelQueryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelQueryCommandInput extends CancelQueryRequest {
}
export interface CancelQueryCommandOutput extends CancelQueryResponse, __MetadataBearer {
}
/**
 * <p>
 *         Cancels a query that has been issued. Cancellation is guaranteed only if the query has not
 *         completed execution before the cancellation request was issued. Because cancellation is an idempotent operation,
 *         subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, CancelQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, CancelQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelQueryCommand extends $Command<CancelQueryCommandInput, CancelQueryCommandOutput, TimestreamQueryClientResolvedConfig> {
    readonly input: CancelQueryCommandInput;
    constructor(input: CancelQueryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TimestreamQueryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelQueryCommandInput, CancelQueryCommandOutput>;
    private serialize;
    private deserialize;
}
