import { __extends } from "tslib";
import { UntagRoleRequest } from "../models/models_1";
import { deserializeAws_queryUntagRoleCommand, serializeAws_queryUntagRoleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagRoleCommandInput} for command's `input` shape.
 * @see {@link UntagRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagRoleCommand = /** @class */ (function (_super) {
    __extends(UntagRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagRoleCommand(input) {
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
    UntagRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagRoleCommand(input, context);
    };
    UntagRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagRoleCommand(output, context);
    };
    return UntagRoleCommand;
}($Command));
export { UntagRoleCommand };
//# sourceMappingURL=UntagRoleCommand.js.map