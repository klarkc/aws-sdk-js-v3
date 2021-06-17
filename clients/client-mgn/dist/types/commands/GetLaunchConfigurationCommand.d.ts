import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { GetLaunchConfigurationRequest, LaunchConfiguration } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLaunchConfigurationCommandInput extends GetLaunchConfigurationRequest {
}
export interface GetLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {
}
/**
 * <p>Lists all LaunchConfigurations available, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, GetLaunchConfigurationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, GetLaunchConfigurationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new GetLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLaunchConfigurationCommand extends $Command<GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput, MgnClientResolvedConfig> {
    readonly input: GetLaunchConfigurationCommandInput;
    constructor(input: GetLaunchConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLaunchConfigurationCommandInput, GetLaunchConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
