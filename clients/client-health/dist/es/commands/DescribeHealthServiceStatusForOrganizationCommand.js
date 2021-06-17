import { __extends } from "tslib";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand, serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation provides status information on enabling or disabling AWS Health to work
 *          with your organization. To call this operation, you must sign in as an IAM user, assume
 *          an IAM role, or sign in as the root user (not recommended) in the organization's
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeHealthServiceStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeHealthServiceStatusForOrganizationCommand = /** @class */ (function (_super) {
    __extends(DescribeHealthServiceStatusForOrganizationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeHealthServiceStatusForOrganizationCommand(input) {
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
    DescribeHealthServiceStatusForOrganizationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeHealthServiceStatusForOrganizationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: DescribeHealthServiceStatusForOrganizationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeHealthServiceStatusForOrganizationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(input, context);
    };
    DescribeHealthServiceStatusForOrganizationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(output, context);
    };
    return DescribeHealthServiceStatusForOrganizationCommand;
}($Command));
export { DescribeHealthServiceStatusForOrganizationCommand };
//# sourceMappingURL=DescribeHealthServiceStatusForOrganizationCommand.js.map