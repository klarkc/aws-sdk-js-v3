import { __extends } from "tslib";
import { RemovePermissionRequest } from "../models/models_0";
import { deserializeAws_json1_1RemovePermissionCommand, serializeAws_json1_1RemovePermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes the permission of another AWS account to be able to put events to the specified
 *       event bus. Specify the account to revoke by the <code>StatementId</code> value that you
 *       associated with the account when you granted it permission with <code>PutPermission</code>.
 *       You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemovePermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemovePermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "EventBridgeClient";
        var commandName = "RemovePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemovePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemovePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RemovePermissionCommand(input, context);
    };
    RemovePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RemovePermissionCommand(output, context);
    };
    return RemovePermissionCommand;
}($Command));
export { RemovePermissionCommand };
//# sourceMappingURL=RemovePermissionCommand.js.map