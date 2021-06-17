import { __extends } from "tslib";
import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/models_0";
import { deserializeAws_json1_1ListServiceQuotasCommand, serializeAws_json1_1ListServiceQuotasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the applied quota values for the specified AWS service. For some quotas, only the
 *       default values are available. If the applied quota value is not available for a quota, the
 *       quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const command = new ListServiceQuotasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceQuotasCommand = /** @class */ (function (_super) {
    __extends(ListServiceQuotasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceQuotasCommand(input) {
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
    ListServiceQuotasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceQuotasClient";
        var commandName = "ListServiceQuotasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceQuotasRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceQuotasResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceQuotasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServiceQuotasCommand(input, context);
    };
    ListServiceQuotasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServiceQuotasCommand(output, context);
    };
    return ListServiceQuotasCommand;
}($Command));
export { ListServiceQuotasCommand };
//# sourceMappingURL=ListServiceQuotasCommand.js.map