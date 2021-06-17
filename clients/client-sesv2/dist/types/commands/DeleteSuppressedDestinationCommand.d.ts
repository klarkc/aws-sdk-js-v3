import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { DeleteSuppressedDestinationRequest, DeleteSuppressedDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSuppressedDestinationCommandInput extends DeleteSuppressedDestinationRequest {
}
export interface DeleteSuppressedDestinationCommandOutput extends DeleteSuppressedDestinationResponse, __MetadataBearer {
}
/**
 * <p>Removes an email address from the suppression list for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteSuppressedDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSuppressedDestinationCommand extends $Command<DeleteSuppressedDestinationCommandInput, DeleteSuppressedDestinationCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: DeleteSuppressedDestinationCommandInput;
    constructor(input: DeleteSuppressedDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSuppressedDestinationCommandInput, DeleteSuppressedDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
