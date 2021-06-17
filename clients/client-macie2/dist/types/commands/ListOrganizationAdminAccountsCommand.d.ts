import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {
}
export interface ListOrganizationAdminAccountsCommandOutput extends ListOrganizationAdminAccountsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the delegated Amazon Macie administrator account for an AWS organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOrganizationAdminAccountsCommand extends $Command<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListOrganizationAdminAccountsCommandInput;
    constructor(input: ListOrganizationAdminAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
