import { __extends } from "tslib";
import { DeleteAccountAliasRequest } from "../models/models_0";
import { deserializeAws_queryDeleteAccountAliasCommand, serializeAws_queryDeleteAccountAliasCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes the specified AWS account alias. For information about using an AWS
 *             account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your AWS account ID</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountAliasCommand(input) {
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
    DeleteAccountAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteAccountAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccountAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteAccountAliasCommand(input, context);
    };
    DeleteAccountAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteAccountAliasCommand(output, context);
    };
    return DeleteAccountAliasCommand;
}($Command));
export { DeleteAccountAliasCommand };
//# sourceMappingURL=DeleteAccountAliasCommand.js.map