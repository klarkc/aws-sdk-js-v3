import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateReceiptRuleSetRequest, CreateReceiptRuleSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReceiptRuleSetCommandInput extends CreateReceiptRuleSetRequest {
}
export interface CreateReceiptRuleSetCommandOutput extends CreateReceiptRuleSetResponse, __MetadataBearer {
}
/**
 * <p>Creates an empty receipt rule set.</p>
 *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReceiptRuleSetCommand extends $Command<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateReceiptRuleSetCommandInput;
    constructor(input: CreateReceiptRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
