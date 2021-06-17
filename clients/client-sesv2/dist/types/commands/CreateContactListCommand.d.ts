import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateContactListRequest, CreateContactListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContactListCommandInput extends CreateContactListRequest {
}
export interface CreateContactListCommandOutput extends CreateContactListResponse, __MetadataBearer {
}
/**
 * <p>Creates a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateContactListCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateContactListCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateContactListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactListCommandInput} for command's `input` shape.
 * @see {@link CreateContactListCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContactListCommand extends $Command<CreateContactListCommandInput, CreateContactListCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: CreateContactListCommandInput;
    constructor(input: CreateContactListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContactListCommandInput, CreateContactListCommandOutput>;
    private serialize;
    private deserialize;
}
