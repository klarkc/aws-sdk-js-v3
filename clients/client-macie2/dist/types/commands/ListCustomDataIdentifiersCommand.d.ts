import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListCustomDataIdentifiersRequest, ListCustomDataIdentifiersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomDataIdentifiersCommandInput extends ListCustomDataIdentifiersRequest {
}
export interface ListCustomDataIdentifiersCommandOutput extends ListCustomDataIdentifiersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a subset of information about all the custom data identifiers for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListCustomDataIdentifiersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListCustomDataIdentifiersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListCustomDataIdentifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomDataIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListCustomDataIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomDataIdentifiersCommand extends $Command<ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListCustomDataIdentifiersCommandInput;
    constructor(input: ListCustomDataIdentifiersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomDataIdentifiersCommandInput, ListCustomDataIdentifiersCommandOutput>;
    private serialize;
    private deserialize;
}
