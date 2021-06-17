import { __extends } from "tslib";
import { ListAWSDefaultServiceQuotasRequest, ListAWSDefaultServiceQuotasResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand, serializeAws_json1_1ListAWSDefaultServiceQuotasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the default values for the quotas for the specified AWS service. A default value
 *       does not reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListAWSDefaultServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListAWSDefaultServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAWSDefaultServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListAWSDefaultServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAWSDefaultServiceQuotasCommand = /** @class */ (function (_super) {
    __extends(ListAWSDefaultServiceQuotasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAWSDefaultServiceQuotasCommand(input) {
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
    ListAWSDefaultServiceQuotasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "ListAWSDefaultServiceQuotasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAWSDefaultServiceQuotasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAWSDefaultServiceQuotasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAWSDefaultServiceQuotasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(input, context);
    };
    ListAWSDefaultServiceQuotasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(output, context);
    };
    return ListAWSDefaultServiceQuotasCommand;
}($Command));
export { ListAWSDefaultServiceQuotasCommand };
//# sourceMappingURL=ListAWSDefaultServiceQuotasCommand.js.map