import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListEmailTemplatesRequest, ListEmailTemplatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListEmailTemplatesCommandInput extends ListEmailTemplatesRequest {
}
export interface ListEmailTemplatesCommandOutput extends ListEmailTemplatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the email templates present in your Amazon SES account in the current AWS
 *             Region.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListEmailTemplatesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListEmailTemplatesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListEmailTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEmailTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEmailTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListEmailTemplatesCommand extends $Command<ListEmailTemplatesCommandInput, ListEmailTemplatesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListEmailTemplatesCommandInput;
    constructor(input: ListEmailTemplatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEmailTemplatesCommandInput, ListEmailTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
