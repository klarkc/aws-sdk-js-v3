import { __extends } from "tslib";
import { DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand, serializeAws_restJson1DescribeBrokerInstanceOptionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Describe available broker instance options.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerInstanceOptionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerInstanceOptionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBrokerInstanceOptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeBrokerInstanceOptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBrokerInstanceOptionsCommand(input) {
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
    DescribeBrokerInstanceOptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DescribeBrokerInstanceOptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBrokerInstanceOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBrokerInstanceOptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBrokerInstanceOptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBrokerInstanceOptionsCommand(input, context);
    };
    DescribeBrokerInstanceOptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand(output, context);
    };
    return DescribeBrokerInstanceOptionsCommand;
}($Command));
export { DescribeBrokerInstanceOptionsCommand };
//# sourceMappingURL=DescribeBrokerInstanceOptionsCommand.js.map