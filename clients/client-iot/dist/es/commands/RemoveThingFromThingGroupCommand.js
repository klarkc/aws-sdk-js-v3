import { __extends } from "tslib";
import { RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse } from "../models/models_2";
import { deserializeAws_restJson1RemoveThingFromThingGroupCommand, serializeAws_restJson1RemoveThingFromThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Remove the specified thing from the specified group.</p>
 * 		       <p>You must specify either a <code>thingGroupArn</code> or a
 * 			<code>thingGroupName</code> to identify the thing group and
 * 			either a <code>thingArn</code> or a <code>thingName</code> to
 * 			identify the thing to remove from the thing group.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromThingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveThingFromThingGroupCommand = /** @class */ (function (_super) {
    __extends(RemoveThingFromThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveThingFromThingGroupCommand(input) {
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
    RemoveThingFromThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "RemoveThingFromThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveThingFromThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveThingFromThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveThingFromThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveThingFromThingGroupCommand(input, context);
    };
    RemoveThingFromThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveThingFromThingGroupCommand(output, context);
    };
    return RemoveThingFromThingGroupCommand;
}($Command));
export { RemoveThingFromThingGroupCommand };
//# sourceMappingURL=RemoveThingFromThingGroupCommand.js.map