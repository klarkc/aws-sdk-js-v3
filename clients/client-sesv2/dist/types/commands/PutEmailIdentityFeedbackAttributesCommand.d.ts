import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutEmailIdentityFeedbackAttributesRequest, PutEmailIdentityFeedbackAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEmailIdentityFeedbackAttributesCommandInput extends PutEmailIdentityFeedbackAttributesRequest {
}
export interface PutEmailIdentityFeedbackAttributesCommandOutput extends PutEmailIdentityFeedbackAttributesResponse, __MetadataBearer {
}
/**
 * <p>Used to enable or disable feedback forwarding for an identity. This setting determines
 *             what happens when an identity is used to send an email that results in a bounce or
 *             complaint event.</p>
 *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
 *             complaint events occur. These notifications are sent to the address that you specified
 *             in the <code>Return-Path</code> header of the original email.</p>
 *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
 *             set up another mechanism for receiving bounce or complaint notifications (for example,
 *             by setting up an event destination), you receive an email notification when these events
 *             occur (even if this setting is disabled).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityFeedbackAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityFeedbackAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutEmailIdentityFeedbackAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEmailIdentityFeedbackAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityFeedbackAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEmailIdentityFeedbackAttributesCommand extends $Command<PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutEmailIdentityFeedbackAttributesCommandInput;
    constructor(input: PutEmailIdentityFeedbackAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEmailIdentityFeedbackAttributesCommandInput, PutEmailIdentityFeedbackAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
