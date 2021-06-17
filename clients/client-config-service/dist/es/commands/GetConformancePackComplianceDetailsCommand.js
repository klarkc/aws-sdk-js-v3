import { __extends } from "tslib";
import { GetConformancePackComplianceDetailsRequest, GetConformancePackComplianceDetailsResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetConformancePackComplianceDetailsCommand, serializeAws_json1_1GetConformancePackComplianceDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceDetailsCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceDetailsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConformancePackComplianceDetailsCommand = /** @class */ (function (_super) {
    __extends(GetConformancePackComplianceDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConformancePackComplianceDetailsCommand(input) {
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
    GetConformancePackComplianceDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "GetConformancePackComplianceDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConformancePackComplianceDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConformancePackComplianceDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConformancePackComplianceDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetConformancePackComplianceDetailsCommand(input, context);
    };
    GetConformancePackComplianceDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetConformancePackComplianceDetailsCommand(output, context);
    };
    return GetConformancePackComplianceDetailsCommand;
}($Command));
export { GetConformancePackComplianceDetailsCommand };
//# sourceMappingURL=GetConformancePackComplianceDetailsCommand.js.map