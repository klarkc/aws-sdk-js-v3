import { __extends } from "tslib";
import { CreateAccountAliasRequest } from "../models/models_0";
import { deserializeAws_queryCreateAccountAliasCommand, serializeAws_queryCreateAccountAliasCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alias for your AWS account. For information about using an AWS account
 *             alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
 *                 alias for your AWS account ID</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccountAliasCommand = /** @class */ (function (_super) {
    __extends(CreateAccountAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccountAliasCommand(input) {
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
    CreateAccountAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateAccountAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccountAliasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccountAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateAccountAliasCommand(input, context);
    };
    CreateAccountAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateAccountAliasCommand(output, context);
    };
    return CreateAccountAliasCommand;
}($Command));
export { CreateAccountAliasCommand };
//# sourceMappingURL=CreateAccountAliasCommand.js.map