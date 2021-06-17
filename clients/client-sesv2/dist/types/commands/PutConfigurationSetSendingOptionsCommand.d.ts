import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutConfigurationSetSendingOptionsRequest, PutConfigurationSetSendingOptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutConfigurationSetSendingOptionsCommandInput extends PutConfigurationSetSendingOptionsRequest {
}
export interface PutConfigurationSetSendingOptionsCommandOutput extends PutConfigurationSetSendingOptionsResponse, __MetadataBearer {
}
/**
 * <p>Enable or disable email sending for messages that use a particular configuration set
 *             in a specific AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetSendingOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetSendingOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetSendingOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetSendingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetSendingOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutConfigurationSetSendingOptionsCommand extends $Command<PutConfigurationSetSendingOptionsCommandInput, PutConfigurationSetSendingOptionsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutConfigurationSetSendingOptionsCommandInput;
    constructor(input: PutConfigurationSetSendingOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConfigurationSetSendingOptionsCommandInput, PutConfigurationSetSendingOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
