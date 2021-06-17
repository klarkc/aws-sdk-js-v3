import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateContactRequest, CreateContactResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactCommandInput extends CreateContactRequest {
}
export interface CreateContactCommandOutput extends CreateContactResponse, __MetadataBearer {
}
/**
 * <p>Creates a contact, which is an end-user who is receiving the email, and adds them to a
 *             contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateContactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactCommandInput} for command's `input` shape.
 * @see {@link CreateContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactCommand extends $Command<CreateContactCommandInput, CreateContactCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: CreateContactCommandInput;
    constructor(input: CreateContactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactCommandInput, CreateContactCommandOutput>;
    private serialize;
    private deserialize;
}
