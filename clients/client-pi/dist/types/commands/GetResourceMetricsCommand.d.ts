import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { GetResourceMetricsRequest, GetResourceMetricsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceMetricsCommandInput extends GetResourceMetricsRequest {
}
export interface GetResourceMetricsCommandOutput extends GetResourceMetricsResponse, __MetadataBearer {
}
/**
 * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
 *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
 *       each group.</p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *                only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, GetResourceMetricsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, GetResourceMetricsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const command = new GetResourceMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceMetricsCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceMetricsCommand extends $Command<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput, PIClientResolvedConfig> {
    readonly input: GetResourceMetricsCommandInput;
    constructor(input: GetResourceMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceMetricsCommandInput, GetResourceMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
