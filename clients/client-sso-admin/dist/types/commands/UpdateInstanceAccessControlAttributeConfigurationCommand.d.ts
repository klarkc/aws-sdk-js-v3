import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { UpdateInstanceAccessControlAttributeConfigurationRequest, UpdateInstanceAccessControlAttributeConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInstanceAccessControlAttributeConfigurationCommandInput extends UpdateInstanceAccessControlAttributeConfigurationRequest {
}
export interface UpdateInstanceAccessControlAttributeConfigurationCommandOutput extends UpdateInstanceAccessControlAttributeConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Updates the AWS SSO identity store attributes to use with the AWS SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the AWS SSO identity store. If a SAML assertion passes any of these attributes, AWS SSO will replace the attribute value with the value from the AWS SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, UpdateInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInstanceAccessControlAttributeConfigurationCommand extends $Command<UpdateInstanceAccessControlAttributeConfigurationCommandInput, UpdateInstanceAccessControlAttributeConfigurationCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: UpdateInstanceAccessControlAttributeConfigurationCommandInput;
    constructor(input: UpdateInstanceAccessControlAttributeConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceAccessControlAttributeConfigurationCommandInput, UpdateInstanceAccessControlAttributeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
