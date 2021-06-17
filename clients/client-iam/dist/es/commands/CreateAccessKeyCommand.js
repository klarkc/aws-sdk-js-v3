import { __extends } from "tslib";
import { CreateAccessKeyRequest, CreateAccessKeyResponse } from "../models/models_0";
import { deserializeAws_queryCreateAccessKeyCommand, serializeAws_queryCreateAccessKeyCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the
 *             specified user. The default status for new keys is <code>Active</code>.</p>
 *         <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the AWS access key ID signing the request. This operation works for access keys under
 *             the AWS account. Consequently, you can use this operation to manage AWS account root
 *             user credentials. This is true even if the AWS account has no associated users.</p>
 *         <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *         <important>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *                 only during key and user creation. You must save the key (for example, in a text
 *                 file) if you want to be able to access it again. If a secret key is lost, you can
 *                 delete the access keys for the associated user and then create new keys.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessKeyCommand = /** @class */ (function (_super) {
    __extends(CreateAccessKeyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccessKeyCommand(input) {
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
    CreateAccessKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreateAccessKeyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessKeyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccessKeyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccessKeyCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateAccessKeyCommand(input, context);
    };
    CreateAccessKeyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateAccessKeyCommand(output, context);
    };
    return CreateAccessKeyCommand;
}($Command));
export { CreateAccessKeyCommand };
//# sourceMappingURL=CreateAccessKeyCommand.js.map