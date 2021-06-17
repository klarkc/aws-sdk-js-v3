import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetCustomDataIdentifierRequest, GetCustomDataIdentifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCustomDataIdentifierCommandInput extends GetCustomDataIdentifierRequest {
}
export interface GetCustomDataIdentifierCommandOutput extends GetCustomDataIdentifierResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the criteria and other settings for a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCustomDataIdentifierCommand extends $Command<GetCustomDataIdentifierCommandInput, GetCustomDataIdentifierCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: GetCustomDataIdentifierCommandInput;
    constructor(input: GetCustomDataIdentifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCustomDataIdentifierCommandInput, GetCustomDataIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
