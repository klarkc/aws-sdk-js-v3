import { __extends } from "tslib";
import { DescribeBrokerRequest, DescribeBrokerResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeBrokerCommand, serializeAws_restJson1DescribeBrokerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns information about the specified broker.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBrokerCommand = /** @class */ (function (_super) {
    __extends(DescribeBrokerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBrokerCommand(input) {
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
    DescribeBrokerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DescribeBrokerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBrokerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBrokerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBrokerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeBrokerCommand(input, context);
    };
    DescribeBrokerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeBrokerCommand(output, context);
    };
    return DescribeBrokerCommand;
}($Command));
export { DescribeBrokerCommand };
//# sourceMappingURL=DescribeBrokerCommand.js.map