import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { EnableOrganizationAdminAccountRequest, EnableOrganizationAdminAccountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableOrganizationAdminAccountCommandInput extends EnableOrganizationAdminAccountRequest {
}
export interface EnableOrganizationAdminAccountCommandOutput extends EnableOrganizationAdminAccountResponse, __MetadataBearer {
}
/**
 * <p>Designates an account as the delegated Amazon Macie administrator account for an AWS organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableOrganizationAdminAccountCommand extends $Command<EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: EnableOrganizationAdminAccountCommandInput;
    constructor(input: EnableOrganizationAdminAccountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput>;
    private serialize;
    private deserialize;
}
