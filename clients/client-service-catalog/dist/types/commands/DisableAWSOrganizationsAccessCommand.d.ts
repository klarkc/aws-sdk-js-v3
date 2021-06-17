import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisableAWSOrganizationsAccessInput, DisableAWSOrganizationsAccessOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableAWSOrganizationsAccessCommandInput extends DisableAWSOrganizationsAccessInput {
}
export interface DisableAWSOrganizationsAccessCommandOutput extends DisableAWSOrganizationsAccessOutput, __MetadataBearer {
}
/**
 * <p>Disable portfolio sharing through AWS Organizations feature. This feature will not
 *          delete your current shares but it will prevent you from creating new shares throughout your
 *          organization. Current shares will not be in sync with your organization structure if it
 *          changes after calling this API. This API can only be called by the management  account in
 *          the organization.</p>
 *          <p>This API can't be invoked if there are active delegated administrators in the organization.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableAWSOrganizationsAccessCommand extends $Command<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisableAWSOrganizationsAccessCommandInput;
    constructor(input: DisableAWSOrganizationsAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput>;
    private serialize;
    private deserialize;
}
