import { __extends } from "tslib";
import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import { deserializeAws_json1_1ListCommandInvocationsCommand, serializeAws_json1_1ListCommandInvocationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
 *    or more instances. A command invocation applies to one instance. For example, if a user runs
 *    SendCommand against three instances, then a command invocation is created for each requested
 *    instance ID. ListCommandInvocations provide status about command execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListCommandInvocationsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListCommandInvocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCommandInvocationsCommandInput} for command's `input` shape.
 * @see {@link ListCommandInvocationsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCommandInvocationsCommand = /** @class */ (function (_super) {
    __extends(ListCommandInvocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCommandInvocationsCommand(input) {
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
    ListCommandInvocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListCommandInvocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCommandInvocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCommandInvocationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCommandInvocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCommandInvocationsCommand(input, context);
    };
    ListCommandInvocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCommandInvocationsCommand(output, context);
    };
    return ListCommandInvocationsCommand;
}($Command));
export { ListCommandInvocationsCommand };
//# sourceMappingURL=ListCommandInvocationsCommand.js.map