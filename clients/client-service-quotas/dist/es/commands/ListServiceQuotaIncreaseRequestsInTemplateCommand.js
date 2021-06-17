import { __extends } from "tslib";
import { ListServiceQuotaIncreaseRequestsInTemplateRequest, ListServiceQuotaIncreaseRequestsInTemplateResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand, serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the quota increase requests in the specified quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceQuotaIncreaseRequestsInTemplateCommand = /** @class */ (function (_super) {
    __extends(ListServiceQuotaIncreaseRequestsInTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceQuotaIncreaseRequestsInTemplateCommand(input) {
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
    ListServiceQuotaIncreaseRequestsInTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "ListServiceQuotaIncreaseRequestsInTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceQuotaIncreaseRequestsInTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceQuotaIncreaseRequestsInTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceQuotaIncreaseRequestsInTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(input, context);
    };
    ListServiceQuotaIncreaseRequestsInTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(output, context);
    };
    return ListServiceQuotaIncreaseRequestsInTemplateCommand;
}($Command));
export { ListServiceQuotaIncreaseRequestsInTemplateCommand };
//# sourceMappingURL=ListServiceQuotaIncreaseRequestsInTemplateCommand.js.map