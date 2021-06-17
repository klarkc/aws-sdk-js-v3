import { __extends } from "tslib";
import { UntagInstanceProfileRequest } from "../models/models_0";
import { deserializeAws_queryUntagInstanceProfileCommand, serializeAws_queryUntagInstanceProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified tags from the IAM instance profile. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link UntagInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(UntagInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagInstanceProfileCommand(input) {
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
    UntagInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "UntagInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUntagInstanceProfileCommand(input, context);
    };
    UntagInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUntagInstanceProfileCommand(output, context);
    };
    return UntagInstanceProfileCommand;
}($Command));
export { UntagInstanceProfileCommand };
//# sourceMappingURL=UntagInstanceProfileCommand.js.map