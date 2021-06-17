import { __extends } from "tslib";
import { UntagPolicyRequest } from "../models/models_1";
import { deserializeAws_queryUntagPolicyCommand, serializeAws_queryUntagPolicyCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the customer managed policy. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagPolicyCommandInput} for command's `input` shape.
 * @see {@link UntagPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagPolicyCommand = /** @class */ (function (_super) {
    __extends(UntagPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagPolicyCommand(input) {
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
    UntagPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagPolicyCommand(input, context);
    };
    UntagPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagPolicyCommand(output, context);
    };
    return UntagPolicyCommand;
}($Command));
export { UntagPolicyCommand };
//# sourceMappingURL=UntagPolicyCommand.js.map