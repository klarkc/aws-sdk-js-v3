import { __extends } from "tslib";
import { DescribeThingGroupRequest, DescribeThingGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeThingGroupCommand, serializeAws_restJson1DescribeThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe a thing group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeThingGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeThingGroupCommand(input) {
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
    DescribeThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeThingGroupCommand(input, context);
    };
    DescribeThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeThingGroupCommand(output, context);
    };
    return DescribeThingGroupCommand;
}($Command));
export { DescribeThingGroupCommand };
//# sourceMappingURL=DescribeThingGroupCommand.js.map