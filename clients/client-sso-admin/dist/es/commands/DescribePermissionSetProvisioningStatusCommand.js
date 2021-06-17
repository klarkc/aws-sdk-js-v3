import { __extends } from "tslib";
import { DescribePermissionSetProvisioningStatusRequest, DescribePermissionSetProvisioningStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand, serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status for the given permission set provisioning request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribePermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePermissionSetProvisioningStatusCommand = /** @class */ (function (_super) {
    __extends(DescribePermissionSetProvisioningStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePermissionSetProvisioningStatusCommand(input) {
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
    DescribePermissionSetProvisioningStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DescribePermissionSetProvisioningStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePermissionSetProvisioningStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePermissionSetProvisioningStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePermissionSetProvisioningStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand(input, context);
    };
    DescribePermissionSetProvisioningStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand(output, context);
    };
    return DescribePermissionSetProvisioningStatusCommand;
}($Command));
export { DescribePermissionSetProvisioningStatusCommand };
//# sourceMappingURL=DescribePermissionSetProvisioningStatusCommand.js.map