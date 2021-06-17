import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationRecorderStatusRequest, DescribeConfigurationRecorderStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConfigurationRecorderStatusCommandInput extends DescribeConfigurationRecorderStatusRequest {
}
export interface DescribeConfigurationRecorderStatusCommandOutput extends DescribeConfigurationRecorderStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns the current status of the specified configuration
 * 			recorder. If a configuration recorder is not specified, this action
 * 			returns the status of all configuration recorders associated with
 * 			the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one configuration recorder
 * 				per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConfigurationRecorderStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationRecorderStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecorderStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConfigurationRecorderStatusCommand extends $Command<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConfigurationRecorderStatusCommandInput;
    constructor(input: DescribeConfigurationRecorderStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConfigurationRecorderStatusCommandInput, DescribeConfigurationRecorderStatusCommandOutput>;
    private serialize;
    private deserialize;
}
