import { __extends } from "tslib";
import { DescribePHIDetectionJobRequest, DescribePHIDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePHIDetectionJobCommand, serializeAws_json1_1DescribePHIDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the properties associated with a protected health information (PHI) detection job.
 *       Use this operation to get the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribePHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribePHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribePHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribePHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePHIDetectionJobCommand = /** @class */ (function (_super) {
    __extends(DescribePHIDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePHIDetectionJobCommand(input) {
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
    DescribePHIDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DescribePHIDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePHIDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePHIDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePHIDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePHIDetectionJobCommand(input, context);
    };
    DescribePHIDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePHIDetectionJobCommand(output, context);
    };
    return DescribePHIDetectionJobCommand;
}($Command));
export { DescribePHIDetectionJobCommand };
//# sourceMappingURL=DescribePHIDetectionJobCommand.js.map