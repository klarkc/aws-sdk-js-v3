import { __extends } from "tslib";
import { StartFHIRExportJobRequest, StartFHIRExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_0StartFHIRExportJobCommand, serializeAws_json1_0StartFHIRExportJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Begins a FHIR export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new StartFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartFHIRExportJobCommand = /** @class */ (function (_super) {
    __extends(StartFHIRExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartFHIRExportJobCommand(input) {
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
    StartFHIRExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "StartFHIRExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartFHIRExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartFHIRExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartFHIRExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartFHIRExportJobCommand(input, context);
    };
    StartFHIRExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartFHIRExportJobCommand(output, context);
    };
    return StartFHIRExportJobCommand;
}($Command));
export { StartFHIRExportJobCommand };
//# sourceMappingURL=StartFHIRExportJobCommand.js.map