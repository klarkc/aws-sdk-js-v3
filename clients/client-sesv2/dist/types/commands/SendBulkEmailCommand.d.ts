import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { SendBulkEmailRequest, SendBulkEmailResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendBulkEmailCommandInput extends SendBulkEmailRequest {
}
export interface SendBulkEmailCommandOutput extends SendBulkEmailResponse, __MetadataBearer {
}
/**
 * <p>Composes an email message to multiple destinations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendBulkEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendBulkEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new SendBulkEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBulkEmailCommandInput} for command's `input` shape.
 * @see {@link SendBulkEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendBulkEmailCommand extends $Command<SendBulkEmailCommandInput, SendBulkEmailCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: SendBulkEmailCommandInput;
    constructor(input: SendBulkEmailCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBulkEmailCommandInput, SendBulkEmailCommandOutput>;
    private serialize;
    private deserialize;
}
