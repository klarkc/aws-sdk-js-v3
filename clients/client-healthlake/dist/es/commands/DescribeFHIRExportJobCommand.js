import { __extends } from "tslib";
import { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeFHIRExportJobCommand, serializeAws_json1_0DescribeFHIRExportJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFHIRExportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeFHIRExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFHIRExportJobCommand(input) {
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
    DescribeFHIRExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "DescribeFHIRExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFHIRExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFHIRExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFHIRExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeFHIRExportJobCommand(input, context);
    };
    DescribeFHIRExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeFHIRExportJobCommand(output, context);
    };
    return DescribeFHIRExportJobCommand;
}($Command));
export { DescribeFHIRExportJobCommand };
//# sourceMappingURL=DescribeFHIRExportJobCommand.js.map