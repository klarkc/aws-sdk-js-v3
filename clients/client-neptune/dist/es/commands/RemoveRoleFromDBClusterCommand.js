import { __extends } from "tslib";
import { RemoveRoleFromDBClusterMessage } from "../models/models_0";
import { deserializeAws_queryRemoveRoleFromDBClusterCommand, serializeAws_queryRemoveRoleFromDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveRoleFromDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveRoleFromDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromDBClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveRoleFromDBClusterCommand = /** @class */ (function (_super) {
    __extends(RemoveRoleFromDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveRoleFromDBClusterCommand(input) {
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
    RemoveRoleFromDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "RemoveRoleFromDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveRoleFromDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveRoleFromDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveRoleFromDBClusterCommand(input, context);
    };
    RemoveRoleFromDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveRoleFromDBClusterCommand(output, context);
    };
    return RemoveRoleFromDBClusterCommand;
}($Command));
export { RemoveRoleFromDBClusterCommand };
//# sourceMappingURL=RemoveRoleFromDBClusterCommand.js.map