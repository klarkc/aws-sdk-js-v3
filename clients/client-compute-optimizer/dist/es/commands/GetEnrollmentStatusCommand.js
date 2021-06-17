import { __extends } from "tslib";
import { GetEnrollmentStatusRequest, GetEnrollmentStatusResponse } from "../models/models_0";
import { deserializeAws_json1_0GetEnrollmentStatusCommand, serializeAws_json1_0GetEnrollmentStatusCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the enrollment (opt in) status of an account to the AWS Compute Optimizer
 *             service.</p>
 *
 *
 *
 *         <p>If the account is the management account of an organization, this action also confirms
 *             the enrollment status of member accounts within the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEnrollmentStatusCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEnrollmentStatusCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEnrollmentStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnrollmentStatusCommandInput} for command's `input` shape.
 * @see {@link GetEnrollmentStatusCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEnrollmentStatusCommand = /** @class */ (function (_super) {
    __extends(GetEnrollmentStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEnrollmentStatusCommand(input) {
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
    GetEnrollmentStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComputeOptimizerClient";
        var commandName = "GetEnrollmentStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEnrollmentStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEnrollmentStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEnrollmentStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetEnrollmentStatusCommand(input, context);
    };
    GetEnrollmentStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetEnrollmentStatusCommand(output, context);
    };
    return GetEnrollmentStatusCommand;
}($Command));
export { GetEnrollmentStatusCommand };
//# sourceMappingURL=GetEnrollmentStatusCommand.js.map