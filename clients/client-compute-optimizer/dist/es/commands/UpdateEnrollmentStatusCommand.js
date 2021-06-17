import { __extends } from "tslib";
import { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/models_0";
import { deserializeAws_json1_0UpdateEnrollmentStatusCommand, serializeAws_json1_0UpdateEnrollmentStatusCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the enrollment (opt in and opt out) status of an account to the
 *             AWS Compute Optimizer service.</p>
 *
 *
 *
 *         <p>If the account is a management account of an organization, this action can also be used
 *             to enroll member accounts within the organization.</p>
 *
 *         <p>You must have the appropriate permissions to opt in to Compute Optimizer, to view its
 *             recommendations, and to opt out. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/security-iam.html">Controlling access with AWS
 *                 Identity and Access Management</a> in the <i>AWS Compute Optimizer User
 *                 Guide</i>.</p>
 *
 *
 *
 *         <p>When you opt in, Compute Optimizer automatically creates a Service-Linked Role in your
 *             account to access its data. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/using-service-linked-roles.html">Using
 *                 Service-Linked Roles for AWS Compute Optimizer</a> in the <i>AWS Compute Optimizer User
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, UpdateEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new UpdateEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEnrollmentStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateEnrollmentStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEnrollmentStatusCommand(input) {
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
    UpdateEnrollmentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "UpdateEnrollmentStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEnrollmentStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEnrollmentStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEnrollmentStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateEnrollmentStatusCommand(input, context);
    };
    UpdateEnrollmentStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateEnrollmentStatusCommand(output, context);
    };
    return UpdateEnrollmentStatusCommand;
}($Command));
export { UpdateEnrollmentStatusCommand };
//# sourceMappingURL=UpdateEnrollmentStatusCommand.js.map