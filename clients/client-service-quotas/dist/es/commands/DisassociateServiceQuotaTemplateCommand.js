import { __extends } from "tslib";
import { DisassociateServiceQuotaTemplateRequest, DisassociateServiceQuotaTemplateResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand, serializeAws_json1_1DisassociateServiceQuotaTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables your quota request template. After a template is disabled, the quota increase
 *       requests in the template are not applied to new accounts in your organization. Disabling a
 *       quota request template does not apply its quota increase requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new DisassociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateServiceQuotaTemplateCommand = /** @class */ (function (_super) {
    __extends(DisassociateServiceQuotaTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateServiceQuotaTemplateCommand(input) {
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
    DisassociateServiceQuotaTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "DisassociateServiceQuotaTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateServiceQuotaTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateServiceQuotaTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateServiceQuotaTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateServiceQuotaTemplateCommand(input, context);
    };
    DisassociateServiceQuotaTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand(output, context);
    };
    return DisassociateServiceQuotaTemplateCommand;
}($Command));
export { DisassociateServiceQuotaTemplateCommand };
//# sourceMappingURL=DisassociateServiceQuotaTemplateCommand.js.map