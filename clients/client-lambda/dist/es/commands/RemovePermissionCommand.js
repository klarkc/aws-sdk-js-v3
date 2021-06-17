import { __extends } from "tslib";
import { RemovePermissionRequest } from "../models/models_0";
import { deserializeAws_restJson1RemovePermissionCommand, serializeAws_restJson1RemovePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Revokes function-use permission from an AWS service or another account. You can get the ID of the statement
 *       from the output of <a>GetPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, RemovePermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, RemovePermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "LambdaClient";
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
        return serializeAws_restJson1RemovePermissionCommand(input, context);
    };
    RemovePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemovePermissionCommand(output, context);
    };
    return RemovePermissionCommand;
}($Command));
export { RemovePermissionCommand };
//# sourceMappingURL=RemovePermissionCommand.js.map