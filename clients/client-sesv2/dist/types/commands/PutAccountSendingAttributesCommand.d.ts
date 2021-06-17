import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutAccountSendingAttributesRequest, PutAccountSendingAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccountSendingAttributesCommandInput extends PutAccountSendingAttributesRequest {
}
export interface PutAccountSendingAttributesCommandOutput extends PutAccountSendingAttributesResponse, __MetadataBearer {
}
/**
 * <p>Enable or disable the ability of your account to send email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountSendingAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountSendingAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountSendingAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSendingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountSendingAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccountSendingAttributesCommand extends $Command<PutAccountSendingAttributesCommandInput, PutAccountSendingAttributesCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutAccountSendingAttributesCommandInput;
    constructor(input: PutAccountSendingAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountSendingAttributesCommandInput, PutAccountSendingAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
