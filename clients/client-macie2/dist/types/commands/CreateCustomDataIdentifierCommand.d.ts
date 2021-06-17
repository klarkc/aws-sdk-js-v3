import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateCustomDataIdentifierRequest, CreateCustomDataIdentifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomDataIdentifierCommandInput extends CreateCustomDataIdentifierRequest {
}
export interface CreateCustomDataIdentifierCommandOutput extends CreateCustomDataIdentifierResponse, __MetadataBearer {
}
/**
 * <p>Creates and defines the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new CreateCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomDataIdentifierCommand extends $Command<CreateCustomDataIdentifierCommandInput, CreateCustomDataIdentifierCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: CreateCustomDataIdentifierCommandInput;
    constructor(input: CreateCustomDataIdentifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomDataIdentifierCommandInput, CreateCustomDataIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
