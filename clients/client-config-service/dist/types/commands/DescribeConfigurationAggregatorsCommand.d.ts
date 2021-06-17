import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationAggregatorsRequest, DescribeConfigurationAggregatorsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigurationAggregatorsCommandInput extends DescribeConfigurationAggregatorsRequest {
}
export interface DescribeConfigurationAggregatorsCommandOutput extends DescribeConfigurationAggregatorsResponse, __MetadataBearer {
}
/**
 * <p>Returns the details of one or more configuration aggregators.
 * 			If the configuration aggregator is not specified, this action
 * 			returns the details for all the configuration aggregators associated
 * 			with the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationAggregatorsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationAggregatorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationAggregatorsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationAggregatorsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigurationAggregatorsCommand extends $Command<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationAggregatorsCommandInput;
    constructor(input: DescribeConfigurationAggregatorsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput>;
    private serialize;
    private deserialize;
}
