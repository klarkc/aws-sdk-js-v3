import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { PutSuppressedDestinationRequest, PutSuppressedDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutSuppressedDestinationCommandInput extends PutSuppressedDestinationRequest {
}
export interface PutSuppressedDestinationCommandOutput extends PutSuppressedDestinationResponse, __MetadataBearer {
}
/**
 * <p>Adds an email address to the suppression list for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link PutSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSuppressedDestinationCommand extends $Command<PutSuppressedDestinationCommandInput, PutSuppressedDestinationCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: PutSuppressedDestinationCommandInput;
    constructor(input: PutSuppressedDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSuppressedDestinationCommandInput, PutSuppressedDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
