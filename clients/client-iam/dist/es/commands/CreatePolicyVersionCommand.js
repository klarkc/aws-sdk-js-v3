import { __extends } from "tslib";
import { CreatePolicyVersionRequest, CreatePolicyVersionResponse } from "../models/models_0";
import { deserializeAws_queryCreatePolicyVersionCommand, serializeAws_queryCreatePolicyVersionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new version of the specified managed policy. To update a managed policy, you
 *             create a new policy version. A managed policy can have up to five versions. If the
 *             policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p>
 *         <p>Optionally, you can set the new version as the policy's default version. The default
 *             version is the version that is in effect for the IAM users, groups, and roles to which
 *             the policy is attached.</p>
 *         <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for managed
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreatePolicyVersionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreatePolicyVersionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreatePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePolicyVersionCommand = /** @class */ (function (_super) {
    __extends(CreatePolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePolicyVersionCommand(input) {
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
    CreatePolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "CreatePolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePolicyVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreatePolicyVersionCommand(input, context);
    };
    CreatePolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreatePolicyVersionCommand(output, context);
    };
    return CreatePolicyVersionCommand;
}($Command));
export { CreatePolicyVersionCommand };
//# sourceMappingURL=CreatePolicyVersionCommand.js.map