import { __extends } from "tslib";
import { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { deserializeAws_queryCreateUserCommand, serializeAws_queryCreateUserCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new IAM user for your AWS account.</p>
 *         <p> For information about quotas for the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateUserCommand = /** @class */ (function (_super) {
    __extends(CreateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateUserCommand(input) {
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
    CreateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateUserCommand(input, context);
    };
    CreateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateUserCommand(output, context);
    };
    return CreateUserCommand;
}($Command));
export { CreateUserCommand };
//# sourceMappingURL=CreateUserCommand.js.map