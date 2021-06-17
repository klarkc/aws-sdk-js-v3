import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {
}
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the count of Amazon Macie membership invitations that were received by an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetInvitationsCountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetInvitationsCountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInvitationsCountCommand extends $Command<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetInvitationsCountCommandInput;
    constructor(input: GetInvitationsCountCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInvitationsCountCommandInput, GetInvitationsCountCommandOutput>;
    private serialize;
    private deserialize;
}
