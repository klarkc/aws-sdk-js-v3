import { __extends } from "tslib";
import { CreateLoginProfileRequest, CreateLoginProfileResponse } from "../models/models_0";
import { deserializeAws_queryCreateLoginProfileCommand, serializeAws_queryCreateLoginProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a password for the specified IAM user. A password allows an IAM user to
 *             access AWS services through the AWS Management Console.</p>
 *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to create a password for any IAM user.
 *             Use <a>ChangePassword</a> to update your own existing password in the
 *                 <b>My Security Credentials</b> page in the
 *             AWS Management Console.</p>
 *         <p>For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing passwords</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLoginProfileCommandInput} for command's `input` shape.
 * @see {@link CreateLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateLoginProfileCommand = /** @class */ (function (_super) {
    __extends(CreateLoginProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateLoginProfileCommand(input) {
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
    CreateLoginProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateLoginProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateLoginProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateLoginProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateLoginProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateLoginProfileCommand(input, context);
    };
    CreateLoginProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateLoginProfileCommand(output, context);
    };
    return CreateLoginProfileCommand;
}($Command));
export { CreateLoginProfileCommand };
//# sourceMappingURL=CreateLoginProfileCommand.js.map