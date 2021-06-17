import { __extends } from "tslib";
import { RemoveResourcePermissionRequest } from "../models/models_0";
import { deserializeAws_restJson1RemoveResourcePermissionCommand, serializeAws_restJson1RemoveResourcePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the permission for the specified principal from the specified
 *             resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, RemoveResourcePermissionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, RemoveResourcePermissionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new RemoveResourcePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveResourcePermissionCommand = /** @class */ (function (_super) {
    __extends(RemoveResourcePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveResourcePermissionCommand(input) {
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
    RemoveResourcePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "RemoveResourcePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveResourcePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveResourcePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveResourcePermissionCommand(input, context);
    };
    RemoveResourcePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveResourcePermissionCommand(output, context);
    };
    return RemoveResourcePermissionCommand;
}($Command));
export { RemoveResourcePermissionCommand };
//# sourceMappingURL=RemoveResourcePermissionCommand.js.map