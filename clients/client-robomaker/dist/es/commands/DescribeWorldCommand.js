import { __extends } from "tslib";
import { DescribeWorldRequest, DescribeWorldResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeWorldCommand, serializeAws_restJson1DescribeWorldCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a world.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeWorldCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeWorldCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeWorldCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorldCommandInput} for command's `input` shape.
 * @see {@link DescribeWorldCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeWorldCommand = /** @class */ (function (_super) {
    __extends(DescribeWorldCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeWorldCommand(input) {
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
    DescribeWorldCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeWorldCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeWorldRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeWorldResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeWorldCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeWorldCommand(input, context);
    };
    DescribeWorldCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeWorldCommand(output, context);
    };
    return DescribeWorldCommand;
}($Command));
export { DescribeWorldCommand };
//# sourceMappingURL=DescribeWorldCommand.js.map