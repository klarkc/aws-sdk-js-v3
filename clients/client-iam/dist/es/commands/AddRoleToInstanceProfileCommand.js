import { __extends } from "tslib";
import { AddRoleToInstanceProfileRequest } from "../models/models_0";
import { deserializeAws_queryAddRoleToInstanceProfileCommand, serializeAws_queryAddRoleToInstanceProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified IAM role to the specified instance profile. An instance profile
 *             can contain only one role, and this quota cannot be increased. You can remove the
 *             existing role and then add a different role to an instance profile. You must then wait
 *             for the change to appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual
 *                 consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the
 *                 instance profile</a>, or you can stop your instance and then restart it.</p>
 *         <note>
 *             <p>The caller of this operation must be granted the <code>PassRole</code> permission
 *                 on the IAM role by a permissions policy.</p>
 *         </note>
 *         <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
 *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddRoleToInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AddRoleToInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddRoleToInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link AddRoleToInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddRoleToInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(AddRoleToInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddRoleToInstanceProfileCommand(input) {
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
    AddRoleToInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "AddRoleToInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddRoleToInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddRoleToInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddRoleToInstanceProfileCommand(input, context);
    };
    AddRoleToInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddRoleToInstanceProfileCommand(output, context);
    };
    return AddRoleToInstanceProfileCommand;
}($Command));
export { AddRoleToInstanceProfileCommand };
//# sourceMappingURL=AddRoleToInstanceProfileCommand.js.map