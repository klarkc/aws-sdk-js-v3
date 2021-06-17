import { __extends } from "tslib";
import { DeleteServiceQuotaIncreaseRequestFromTemplateRequest, DeleteServiceQuotaIncreaseRequestFromTemplateResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand, serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the quota increase request for the specified quota from your quota request
 *       template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceQuotaIncreaseRequestFromTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceQuotaIncreaseRequestFromTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input) {
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
    DeleteServiceQuotaIncreaseRequestFromTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceQuotaIncreaseRequestFromTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input, context);
    };
    DeleteServiceQuotaIncreaseRequestFromTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(output, context);
    };
    return DeleteServiceQuotaIncreaseRequestFromTemplateCommand;
}($Command));
export { DeleteServiceQuotaIncreaseRequestFromTemplateCommand };
//# sourceMappingURL=DeleteServiceQuotaIncreaseRequestFromTemplateCommand.js.map