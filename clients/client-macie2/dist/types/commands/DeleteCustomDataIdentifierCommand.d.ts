import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeleteCustomDataIdentifierRequest, DeleteCustomDataIdentifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCustomDataIdentifierCommandInput extends DeleteCustomDataIdentifierRequest {
}
export interface DeleteCustomDataIdentifierCommandOutput extends DeleteCustomDataIdentifierResponse, __MetadataBearer {
}
/**
 * <p>Soft deletes a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCustomDataIdentifierCommand extends $Command<DeleteCustomDataIdentifierCommandInput, DeleteCustomDataIdentifierCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DeleteCustomDataIdentifierCommandInput;
    constructor(input: DeleteCustomDataIdentifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomDataIdentifierCommandInput, DeleteCustomDataIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
