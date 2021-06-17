import { __extends } from "tslib";
import { GetAWSDefaultServiceQuotaRequest, GetAWSDefaultServiceQuotaResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand, serializeAws_json1_1GetAWSDefaultServiceQuotaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the default value for the specified quota. The default value does not reflect
 *       any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetAWSDefaultServiceQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAWSDefaultServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetAWSDefaultServiceQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAWSDefaultServiceQuotaCommand = /** @class */ (function (_super) {
    __extends(GetAWSDefaultServiceQuotaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAWSDefaultServiceQuotaCommand(input) {
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
    GetAWSDefaultServiceQuotaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "GetAWSDefaultServiceQuotaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAWSDefaultServiceQuotaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAWSDefaultServiceQuotaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAWSDefaultServiceQuotaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAWSDefaultServiceQuotaCommand(input, context);
    };
    GetAWSDefaultServiceQuotaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand(output, context);
    };
    return GetAWSDefaultServiceQuotaCommand;
}($Command));
export { GetAWSDefaultServiceQuotaCommand };
//# sourceMappingURL=GetAWSDefaultServiceQuotaCommand.js.map