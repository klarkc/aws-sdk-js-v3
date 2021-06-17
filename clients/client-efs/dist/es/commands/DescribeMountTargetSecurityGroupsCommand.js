import { __extends } from "tslib";
import { DescribeMountTargetSecurityGroupsRequest, DescribeMountTargetSecurityGroupsResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand, serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the security groups currently in effect for a mount target. This operation
 *       requires that the network interface of the mount target has been created and the lifecycle
 *       state of the mount target is not <code>deleted</code>.</p>
 *          <p>This operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's
 *           network interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMountTargetSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(DescribeMountTargetSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMountTargetSecurityGroupsCommand(input) {
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
    DescribeMountTargetSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeMountTargetSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMountTargetSecurityGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMountTargetSecurityGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMountTargetSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand(input, context);
    };
    DescribeMountTargetSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand(output, context);
    };
    return DescribeMountTargetSecurityGroupsCommand;
}($Command));
export { DescribeMountTargetSecurityGroupsCommand };
//# sourceMappingURL=DescribeMountTargetSecurityGroupsCommand.js.map