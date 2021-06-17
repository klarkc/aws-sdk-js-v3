import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { GetSuppressedDestinationRequest, GetSuppressedDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSuppressedDestinationCommandInput extends GetSuppressedDestinationRequest {
}
export interface GetSuppressedDestinationCommandOutput extends GetSuppressedDestinationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a specific email address that's on the suppression list
 *             for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link GetSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSuppressedDestinationCommand extends $Command<GetSuppressedDestinationCommandInput, GetSuppressedDestinationCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: GetSuppressedDestinationCommandInput;
    constructor(input: GetSuppressedDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSuppressedDestinationCommandInput, GetSuppressedDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
