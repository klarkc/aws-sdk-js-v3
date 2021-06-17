import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {
}
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {
}
/**
 * <p>Returns the count of all Security Hub membership invitations that were sent to the
 *          current member account, not including the currently accepted invitation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInvitationsCountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInvitationsCountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInvitationsCountCommand extends $Command<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: GetInvitationsCountCommandInput;
    constructor(input: GetInvitationsCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput>;
    private serialize;
    private deserialize;
}
