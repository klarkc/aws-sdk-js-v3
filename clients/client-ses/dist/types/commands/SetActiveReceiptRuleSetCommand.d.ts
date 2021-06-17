import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SetActiveReceiptRuleSetCommandInput extends SetActiveReceiptRuleSetRequest {
}
export interface SetActiveReceiptRuleSetCommandOutput extends SetActiveReceiptRuleSetResponse, __MetadataBearer {
}
/**
 * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
 *         <note>
 *             <p>To disable your email-receiving through Amazon SES completely, you can call this API
 *                 with RuleSetName set to null.</p>
 *         </note>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SetActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SetActiveReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new SetActiveReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetActiveReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link SetActiveReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SetActiveReceiptRuleSetCommand extends $Command<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: SetActiveReceiptRuleSetCommandInput;
    constructor(input: SetActiveReceiptRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
