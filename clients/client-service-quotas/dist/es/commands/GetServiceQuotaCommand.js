import { __extends } from "tslib";
import { GetServiceQuotaRequest, GetServiceQuotaResponse } from "../models/models_0";
import { deserializeAws_json1_1GetServiceQuotaCommand, serializeAws_json1_1GetServiceQuotaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the applied quota value for the specified quota. For some quotas, only the
 *       default values are available. If the applied quota value is not available for a quota, the
 *       quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetServiceQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServiceQuotaCommand = /** @class */ (function (_super) {
    __extends(GetServiceQuotaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServiceQuotaCommand(input) {
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
    GetServiceQuotaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "GetServiceQuotaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServiceQuotaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServiceQuotaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServiceQuotaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetServiceQuotaCommand(input, context);
    };
    GetServiceQuotaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetServiceQuotaCommand(output, context);
    };
    return GetServiceQuotaCommand;
}($Command));
export { GetServiceQuotaCommand };
//# sourceMappingURL=GetServiceQuotaCommand.js.map