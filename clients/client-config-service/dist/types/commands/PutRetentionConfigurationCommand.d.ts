import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRetentionConfigurationRequest, PutRetentionConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRetentionConfigurationCommandInput extends PutRetentionConfigurationRequest {
}
export interface PutRetentionConfigurationCommandOutput extends PutRetentionConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates and updates the retention configuration with details
 * 			about retention period (number of days) that AWS Config stores your
 * 			historical information. The API creates the
 * 				<code>RetentionConfiguration</code> object and names the object
 * 			as <b>default</b>. When you have a
 * 				<code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the
 * 			default object. </p>
 * 		       <note>
 * 			         <p>Currently, AWS Config supports only one retention
 * 				configuration per region in your account.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRetentionConfigurationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRetentionConfigurationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRetentionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutRetentionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRetentionConfigurationCommand extends $Command<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutRetentionConfigurationCommandInput;
    constructor(input: PutRetentionConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRetentionConfigurationCommandInput, PutRetentionConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
