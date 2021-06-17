import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeConfigurationRevisionRequest, DescribeConfigurationRevisionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigurationRevisionCommandInput extends DescribeConfigurationRevisionRequest {
}
export interface DescribeConfigurationRevisionCommandOutput extends DescribeConfigurationRevisionResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of this revision of the configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeConfigurationRevisionCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeConfigurationRevisionCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new DescribeConfigurationRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRevisionCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRevisionCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigurationRevisionCommand extends $Command<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput, KafkaClientResolvedConfig> {
    readonly input: DescribeConfigurationRevisionCommandInput;
    constructor(input: DescribeConfigurationRevisionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KafkaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationRevisionCommandInput, DescribeConfigurationRevisionCommandOutput>;
    private serialize;
    private deserialize;
}
