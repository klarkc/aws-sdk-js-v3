import { __extends } from "tslib";
import { DescribeThingRequest, DescribeThingResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeThingCommand, serializeAws_restJson1DescribeThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingCommandInput} for command's `input` shape.
 * @see {@link DescribeThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThingCommand = /** @class */ (function (_super) {
    __extends(DescribeThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThingCommand(input) {
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
    DescribeThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThingCommand(input, context);
    };
    DescribeThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThingCommand(output, context);
    };
    return DescribeThingCommand;
}($Command));
export { DescribeThingCommand };
//# sourceMappingURL=DescribeThingCommand.js.map