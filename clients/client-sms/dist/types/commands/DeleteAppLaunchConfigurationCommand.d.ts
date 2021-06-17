import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppLaunchConfigurationRequest, DeleteAppLaunchConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAppLaunchConfigurationCommandInput extends DeleteAppLaunchConfigurationRequest {
}
export interface DeleteAppLaunchConfigurationCommandOutput extends DeleteAppLaunchConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Deletes the launch configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAppLaunchConfigurationCommand extends $Command<DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppLaunchConfigurationCommandInput;
    constructor(input: DeleteAppLaunchConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppLaunchConfigurationCommandInput, DeleteAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
