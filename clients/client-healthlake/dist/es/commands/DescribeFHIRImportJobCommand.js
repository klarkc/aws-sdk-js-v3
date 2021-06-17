import { __extends } from "tslib";
import { DescribeFHIRImportJobRequest, DescribeFHIRImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeFHIRImportJobCommand, serializeAws_json1_0DescribeFHIRImportJobCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRImportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFHIRImportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeFHIRImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFHIRImportJobCommand(input) {
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
    DescribeFHIRImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "DescribeFHIRImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFHIRImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFHIRImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFHIRImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeFHIRImportJobCommand(input, context);
    };
    DescribeFHIRImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeFHIRImportJobCommand(output, context);
    };
    return DescribeFHIRImportJobCommand;
}($Command));
export { DescribeFHIRImportJobCommand };
//# sourceMappingURL=DescribeFHIRImportJobCommand.js.map