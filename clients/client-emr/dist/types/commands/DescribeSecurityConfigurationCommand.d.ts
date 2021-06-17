import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeSecurityConfigurationInput, DescribeSecurityConfigurationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSecurityConfigurationCommandInput extends DescribeSecurityConfigurationInput {
}
export interface DescribeSecurityConfigurationCommandOutput extends DescribeSecurityConfigurationOutput, __MetadataBearer {
}
/**
 * <p>Provides the details of a security configuration by returning the configuration
 *          JSON.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSecurityConfigurationCommand extends $Command<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput, EMRClientResolvedConfig> {
    readonly input: DescribeSecurityConfigurationCommandInput;
    constructor(input: DescribeSecurityConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityConfigurationCommandInput, DescribeSecurityConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
