import { __extends } from "tslib";
import { UntagUserRequest } from "../models/models_1";
import { deserializeAws_queryUntagUserCommand, serializeAws_queryUntagUserCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagUserCommandInput} for command's `input` shape.
 * @see {@link UntagUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagUserCommand = /** @class */ (function (_super) {
    __extends(UntagUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagUserCommand(input) {
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
    UntagUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagUserCommand(input, context);
    };
    UntagUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagUserCommand(output, context);
    };
    return UntagUserCommand;
}($Command));
export { UntagUserCommand };
//# sourceMappingURL=UntagUserCommand.js.map