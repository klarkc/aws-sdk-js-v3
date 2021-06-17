import { __extends } from "tslib";
import { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeReportDefinitionsCommand, serializeAws_json1_1DescribeReportDefinitionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS Cost and Usage reports available to this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } from "@aws-sdk/client-cost-and-usage-report-service"; // ES Modules import
 * // const { CostAndUsageReportServiceClient, DescribeReportDefinitionsCommand } = require("@aws-sdk/client-cost-and-usage-report-service"); // CommonJS import
 * const client = new CostAndUsageReportServiceClient(config);
 * const command = new DescribeReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link DescribeReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CostAndUsageReportServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReportDefinitionsCommand = /** @class */ (function (_super) {
    __extends(DescribeReportDefinitionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReportDefinitionsCommand(input) {
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
    DescribeReportDefinitionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CostAndUsageReportServiceClient";
        var commandName = "DescribeReportDefinitionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReportDefinitionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReportDefinitionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReportDefinitionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReportDefinitionsCommand(input, context);
    };
    DescribeReportDefinitionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReportDefinitionsCommand(output, context);
    };
    return DescribeReportDefinitionsCommand;
}($Command));
export { DescribeReportDefinitionsCommand };
//# sourceMappingURL=DescribeReportDefinitionsCommand.js.map