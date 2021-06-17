import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {
}
export interface ListOrganizationAdminAccountsCommandOutput extends ListOrganizationAdminAccountsResponse, __MetadataBearer {
}
/**
 * <p>Lists the accounts configured as GuardDuty delegated administrators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOrganizationAdminAccountsCommand extends $Command<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: ListOrganizationAdminAccountsCommandInput;
    constructor(input: ListOrganizationAdminAccountsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
