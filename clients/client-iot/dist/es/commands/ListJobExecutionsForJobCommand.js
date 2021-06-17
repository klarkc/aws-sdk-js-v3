import { __extends } from "tslib";
import { ListJobExecutionsForJobRequest, ListJobExecutionsForJobResponse } from "../models/models_1";
import { deserializeAws_restJson1ListJobExecutionsForJobCommand, serializeAws_restJson1ListJobExecutionsForJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the job executions for a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListJobExecutionsForJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListJobExecutionsForJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListJobExecutionsForJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobExecutionsForJobCommandInput} for command's `input` shape.
 * @see {@link ListJobExecutionsForJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobExecutionsForJobCommand = /** @class */ (function (_super) {
    __extends(ListJobExecutionsForJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobExecutionsForJobCommand(input) {
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
    ListJobExecutionsForJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListJobExecutionsForJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobExecutionsForJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobExecutionsForJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobExecutionsForJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobExecutionsForJobCommand(input, context);
    };
    ListJobExecutionsForJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobExecutionsForJobCommand(output, context);
    };
    return ListJobExecutionsForJobCommand;
}($Command));
export { ListJobExecutionsForJobCommand };
//# sourceMappingURL=ListJobExecutionsForJobCommand.js.map