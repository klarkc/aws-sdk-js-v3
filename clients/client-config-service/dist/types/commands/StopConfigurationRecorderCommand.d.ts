import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StopConfigurationRecorderRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopConfigurationRecorderCommandInput extends StopConfigurationRecorderRequest {
}
export interface StopConfigurationRecorderCommandOutput extends __MetadataBearer {
}
/**
 * <p>Stops recording configurations of the AWS resources you have selected to record in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StopConfigurationRecorderCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StopConfigurationRecorderCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StopConfigurationRecorderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopConfigurationRecorderCommandInput} for command's `input` shape.
 * @see {@link StopConfigurationRecorderCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopConfigurationRecorderCommand extends $Command<StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: StopConfigurationRecorderCommandInput;
    constructor(input: StopConfigurationRecorderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopConfigurationRecorderCommandInput, StopConfigurationRecorderCommandOutput>;
    private serialize;
    private deserialize;
}
