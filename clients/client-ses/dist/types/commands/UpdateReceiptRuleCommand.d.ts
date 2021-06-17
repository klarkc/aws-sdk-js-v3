import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateReceiptRuleRequest, UpdateReceiptRuleResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateReceiptRuleCommandInput extends UpdateReceiptRuleRequest {
}
export interface UpdateReceiptRuleCommandOutput extends UpdateReceiptRuleResponse, __MetadataBearer {
}
/**
 * <p>Updates a receipt rule.</p>
 *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateReceiptRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateReceiptRuleCommand extends $Command<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateReceiptRuleCommandInput;
    constructor(input: UpdateReceiptRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput>;
    private serialize;
    private deserialize;
}
