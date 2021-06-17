import { __extends } from "tslib";
import { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListStepsCommand, serializeAws_json1_1ListStepsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request of filter by <code>StepStates</code>. You can
 *          specify a maximum of 10 <code>stepIDs</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStepsCommandInput} for command's `input` shape.
 * @see {@link ListStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStepsCommand = /** @class */ (function (_super) {
    __extends(ListStepsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStepsCommand(input) {
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
    ListStepsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListStepsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStepsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListStepsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStepsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListStepsCommand(input, context);
    };
    ListStepsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListStepsCommand(output, context);
    };
    return ListStepsCommand;
}($Command));
export { ListStepsCommand };
//# sourceMappingURL=ListStepsCommand.js.map