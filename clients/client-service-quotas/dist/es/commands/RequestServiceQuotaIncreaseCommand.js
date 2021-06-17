import { __extends } from "tslib";
import { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/models_0";
import { deserializeAws_json1_1RequestServiceQuotaIncreaseCommand, serializeAws_json1_1RequestServiceQuotaIncreaseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Submits a quota increase request for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new RequestServiceQuotaIncreaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestServiceQuotaIncreaseCommandInput} for command's `input` shape.
 * @see {@link RequestServiceQuotaIncreaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RequestServiceQuotaIncreaseCommand = /** @class */ (function (_super) {
    __extends(RequestServiceQuotaIncreaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RequestServiceQuotaIncreaseCommand(input) {
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
    RequestServiceQuotaIncreaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "RequestServiceQuotaIncreaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RequestServiceQuotaIncreaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RequestServiceQuotaIncreaseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RequestServiceQuotaIncreaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RequestServiceQuotaIncreaseCommand(input, context);
    };
    RequestServiceQuotaIncreaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(output, context);
    };
    return RequestServiceQuotaIncreaseCommand;
}($Command));
export { RequestServiceQuotaIncreaseCommand };
//# sourceMappingURL=RequestServiceQuotaIncreaseCommand.js.map