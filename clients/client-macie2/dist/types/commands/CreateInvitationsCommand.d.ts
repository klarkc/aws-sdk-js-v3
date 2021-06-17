import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateInvitationsRequest, CreateInvitationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInvitationsCommandInput extends CreateInvitationsRequest {
}
export interface CreateInvitationsCommandOutput extends CreateInvitationsResponse, __MetadataBearer {
}
/**
 * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateInvitationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInvitationsCommandInput} for command's `input` shape.
 * @see {@link CreateInvitationsCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInvitationsCommand extends $Command<CreateInvitationsCommandInput, CreateInvitationsCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: CreateInvitationsCommandInput;
    constructor(input: CreateInvitationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInvitationsCommandInput, CreateInvitationsCommandOutput>;
    private serialize;
    private deserialize;
}
