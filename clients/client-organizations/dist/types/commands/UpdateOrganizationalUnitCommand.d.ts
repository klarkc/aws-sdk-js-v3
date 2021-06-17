import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateOrganizationalUnitCommandInput extends UpdateOrganizationalUnitRequest {
}
export interface UpdateOrganizationalUnitCommandOutput extends UpdateOrganizationalUnitResponse, __MetadataBearer {
}
/**
 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 *             OUs and accounts remain in place, and any attached policies of the OU remain
 *             attached.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new UpdateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateOrganizationalUnitCommand extends $Command<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: UpdateOrganizationalUnitCommandInput;
    constructor(input: UpdateOrganizationalUnitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
