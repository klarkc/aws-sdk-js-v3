import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListSuppressedDestinationsRequest, ListSuppressedDestinationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSuppressedDestinationsCommandInput extends ListSuppressedDestinationsRequest {
}
export interface ListSuppressedDestinationsCommandOutput extends ListSuppressedDestinationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a list of email addresses that are on the suppression list for your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListSuppressedDestinationsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListSuppressedDestinationsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListSuppressedDestinationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSuppressedDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListSuppressedDestinationsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSuppressedDestinationsCommand extends $Command<ListSuppressedDestinationsCommandInput, ListSuppressedDestinationsCommandOutput, SESv2ClientResolvedConfig> {
    readonly input: ListSuppressedDestinationsCommandInput;
    constructor(input: ListSuppressedDestinationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSuppressedDestinationsCommandInput, ListSuppressedDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
