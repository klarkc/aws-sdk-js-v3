import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { CreateInstanceAccessControlAttributeConfigurationRequest, CreateInstanceAccessControlAttributeConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstanceAccessControlAttributeConfigurationCommandInput extends CreateInstanceAccessControlAttributeConfigurationRequest {
}
export interface CreateInstanceAccessControlAttributeConfigurationCommandOutput extends CreateInstanceAccessControlAttributeConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Enables the attributes-based access control (ABAC) feature for the specified AWS SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstanceAccessControlAttributeConfigurationCommand extends $Command<CreateInstanceAccessControlAttributeConfigurationCommandInput, CreateInstanceAccessControlAttributeConfigurationCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: CreateInstanceAccessControlAttributeConfigurationCommandInput;
    constructor(input: CreateInstanceAccessControlAttributeConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceAccessControlAttributeConfigurationCommandInput, CreateInstanceAccessControlAttributeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
