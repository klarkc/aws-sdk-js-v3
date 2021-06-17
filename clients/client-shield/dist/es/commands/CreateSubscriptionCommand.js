import { __extends } from "tslib";
import { CreateSubscriptionRequest, CreateSubscriptionResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateSubscriptionCommand, serializeAws_json1_1CreateSubscriptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Activates AWS Shield Advanced for an account.</p>
 *
 *          <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period.  You can change this by submitting an <code>UpdateSubscription</code> request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSubscriptionCommand = /** @class */ (function (_super) {
    __extends(CreateSubscriptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSubscriptionCommand(input) {
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
    CreateSubscriptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ShieldClient";
        var commandName = "CreateSubscriptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSubscriptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSubscriptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSubscriptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateSubscriptionCommand(input, context);
    };
    CreateSubscriptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateSubscriptionCommand(output, context);
    };
    return CreateSubscriptionCommand;
}($Command));
export { CreateSubscriptionCommand };
//# sourceMappingURL=CreateSubscriptionCommand.js.map