import { __extends } from "tslib";
import { ModifyMountTargetSecurityGroupsRequest } from "../models/models_0";
import { deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand, serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the set of security groups in effect for a mount target.</p>
 *          <p>When you create a mount target, Amazon EFS also creates a new network interface. For
 *       more information, see <a>CreateMountTarget</a>. This operation replaces the security groups in effect for the
 *       network interface associated with a mount target, with the <code>SecurityGroups</code>
 *       provided in the request. This operation requires that the network interface of the mount
 *       target has been created and the lifecycle state of the mount target is not
 *         <code>deleted</code>. </p>
 *          <p>The operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:ModifyMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:ModifyNetworkInterfaceAttribute</code> action on the mount target's network
 *           interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, ModifyMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, ModifyMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new ModifyMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ModifyMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyMountTargetSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(ModifyMountTargetSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyMountTargetSecurityGroupsCommand(input) {
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
    ModifyMountTargetSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "ModifyMountTargetSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyMountTargetSecurityGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyMountTargetSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(input, context);
    };
    ModifyMountTargetSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand(output, context);
    };
    return ModifyMountTargetSecurityGroupsCommand;
}($Command));
export { ModifyMountTargetSecurityGroupsCommand };
//# sourceMappingURL=ModifyMountTargetSecurityGroupsCommand.js.map