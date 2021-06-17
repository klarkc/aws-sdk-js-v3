import { __extends } from "tslib";
import { ListThingGroupsRequest, ListThingGroupsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingGroupsCommand, serializeAws_restJson1ListThingGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the thing groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingGroupsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingGroupsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListThingGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingGroupsCommand = /** @class */ (function (_super) {
    __extends(ListThingGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingGroupsCommand(input) {
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
    ListThingGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingGroupsCommand(input, context);
    };
    ListThingGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingGroupsCommand(output, context);
    };
    return ListThingGroupsCommand;
}($Command));
export { ListThingGroupsCommand };
//# sourceMappingURL=ListThingGroupsCommand.js.map