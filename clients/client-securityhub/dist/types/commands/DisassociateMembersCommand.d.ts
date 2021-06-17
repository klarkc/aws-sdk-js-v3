import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DisassociateMembersRequest, DisassociateMembersResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMembersCommandInput extends DisassociateMembersRequest {
}
export interface DisassociateMembersCommandOutput extends DisassociateMembersResponse, __MetadataBearer {
}
/**
 * <p>Disassociates the specified member accounts from the associated administrator account.</p>
 *          <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that
 *          were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisassociateMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisassociateMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DisassociateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMembersCommandInput} for command's `input` shape.
 * @see {@link DisassociateMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMembersCommand extends $Command<DisassociateMembersCommandInput, DisassociateMembersCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DisassociateMembersCommandInput;
    constructor(input: DisassociateMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMembersCommandInput, DisassociateMembersCommandOutput>;
    private serialize;
    private deserialize;
}
