import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DisableMacieRequest, DisableMacieResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableMacieCommandInput extends DisableMacieRequest {
}
export interface DisableMacieCommandOutput extends DisableMacieResponse, __MetadataBearer {
}
/**
 * <p>Disables an Amazon Macie account and deletes Macie resources for the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisableMacieCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisableMacieCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisableMacieCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableMacieCommandInput} for command's `input` shape.
 * @see {@link DisableMacieCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableMacieCommand extends $Command<DisableMacieCommandInput, DisableMacieCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: DisableMacieCommandInput;
    constructor(input: DisableMacieCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableMacieCommandInput, DisableMacieCommandOutput>;
    private serialize;
    private deserialize;
}
