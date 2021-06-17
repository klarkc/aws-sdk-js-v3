import { __extends } from "tslib";
import { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetPermissionPolicyCommand, serializeAws_json1_1GetPermissionPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the IAM policy that is attached to the specified rule group.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPermissionPolicyCommand = /** @class */ (function (_super) {
    __extends(GetPermissionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPermissionPolicyCommand(input) {
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
    GetPermissionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "GetPermissionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPermissionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPermissionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPermissionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPermissionPolicyCommand(input, context);
    };
    GetPermissionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPermissionPolicyCommand(output, context);
    };
    return GetPermissionPolicyCommand;
}($Command));
export { GetPermissionPolicyCommand };
//# sourceMappingURL=GetPermissionPolicyCommand.js.map