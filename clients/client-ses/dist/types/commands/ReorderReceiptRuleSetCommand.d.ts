import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ReorderReceiptRuleSetRequest, ReorderReceiptRuleSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReorderReceiptRuleSetCommandInput extends ReorderReceiptRuleSetRequest {
}
export interface ReorderReceiptRuleSetCommandOutput extends ReorderReceiptRuleSetResponse, __MetadataBearer {
}
/**
 * <p>Reorders the receipt rules within a receipt rule set.</p>
 *         <note>
 *             <p>All of the rules in the rule set must be represented in this request. That is,
 *                 this API will return an error if the reorder request doesn't explicitly position all
 *                 of the rules.</p>
 *         </note>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ReorderReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ReorderReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ReorderReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReorderReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link ReorderReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReorderReceiptRuleSetCommand extends $Command<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: ReorderReceiptRuleSetCommandInput;
    constructor(input: ReorderReceiptRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
