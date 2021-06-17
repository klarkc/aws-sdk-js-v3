import { __extends } from "tslib";
import { ListTasksRequest, ListTasksResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTasksCommand, serializeAws_json1_1ListTasksCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of tasks. You can filter the results by cluster, task definition
 * 			family, container instance, launch type, what IAM principal started the task, or by the
 * 			desired status of the task.</p>
 * 		       <p>Recently stopped tasks might appear in the returned results. Currently, stopped tasks
 * 			appear in the returned results for at least one hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListTasksCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListTasksCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTasksCommand = /** @class */ (function (_super) {
    __extends(ListTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTasksCommand(input) {
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
    ListTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTasksCommand(input, context);
    };
    ListTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTasksCommand(output, context);
    };
    return ListTasksCommand;
}($Command));
export { ListTasksCommand };
//# sourceMappingURL=ListTasksCommand.js.map