import { __extends } from "tslib";
import { DescribeStackProvisioningParametersRequest, DescribeStackProvisioningParametersResult, } from "../models/models_0";
import { deserializeAws_json1_1DescribeStackProvisioningParametersCommand, serializeAws_json1_1DescribeStackProvisioningParametersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests a description of a stack's provisioning parameters.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackProvisioningParametersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackProvisioningParametersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeStackProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeStackProvisioningParametersCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStackProvisioningParametersCommand = /** @class */ (function (_super) {
    __extends(DescribeStackProvisioningParametersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStackProvisioningParametersCommand(input) {
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
    DescribeStackProvisioningParametersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeStackProvisioningParametersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStackProvisioningParametersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStackProvisioningParametersResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStackProvisioningParametersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeStackProvisioningParametersCommand(input, context);
    };
    DescribeStackProvisioningParametersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeStackProvisioningParametersCommand(output, context);
    };
    return DescribeStackProvisioningParametersCommand;
}($Command));
export { DescribeStackProvisioningParametersCommand };
//# sourceMappingURL=DescribeStackProvisioningParametersCommand.js.map