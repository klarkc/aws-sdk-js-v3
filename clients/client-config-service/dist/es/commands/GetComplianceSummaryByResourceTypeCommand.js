import { __extends } from "tslib";
import { GetComplianceSummaryByResourceTypeRequest, GetComplianceSummaryByResourceTypeResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand, serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the number of resources that are compliant and the
 * 			number that are noncompliant. You can specify one or more resource
 * 			types to get these numbers for each resource type. The maximum
 * 			number returned is 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByResourceTypeCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceSummaryByResourceTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceSummaryByResourceTypeCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByResourceTypeCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetComplianceSummaryByResourceTypeCommand = /** @class */ (function (_super) {
    __extends(GetComplianceSummaryByResourceTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetComplianceSummaryByResourceTypeCommand(input) {
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
    GetComplianceSummaryByResourceTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetComplianceSummaryByResourceTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetComplianceSummaryByResourceTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetComplianceSummaryByResourceTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetComplianceSummaryByResourceTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(input, context);
    };
    GetComplianceSummaryByResourceTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetComplianceSummaryByResourceTypeCommand(output, context);
    };
    return GetComplianceSummaryByResourceTypeCommand;
}($Command));
export { GetComplianceSummaryByResourceTypeCommand };
//# sourceMappingURL=GetComplianceSummaryByResourceTypeCommand.js.map