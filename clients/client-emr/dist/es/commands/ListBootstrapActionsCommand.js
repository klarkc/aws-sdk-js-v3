import { __extends } from "tslib";
import { ListBootstrapActionsInput, ListBootstrapActionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListBootstrapActionsCommand, serializeAws_json1_1ListBootstrapActionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListBootstrapActionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListBootstrapActionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListBootstrapActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBootstrapActionsCommandInput} for command's `input` shape.
 * @see {@link ListBootstrapActionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBootstrapActionsCommand = /** @class */ (function (_super) {
    __extends(ListBootstrapActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBootstrapActionsCommand(input) {
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
    ListBootstrapActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "ListBootstrapActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBootstrapActionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBootstrapActionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBootstrapActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListBootstrapActionsCommand(input, context);
    };
    ListBootstrapActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListBootstrapActionsCommand(output, context);
    };
    return ListBootstrapActionsCommand;
}($Command));
export { ListBootstrapActionsCommand };
//# sourceMappingURL=ListBootstrapActionsCommand.js.map