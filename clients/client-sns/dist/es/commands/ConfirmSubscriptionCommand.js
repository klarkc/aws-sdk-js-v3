import { __extends } from "tslib";
import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/models_0";
import { deserializeAws_queryConfirmSubscriptionCommand, serializeAws_queryConfirmSubscriptionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ConfirmSubscriptionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ConfirmSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ConfirmSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfirmSubscriptionCommand = /** @class */ (function (_super) {
    __extends(ConfirmSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfirmSubscriptionCommand(input) {
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
    ConfirmSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ConfirmSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfirmSubscriptionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ConfirmSubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfirmSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryConfirmSubscriptionCommand(input, context);
    };
    ConfirmSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryConfirmSubscriptionCommand(output, context);
    };
    return ConfirmSubscriptionCommand;
}($Command));
export { ConfirmSubscriptionCommand };
//# sourceMappingURL=ConfirmSubscriptionCommand.js.map