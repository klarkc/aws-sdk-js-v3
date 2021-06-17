import { __extends } from "tslib";
import { GetConformancePackComplianceSummaryRequest, GetConformancePackComplianceSummaryResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetConformancePackComplianceSummaryCommand, serializeAws_json1_1GetConformancePackComplianceSummaryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConformancePackComplianceSummaryCommand = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceSummaryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConformancePackComplianceSummaryCommand(input) {
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
    GetConformancePackComplianceSummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetConformancePackComplianceSummaryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConformancePackComplianceSummaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConformancePackComplianceSummaryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConformancePackComplianceSummaryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetConformancePackComplianceSummaryCommand(input, context);
    };
    GetConformancePackComplianceSummaryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetConformancePackComplianceSummaryCommand(output, context);
    };
    return GetConformancePackComplianceSummaryCommand;
}($Command));
export { GetConformancePackComplianceSummaryCommand };
//# sourceMappingURL=GetConformancePackComplianceSummaryCommand.js.map