import { __extends } from "tslib";
import { DescribeThingTypeRequest, DescribeThingTypeResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeThingTypeCommand, serializeAws_restJson1DescribeThingTypeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified thing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingTypeCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingTypeCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeThingTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThingTypeCommand = /** @class */ (function (_super) {
    __extends(DescribeThingTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThingTypeCommand(input) {
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
    DescribeThingTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeThingTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThingTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThingTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThingTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThingTypeCommand(input, context);
    };
    DescribeThingTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThingTypeCommand(output, context);
    };
    return DescribeThingTypeCommand;
}($Command));
export { DescribeThingTypeCommand };
//# sourceMappingURL=DescribeThingTypeCommand.js.map