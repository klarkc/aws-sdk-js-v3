import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { UpdateIdentityProviderConfigurationRequest, UpdateIdentityProviderConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIdentityProviderConfigurationCommandInput extends UpdateIdentityProviderConfigurationRequest {
}
export interface UpdateIdentityProviderConfigurationCommandOutput extends UpdateIdentityProviderConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the identity provider configuration for the fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, UpdateIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new UpdateIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIdentityProviderConfigurationCommand extends $Command<UpdateIdentityProviderConfigurationCommandInput, UpdateIdentityProviderConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: UpdateIdentityProviderConfigurationCommandInput;
    constructor(input: UpdateIdentityProviderConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIdentityProviderConfigurationCommandInput, UpdateIdentityProviderConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
