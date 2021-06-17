import { __extends } from "tslib";
import { GetAssociationForServiceQuotaTemplateRequest, GetAssociationForServiceQuotaTemplateResponse, } from "../models/models_0";
import { deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand, serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the status of the association for the quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new GetAssociationForServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssociationForServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link GetAssociationForServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAssociationForServiceQuotaTemplateCommand = /** @class */ (function (_super) {
    __extends(GetAssociationForServiceQuotaTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAssociationForServiceQuotaTemplateCommand(input) {
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
    GetAssociationForServiceQuotaTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "GetAssociationForServiceQuotaTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAssociationForServiceQuotaTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAssociationForServiceQuotaTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(input, context);
    };
    GetAssociationForServiceQuotaTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(output, context);
    };
    return GetAssociationForServiceQuotaTemplateCommand;
}($Command));
export { GetAssociationForServiceQuotaTemplateCommand };
//# sourceMappingURL=GetAssociationForServiceQuotaTemplateCommand.js.map