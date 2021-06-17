import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeletePendingAggregationRequestRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePendingAggregationRequestCommandInput extends DeletePendingAggregationRequestRequest {
}
export interface DeletePendingAggregationRequestCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes pending authorization requests for a specified
 * 			aggregator account in a specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeletePendingAggregationRequestCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeletePendingAggregationRequestCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeletePendingAggregationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePendingAggregationRequestCommandInput} for command's `input` shape.
 * @see {@link DeletePendingAggregationRequestCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePendingAggregationRequestCommand extends $Command<DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeletePendingAggregationRequestCommandInput;
    constructor(input: DeletePendingAggregationRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePendingAggregationRequestCommandInput, DeletePendingAggregationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
