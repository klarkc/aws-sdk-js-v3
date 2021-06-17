import { __extends } from "tslib";
import { ListThingGroupsForThingRequest, ListThingGroupsForThingResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingGroupsForThingCommand, serializeAws_restJson1ListThingGroupsForThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the thing groups to which the specified thing belongs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingGroupsForThingCommand = /** @class */ (function (_super) {
    __extends(ListThingGroupsForThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingGroupsForThingCommand(input) {
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
    ListThingGroupsForThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingGroupsForThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingGroupsForThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingGroupsForThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingGroupsForThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingGroupsForThingCommand(input, context);
    };
    ListThingGroupsForThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingGroupsForThingCommand(output, context);
    };
    return ListThingGroupsForThingCommand;
}($Command));
export { ListThingGroupsForThingCommand };
//# sourceMappingURL=ListThingGroupsForThingCommand.js.map