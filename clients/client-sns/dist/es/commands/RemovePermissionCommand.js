import { __extends } from "tslib";
import { RemovePermissionInput } from "../models/models_0";
import { deserializeAws_queryRemovePermissionCommand, serializeAws_queryRemovePermissionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a statement from a topic's access control policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, RemovePermissionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, RemovePermissionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemovePermissionCommand = /** @class */ (function (_super) {
    __extends(RemovePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemovePermissionCommand(input) {
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
    RemovePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "RemovePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemovePermissionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemovePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemovePermissionCommand(input, context);
    };
    RemovePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemovePermissionCommand(output, context);
    };
    return RemovePermissionCommand;
}($Command));
export { RemovePermissionCommand };
//# sourceMappingURL=RemovePermissionCommand.js.map