import { __extends } from "tslib";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_1";
import { deserializeAws_json1_1ListWorkflowsCommand, serializeAws_json1_1ListWorkflowsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists names of workflows created in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListWorkflowsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListWorkflowsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkflowsCommand = /** @class */ (function (_super) {
    __extends(ListWorkflowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkflowsCommand(input) {
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
    ListWorkflowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "ListWorkflowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkflowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorkflowsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkflowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWorkflowsCommand(input, context);
    };
    ListWorkflowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWorkflowsCommand(output, context);
    };
    return ListWorkflowsCommand;
}($Command));
export { ListWorkflowsCommand };
//# sourceMappingURL=ListWorkflowsCommand.js.map