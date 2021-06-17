import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutAccountDetailsRequest, PutAccountDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAccountDetailsCommandInput extends PutAccountDetailsRequest {
}
export interface PutAccountDetailsCommandOutput extends PutAccountDetailsResponse, __MetadataBearer {
}
/**
 * <p>Update your Amazon SES account details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDetailsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDetailsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutAccountDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountDetailsCommandInput} for command's `input` shape.
 * @see {@link PutAccountDetailsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAccountDetailsCommand extends $Command<PutAccountDetailsCommandInput, PutAccountDetailsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutAccountDetailsCommandInput;
    constructor(input: PutAccountDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccountDetailsCommandInput, PutAccountDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
