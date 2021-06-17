import { __extends } from "tslib";
import { ListResourceComplianceSummariesRequest, ListResourceComplianceSummariesResult } from "../models/models_1";
import { deserializeAws_json1_1ListResourceComplianceSummariesCommand, serializeAws_json1_1ListResourceComplianceSummariesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a resource-level summary count. The summary includes information about compliant and
 *    non-compliant statuses and detailed compliance-item severity counts, according to the filter
 *    criteria you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListResourceComplianceSummariesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListResourceComplianceSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResourceComplianceSummariesCommandInput} for command's `input` shape.
 * @see {@link ListResourceComplianceSummariesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListResourceComplianceSummariesCommand = /** @class */ (function (_super) {
    __extends(ListResourceComplianceSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListResourceComplianceSummariesCommand(input) {
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
    ListResourceComplianceSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListResourceComplianceSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListResourceComplianceSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListResourceComplianceSummariesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListResourceComplianceSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListResourceComplianceSummariesCommand(input, context);
    };
    ListResourceComplianceSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListResourceComplianceSummariesCommand(output, context);
    };
    return ListResourceComplianceSummariesCommand;
}($Command));
export { ListResourceComplianceSummariesCommand };
//# sourceMappingURL=ListResourceComplianceSummariesCommand.js.map