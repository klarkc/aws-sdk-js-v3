import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeAggregationAuthorizationsRequest, DescribeAggregationAuthorizationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAggregationAuthorizationsCommandInput extends DescribeAggregationAuthorizationsRequest {
}
export interface DescribeAggregationAuthorizationsCommandOutput extends DescribeAggregationAuthorizationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of authorizations granted to various aggregator
 * 			accounts and regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregationAuthorizationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeAggregationAuthorizationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregationAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregationAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAggregationAuthorizationsCommand extends $Command<DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeAggregationAuthorizationsCommandInput;
    constructor(input: DescribeAggregationAuthorizationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregationAuthorizationsCommandInput, DescribeAggregationAuthorizationsCommandOutput>;
    private serialize;
    private deserialize;
}
