import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigRulesRequest, DescribeConfigRulesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigRulesCommandInput extends DescribeConfigRulesRequest {
}
export interface DescribeConfigRulesCommandOutput extends DescribeConfigRulesResponse, __MetadataBearer {
}
/**
 * <p>Returns details about your AWS Config rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigRulesCommand extends $Command<DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigRulesCommandInput;
    constructor(input: DescribeConfigRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigRulesCommandInput, DescribeConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
