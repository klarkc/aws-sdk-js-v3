import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppLaunchConfigurationRequest, PutAppLaunchConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAppLaunchConfigurationCommandInput extends PutAppLaunchConfigurationRequest {
}
export interface PutAppLaunchConfigurationCommandOutput extends PutAppLaunchConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppLaunchConfigurationCommand extends $Command<PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: PutAppLaunchConfigurationCommandInput;
    constructor(input: PutAppLaunchConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppLaunchConfigurationCommandInput, PutAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
