import { __extends } from "tslib";
import { ListJobExecutionsForThingRequest, ListJobExecutionsForThingResponse } from "../models/models_1";
import { deserializeAws_restJson1ListJobExecutionsForThingCommand, serializeAws_restJson1ListJobExecutionsForThingCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the job executions for the specified thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListJobExecutionsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobExecutionsForThingCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobExecutionsForThingCommand = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForThingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobExecutionsForThingCommand(input) {
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
    ListJobExecutionsForThingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListJobExecutionsForThingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobExecutionsForThingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobExecutionsForThingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobExecutionsForThingCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobExecutionsForThingCommand(input, context);
    };
    ListJobExecutionsForThingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobExecutionsForThingCommand(output, context);
    };
    return ListJobExecutionsForThingCommand;
}($Command));
export { ListJobExecutionsForThingCommand };
//# sourceMappingURL=ListJobExecutionsForThingCommand.js.map