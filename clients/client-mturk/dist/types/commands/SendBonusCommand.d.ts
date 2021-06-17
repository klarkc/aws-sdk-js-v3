import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendBonusRequest, SendBonusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendBonusCommandInput extends SendBonusRequest {
}
export interface SendBonusCommandOutput extends SendBonusResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>SendBonus</code>
 *             operation issues a payment of money from your account to a Worker.
 *             This payment happens separately from the reward you pay to the Worker
 *             when you approve the Worker's assignment. The SendBonus operation
 *             requires the Worker's ID and the assignment ID as parameters to
 *             initiate payment of the bonus. You must include a message that
 *             explains the reason for the bonus payment, as the Worker may not be
 *             expecting the payment. Amazon Mechanical Turk collects a fee for
 *             bonus payments, similar to the HIT listing fee. This operation fails
 *             if your account does not have enough funds to pay for both the bonus
 *             and the fees.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendBonusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendBonusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new SendBonusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBonusCommandInput} for command's `input` shape.
 * @see {@link SendBonusCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendBonusCommand extends $Command<SendBonusCommandInput, SendBonusCommandOutput, MTurkClientResolvedConfig> {
    readonly input: SendBonusCommandInput;
    constructor(input: SendBonusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBonusCommandInput, SendBonusCommandOutput>;
    private serialize;
    private deserialize;
}
