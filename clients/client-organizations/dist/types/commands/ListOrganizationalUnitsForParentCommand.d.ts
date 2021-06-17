import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListOrganizationalUnitsForParentRequest, ListOrganizationalUnitsForParentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOrganizationalUnitsForParentCommandInput extends ListOrganizationalUnitsForParentRequest {
}
export interface ListOrganizationalUnitsForParentCommandOutput extends ListOrganizationalUnitsForParentResponse, __MetadataBearer {
}
/**
 * <p>Lists the organizational units (OUs) in a parent organizational unit or root.</p>
 *         <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *         <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an AWS service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListOrganizationalUnitsForParentCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListOrganizationalUnitsForParentCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new ListOrganizationalUnitsForParentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationalUnitsForParentCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationalUnitsForParentCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOrganizationalUnitsForParentCommand extends $Command<ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListOrganizationalUnitsForParentCommandInput;
    constructor(input: ListOrganizationalUnitsForParentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput>;
    private serialize;
    private deserialize;
}
