import { __extends } from "tslib";
import { DescribePermissionSetRequest, DescribePermissionSetResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePermissionSetCommand, serializeAws_json1_1DescribePermissionSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the details of the permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionSetCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePermissionSetCommand = /** @class */ (function (_super) {
    __extends(DescribePermissionSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePermissionSetCommand(input) {
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
    DescribePermissionSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DescribePermissionSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePermissionSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePermissionSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePermissionSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePermissionSetCommand(input, context);
    };
    DescribePermissionSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePermissionSetCommand(output, context);
    };
    return DescribePermissionSetCommand;
}($Command));
export { DescribePermissionSetCommand };
//# sourceMappingURL=DescribePermissionSetCommand.js.map