import { __extends } from "tslib";
import { DescribeAuthorizerRequest, DescribeAuthorizerResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeAuthorizerCommand, serializeAws_restJson1DescribeAuthorizerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuthorizerCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuthorizerCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuthorizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuthorizerCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuthorizerCommand = /** @class */ (function (_super) {
    __extends(DescribeAuthorizerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuthorizerCommand(input) {
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
    DescribeAuthorizerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAuthorizerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuthorizerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuthorizerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuthorizerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuthorizerCommand(input, context);
    };
    DescribeAuthorizerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuthorizerCommand(output, context);
    };
    return DescribeAuthorizerCommand;
}($Command));
export { DescribeAuthorizerCommand };
//# sourceMappingURL=DescribeAuthorizerCommand.js.map