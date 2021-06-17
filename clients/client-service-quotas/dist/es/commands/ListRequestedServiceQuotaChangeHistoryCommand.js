import { __extends } from "tslib";
import { ListRequestedServiceQuotaChangeHistoryRequest, ListRequestedServiceQuotaChangeHistoryResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand, serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the quota increase requests for the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListRequestedServiceQuotaChangeHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRequestedServiceQuotaChangeHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRequestedServiceQuotaChangeHistoryCommand = /** @class */ (function (_super) {
    __extends(ListRequestedServiceQuotaChangeHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRequestedServiceQuotaChangeHistoryCommand(input) {
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
    ListRequestedServiceQuotaChangeHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "ListRequestedServiceQuotaChangeHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRequestedServiceQuotaChangeHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(input, context);
    };
    ListRequestedServiceQuotaChangeHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(output, context);
    };
    return ListRequestedServiceQuotaChangeHistoryCommand;
}($Command));
export { ListRequestedServiceQuotaChangeHistoryCommand };
//# sourceMappingURL=ListRequestedServiceQuotaChangeHistoryCommand.js.map