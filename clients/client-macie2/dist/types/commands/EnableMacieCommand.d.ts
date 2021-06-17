import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { EnableMacieRequest, EnableMacieResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableMacieCommandInput extends EnableMacieRequest {
}
export interface EnableMacieCommandOutput extends EnableMacieResponse, __MetadataBearer {
}
/**
 * <p>Enables Amazon Macie and specifies the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, EnableMacieCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, EnableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new EnableMacieCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableMacieCommandInput} for command's `input` shape.
 * @see {@link EnableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableMacieCommand extends $Command<EnableMacieCommandInput, EnableMacieCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: EnableMacieCommandInput;
    constructor(input: EnableMacieCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableMacieCommandInput, EnableMacieCommandOutput>;
    private serialize;
    private deserialize;
}
