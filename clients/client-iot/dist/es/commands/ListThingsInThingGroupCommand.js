import { __extends } from "tslib";
import { ListThingsInThingGroupRequest, ListThingsInThingGroupResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingsInThingGroupCommand, serializeAws_restJson1ListThingsInThingGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the things in the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsInThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsInThingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingsInThingGroupCommand = /** @class */ (function (_super) {
    __extends(ListThingsInThingGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingsInThingGroupCommand(input) {
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
    ListThingsInThingGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingsInThingGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingsInThingGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingsInThingGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingsInThingGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingsInThingGroupCommand(input, context);
    };
    ListThingsInThingGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingsInThingGroupCommand(output, context);
    };
    return ListThingsInThingGroupCommand;
}($Command));
export { ListThingsInThingGroupCommand };
//# sourceMappingURL=ListThingsInThingGroupCommand.js.map