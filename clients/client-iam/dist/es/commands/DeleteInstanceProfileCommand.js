import { __extends } from "tslib";
import { DeleteInstanceProfileRequest } from "../models/models_0";
import { deserializeAws_queryDeleteInstanceProfileCommand, serializeAws_queryDeleteInstanceProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified instance profile. The instance profile must not have an
 *             associated role.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
 *                 profile you are about to delete. Deleting a role or instance profile that is
 *                 associated with a running instance will break any applications running on the
 *                 instance.</p>
 *         </important>
 *         <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(DeleteInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInstanceProfileCommand(input) {
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
    DeleteInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteInstanceProfileCommand(input, context);
    };
    DeleteInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteInstanceProfileCommand(output, context);
    };
    return DeleteInstanceProfileCommand;
}($Command));
export { DeleteInstanceProfileCommand };
//# sourceMappingURL=DeleteInstanceProfileCommand.js.map