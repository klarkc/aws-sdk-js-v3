import { __extends } from "tslib";
import { ModifyReportDefinitionRequest, ModifyReportDefinitionResponse } from "../models/models_0";
import { deserializeAws_json1_1ModifyReportDefinitionCommand, serializeAws_json1_1ModifyReportDefinitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to programatically update your report preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, ModifyReportDefinitionCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, ModifyReportDefinitionCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new ModifyReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link ModifyReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyReportDefinitionCommand = /** @class */ (function (_super) {
    __extends(ModifyReportDefinitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyReportDefinitionCommand(input) {
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
    ModifyReportDefinitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostAndUsageReportServiceClient";
        var commandName = "ModifyReportDefinitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyReportDefinitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyReportDefinitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyReportDefinitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyReportDefinitionCommand(input, context);
    };
    ModifyReportDefinitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyReportDefinitionCommand(output, context);
    };
    return ModifyReportDefinitionCommand;
}($Command));
export { ModifyReportDefinitionCommand };
//# sourceMappingURL=ModifyReportDefinitionCommand.js.map