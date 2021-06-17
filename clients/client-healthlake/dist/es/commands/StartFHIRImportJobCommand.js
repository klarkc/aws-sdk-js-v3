import { __extends } from "tslib";
import { StartFHIRImportJobRequest, StartFHIRImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_0StartFHIRImportJobCommand, serializeAws_json1_0StartFHIRImportJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Begins a FHIR Import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new StartFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRImportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartFHIRImportJobCommand = /** @class */ (function (_super) {
    __extends(StartFHIRImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartFHIRImportJobCommand(input) {
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
    StartFHIRImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "StartFHIRImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartFHIRImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartFHIRImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartFHIRImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0StartFHIRImportJobCommand(input, context);
    };
    StartFHIRImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0StartFHIRImportJobCommand(output, context);
    };
    return StartFHIRImportJobCommand;
}($Command));
export { StartFHIRImportJobCommand };
//# sourceMappingURL=StartFHIRImportJobCommand.js.map