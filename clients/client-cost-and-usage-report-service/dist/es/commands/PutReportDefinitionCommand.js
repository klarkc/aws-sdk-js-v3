import { __extends } from "tslib";
import { PutReportDefinitionRequest, PutReportDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1PutReportDefinitionCommand, serializeAws_json1_1PutReportDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new report using the description that you provide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, PutReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, PutReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new PutReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutReportDefinitionCommand = /** @class */ (function (_super) {
    __extends(PutReportDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutReportDefinitionCommand(input) {
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
    PutReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostAndUsageReportServiceClient";
        var commandName = "PutReportDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutReportDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutReportDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutReportDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutReportDefinitionCommand(input, context);
    };
    PutReportDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutReportDefinitionCommand(output, context);
    };
    return PutReportDefinitionCommand;
}($Command));
export { PutReportDefinitionCommand };
//# sourceMappingURL=PutReportDefinitionCommand.js.map