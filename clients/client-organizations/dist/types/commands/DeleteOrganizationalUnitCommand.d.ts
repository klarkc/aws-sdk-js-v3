import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeleteOrganizationalUnitRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteOrganizationalUnitCommandInput extends DeleteOrganizationalUnitRequest {
}
export interface DeleteOrganizationalUnitCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an organizational unit (OU) from a root or another OU. You must first remove
 *             all accounts and child OUs from the OU that you want to delete.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeleteOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeleteOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DeleteOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteOrganizationalUnitCommand extends $Command<DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeleteOrganizationalUnitCommandInput;
    constructor(input: DeleteOrganizationalUnitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
