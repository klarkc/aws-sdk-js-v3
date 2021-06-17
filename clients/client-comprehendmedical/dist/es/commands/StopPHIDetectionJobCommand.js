import { __extends } from "tslib";
import { StopPHIDetectionJobRequest, StopPHIDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StopPHIDetectionJobCommand, serializeAws_json1_1StopPHIDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a protected health information (PHI) detection job in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StopPHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StopPHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StopPHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StopPHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopPHIDetectionJobCommand = /** @class */ (function (_super) {
    __extends(StopPHIDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopPHIDetectionJobCommand(input) {
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
    StopPHIDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StopPHIDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopPHIDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopPHIDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopPHIDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopPHIDetectionJobCommand(input, context);
    };
    StopPHIDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopPHIDetectionJobCommand(output, context);
    };
    return StopPHIDetectionJobCommand;
}($Command));
export { StopPHIDetectionJobCommand };
//# sourceMappingURL=StopPHIDetectionJobCommand.js.map