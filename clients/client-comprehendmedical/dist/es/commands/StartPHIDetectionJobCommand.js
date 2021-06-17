import { __extends } from "tslib";
import { StartPHIDetectionJobRequest, StartPHIDetectionJobResponse } from "../models/models_0";
import { deserializeAws_json1_1StartPHIDetectionJobCommand, serializeAws_json1_1StartPHIDetectionJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an asynchronous job to detect protected health information (PHI). Use the
 *         <code>DescribePHIDetectionJob</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartPHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartPHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartPHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartPHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartPHIDetectionJobCommand = /** @class */ (function (_super) {
    __extends(StartPHIDetectionJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartPHIDetectionJobCommand(input) {
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
    StartPHIDetectionJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "StartPHIDetectionJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartPHIDetectionJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartPHIDetectionJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartPHIDetectionJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartPHIDetectionJobCommand(input, context);
    };
    StartPHIDetectionJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartPHIDetectionJobCommand(output, context);
    };
    return StartPHIDetectionJobCommand;
}($Command));
export { StartPHIDetectionJobCommand };
//# sourceMappingURL=StartPHIDetectionJobCommand.js.map