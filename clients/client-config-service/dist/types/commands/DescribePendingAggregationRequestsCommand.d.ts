import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribePendingAggregationRequestsRequest, DescribePendingAggregationRequestsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePendingAggregationRequestsCommandInput extends DescribePendingAggregationRequestsRequest {
}
export interface DescribePendingAggregationRequestsCommandOutput extends DescribePendingAggregationRequestsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of all pending aggregation requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribePendingAggregationRequestsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribePendingAggregationRequestsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribePendingAggregationRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingAggregationRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingAggregationRequestsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePendingAggregationRequestsCommand extends $Command<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribePendingAggregationRequestsCommandInput;
    constructor(input: DescribePendingAggregationRequestsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
