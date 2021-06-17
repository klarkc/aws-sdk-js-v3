import { __extends } from "tslib";
import { PutServiceQuotaIncreaseRequestIntoTemplateRequest, PutServiceQuotaIncreaseRequestIntoTemplateResponse, } from "../models/models_0";
import { deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand, serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a quota increase request to your quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandInput} for command's `input` shape.
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutServiceQuotaIncreaseRequestIntoTemplateCommand = /** @class */ (function (_super) {
    __extends(PutServiceQuotaIncreaseRequestIntoTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutServiceQuotaIncreaseRequestIntoTemplateCommand(input) {
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
    PutServiceQuotaIncreaseRequestIntoTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "PutServiceQuotaIncreaseRequestIntoTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutServiceQuotaIncreaseRequestIntoTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutServiceQuotaIncreaseRequestIntoTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(input, context);
    };
    PutServiceQuotaIncreaseRequestIntoTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(output, context);
    };
    return PutServiceQuotaIncreaseRequestIntoTemplateCommand;
}($Command));
export { PutServiceQuotaIncreaseRequestIntoTemplateCommand };
//# sourceMappingURL=PutServiceQuotaIncreaseRequestIntoTemplateCommand.js.map