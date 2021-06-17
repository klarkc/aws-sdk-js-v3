import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DisassociateMemberRequest, DisassociateMemberResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateMemberCommandInput extends DisassociateMemberRequest {
}
export interface DisassociateMemberCommandOutput extends DisassociateMemberResponse, __MetadataBearer {
}
/**
 * <p>Disassociates an Amazon Macie administrator account from a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisassociateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateMemberCommand extends $Command<DisassociateMemberCommandInput, DisassociateMemberCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DisassociateMemberCommandInput;
    constructor(input: DisassociateMemberCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateMemberCommandInput, DisassociateMemberCommandOutput>;
    private serialize;
    private deserialize;
}
