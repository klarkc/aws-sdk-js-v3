import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {
}
export interface ListOrganizationAdminAccountsCommandOutput extends ListOrganizationAdminAccountsResponse, __MetadataBearer {
}
/**
 * <p>Lists the Security Hub administrator accounts. Can only be called by the organization
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOrganizationAdminAccountsCommand extends $Command<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: ListOrganizationAdminAccountsCommandInput;
    constructor(input: ListOrganizationAdminAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
