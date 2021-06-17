import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigurationRevisionCommandInput extends DescribeConfigurationRevisionRequest {
}
export interface DescribeConfigurationRevisionCommandOutput extends DescribeConfigurationRevisionResponse, __MetadataBearer {
}
/**
 * Returns the specified configuration revision for the specified configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigurationRevisionCommand extends $Command<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput, MqClientResolvedConfig> {
    readonly input: DescribeConfigurationRevisionCommandInput;
    constructor(input: DescribeConfigurationRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
