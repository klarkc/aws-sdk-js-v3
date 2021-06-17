import { __extends } from "tslib";
import { DescribeIAMPolicyAssignmentRequest, DescribeIAMPolicyAssignmentResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand, serializeAws_restJson1DescribeIAMPolicyAssignmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing IAM policy assignment, as specified by the assignment name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIAMPolicyAssignmentCommand = /** @class */ (function (_super) {
    __extends(DescribeIAMPolicyAssignmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIAMPolicyAssignmentCommand(input) {
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
    DescribeIAMPolicyAssignmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "QuickSightClient";
        var commandName = "DescribeIAMPolicyAssignmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIAMPolicyAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIAMPolicyAssignmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIAMPolicyAssignmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIAMPolicyAssignmentCommand(input, context);
    };
    DescribeIAMPolicyAssignmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand(output, context);
    };
    return DescribeIAMPolicyAssignmentCommand;
}($Command));
export { DescribeIAMPolicyAssignmentCommand };
//# sourceMappingURL=DescribeIAMPolicyAssignmentCommand.js.map