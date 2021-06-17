import { __extends } from "tslib";
import { DescribeDefaultAuthorizerRequest, DescribeDefaultAuthorizerResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeDefaultAuthorizerCommand, serializeAws_restJson1DescribeDefaultAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the default authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDefaultAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDefaultAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDefaultAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDefaultAuthorizerCommand = /** @class */ (function (_super) {
    __extends(DescribeDefaultAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDefaultAuthorizerCommand(input) {
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
    DescribeDefaultAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeDefaultAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDefaultAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDefaultAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDefaultAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDefaultAuthorizerCommand(input, context);
    };
    DescribeDefaultAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDefaultAuthorizerCommand(output, context);
    };
    return DescribeDefaultAuthorizerCommand;
}($Command));
export { DescribeDefaultAuthorizerCommand };
//# sourceMappingURL=DescribeDefaultAuthorizerCommand.js.map