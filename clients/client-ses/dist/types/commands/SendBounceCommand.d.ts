import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendBounceRequest, SendBounceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendBounceCommandInput extends SendBounceRequest {
}
export interface SendBounceCommandOutput extends SendBounceResponse, __MetadataBearer {
}
/**
 * <p>Generates and sends a bounce message to the sender of an email you received through
 *             Amazon SES. You can only use this API on an email up to 24 hours after you receive it.</p>
 *         <note>
 *             <p>You cannot use this API to send generic bounces for mail that was not received by
 *                 Amazon SES.</p>
 *         </note>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendBounceCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendBounceCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SendBounceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBounceCommandInput} for command's `input` shape.
 * @see {@link SendBounceCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendBounceCommand extends $Command<SendBounceCommandInput, SendBounceCommandOutput, SESClientResolvedConfig> {
    readonly input: SendBounceCommandInput;
    constructor(input: SendBounceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBounceCommandInput, SendBounceCommandOutput>;
    private serialize;
    private deserialize;
}
