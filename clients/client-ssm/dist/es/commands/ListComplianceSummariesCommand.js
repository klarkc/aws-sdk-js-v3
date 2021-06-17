import { __extends } from "tslib";
import { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/models_1";
import { deserializeAws_json1_1ListComplianceSummariesCommand, serializeAws_json1_1ListComplianceSummariesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a summary count of compliant and non-compliant resources for a compliance type. For
 *    example, this call can return State Manager associations, patches, or custom compliance types
 *    according to the filter criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComplianceSummariesCommand = /** @class */ (function (_super) {
    __extends(ListComplianceSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComplianceSummariesCommand(input) {
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
    ListComplianceSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListComplianceSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComplianceSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComplianceSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComplianceSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListComplianceSummariesCommand(input, context);
    };
    ListComplianceSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListComplianceSummariesCommand(output, context);
    };
    return ListComplianceSummariesCommand;
}($Command));
export { ListComplianceSummariesCommand };
//# sourceMappingURL=ListComplianceSummariesCommand.js.map