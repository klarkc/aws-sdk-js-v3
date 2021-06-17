import { __extends } from "tslib";
import { ListThingRegistrationTasksRequest, ListThingRegistrationTasksResponse } from "../models/models_1";
import { deserializeAws_restJson1ListThingRegistrationTasksCommand, serializeAws_restJson1ListThingRegistrationTasksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List bulk thing provisioning tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingRegistrationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingRegistrationTasksCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThingRegistrationTasksCommand = /** @class */ (function (_super) {
    __extends(ListThingRegistrationTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThingRegistrationTasksCommand(input) {
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
    ListThingRegistrationTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListThingRegistrationTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThingRegistrationTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThingRegistrationTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThingRegistrationTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListThingRegistrationTasksCommand(input, context);
    };
    ListThingRegistrationTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListThingRegistrationTasksCommand(output, context);
    };
    return ListThingRegistrationTasksCommand;
}($Command));
export { ListThingRegistrationTasksCommand };
//# sourceMappingURL=ListThingRegistrationTasksCommand.js.map