import { __extends } from "tslib";
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeUserCommand, serializeAws_restJson1DescribeUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns information about an ActiveMQ user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserCommand = /** @class */ (function (_super) {
    __extends(DescribeUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserCommand(input) {
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
    DescribeUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "DescribeUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeUserCommand(input, context);
    };
    DescribeUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeUserCommand(output, context);
    };
    return DescribeUserCommand;
}($Command));
export { DescribeUserCommand };
//# sourceMappingURL=DescribeUserCommand.js.map