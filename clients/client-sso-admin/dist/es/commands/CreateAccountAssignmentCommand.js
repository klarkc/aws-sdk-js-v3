import { __extends } from "tslib";
import { CreateAccountAssignmentRequest, CreateAccountAssignmentResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateAccountAssignmentCommand, serializeAws_json1_1CreateAccountAssignmentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Assigns access to a principal for a specified AWS account using a specified permission
 *       set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p>
 *          </note>
 *          <note>
 *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> to make these updates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccountAssignmentCommand = /** @class */ (function (_super) {
    __extends(CreateAccountAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccountAssignmentCommand(input) {
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
    CreateAccountAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "CreateAccountAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccountAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccountAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccountAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAccountAssignmentCommand(input, context);
    };
    CreateAccountAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAccountAssignmentCommand(output, context);
    };
    return CreateAccountAssignmentCommand;
}($Command));
export { CreateAccountAssignmentCommand };
//# sourceMappingURL=CreateAccountAssignmentCommand.js.map