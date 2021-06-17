import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppLaunchConfigurationRequest, GetAppLaunchConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppLaunchConfigurationCommandInput extends GetAppLaunchConfigurationRequest {
}
export interface GetAppLaunchConfigurationCommandOutput extends GetAppLaunchConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the application launch configuration associated with the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppLaunchConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppLaunchConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppLaunchConfigurationCommand extends $Command<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppLaunchConfigurationCommandInput;
    constructor(input: GetAppLaunchConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppLaunchConfigurationCommandInput, GetAppLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
