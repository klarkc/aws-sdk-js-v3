import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateSecurityHubConfigurationRequest, UpdateSecurityHubConfigurationResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSecurityHubConfigurationCommandInput extends UpdateSecurityHubConfigurationRequest {
}
export interface UpdateSecurityHubConfigurationCommandOutput extends UpdateSecurityHubConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates configuration options for Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateSecurityHubConfigurationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateSecurityHubConfigurationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateSecurityHubConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityHubConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSecurityHubConfigurationCommand extends $Command<UpdateSecurityHubConfigurationCommandInput, UpdateSecurityHubConfigurationCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: UpdateSecurityHubConfigurationCommandInput;
    constructor(input: UpdateSecurityHubConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityHubConfigurationCommandInput, UpdateSecurityHubConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
