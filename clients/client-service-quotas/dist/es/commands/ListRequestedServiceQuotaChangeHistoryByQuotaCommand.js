import { __extends } from "tslib";
import { ListRequestedServiceQuotaChangeHistoryByQuotaRequest, ListRequestedServiceQuotaChangeHistoryByQuotaResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand, serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the quota increase requests for the specified quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRequestedServiceQuotaChangeHistoryByQuotaCommand = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryByQuotaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input) {
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
    ListRequestedServiceQuotaChangeHistoryByQuotaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryByQuotaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRequestedServiceQuotaChangeHistoryByQuotaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input, context);
    };
    ListRequestedServiceQuotaChangeHistoryByQuotaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(output, context);
    };
    return ListRequestedServiceQuotaChangeHistoryByQuotaCommand;
}($Command));
export { ListRequestedServiceQuotaChangeHistoryByQuotaCommand };
//# sourceMappingURL=ListRequestedServiceQuotaChangeHistoryByQuotaCommand.js.map