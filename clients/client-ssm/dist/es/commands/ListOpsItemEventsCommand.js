import { __extends } from "tslib";
import { ListOpsItemEventsRequest, ListOpsItemEventsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListOpsItemEventsCommand, serializeAws_json1_1ListOpsItemEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all OpsItem events in the current AWS account and Region. You can limit
 *    the results to events associated with specific OpsItems by specifying a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsItemEventsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListOpsItemEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpsItemEventsCommandInput} for command's `input` shape.
 * @see {@link ListOpsItemEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOpsItemEventsCommand = /** @class */ (function (_super) {
    __extends(ListOpsItemEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOpsItemEventsCommand(input) {
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
    ListOpsItemEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListOpsItemEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOpsItemEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOpsItemEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOpsItemEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOpsItemEventsCommand(input, context);
    };
    ListOpsItemEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOpsItemEventsCommand(output, context);
    };
    return ListOpsItemEventsCommand;
}($Command));
export { ListOpsItemEventsCommand };
//# sourceMappingURL=ListOpsItemEventsCommand.js.map