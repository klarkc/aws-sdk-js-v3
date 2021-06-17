import { __extends } from "tslib";
import { SendBonusRequest, SendBonusResponse } from "../models/models_0";
import { deserializeAws_json1_1SendBonusCommand, serializeAws_json1_1SendBonusCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var SendBonusCommand = /** @class */ (function (_super) {
    __extends(SendBonusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendBonusCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    SendBonusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "SendBonusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendBonusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendBonusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendBonusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendBonusCommand(input, context);
    };
    SendBonusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendBonusCommand(output, context);
    };
    return SendBonusCommand;
}($Command));
export { SendBonusCommand };
//# sourceMappingURL=SendBonusCommand.js.map