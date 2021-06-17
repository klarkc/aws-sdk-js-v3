import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { LaunchConfiguration, UpdateLaunchConfigurationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLaunchConfigurationCommandInput extends UpdateLaunchConfigurationRequest {
}
export interface UpdateLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {
}
/**
 * <p>Updates multiple LaunchConfigurations by Source Server ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new UpdateLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLaunchConfigurationCommand extends $Command<UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput, MgnClientResolvedConfig> {
    readonly input: UpdateLaunchConfigurationCommandInput;
    constructor(input: UpdateLaunchConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
