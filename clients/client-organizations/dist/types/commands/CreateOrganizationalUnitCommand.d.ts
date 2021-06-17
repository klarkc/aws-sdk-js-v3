import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationalUnitRequest, CreateOrganizationalUnitResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateOrganizationalUnitCommandInput extends CreateOrganizationalUnitRequest {
}
export interface CreateOrganizationalUnitCommandOutput extends CreateOrganizationalUnitResponse, __MetadataBearer {
}
/**
 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 *             for accounts that enables you to organize your accounts to apply policies according to
 *             your business requirements. The number of levels deep that you can nest OUs is dependent
 *             upon the policy types enabled for that root. For service control policies, the limit is
 *             five.</p>
 *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateOrganizationalUnitCommand extends $Command<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateOrganizationalUnitCommandInput;
    constructor(input: CreateOrganizationalUnitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
