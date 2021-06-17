import { __extends } from "tslib";
import { ListInsightsRequest, ListInsightsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInsightsCommand, serializeAws_restJson1ListInsightsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and
 *    		status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
 *    	</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInsightsCommandInput} for command's `input` shape.
 * @see {@link ListInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInsightsCommand = /** @class */ (function (_super) {
    __extends(ListInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInsightsCommand(input) {
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
    ListInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DevOpsGuruClient";
        var commandName = "ListInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInsightsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInsightsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInsightsCommand(input, context);
    };
    ListInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInsightsCommand(output, context);
    };
    return ListInsightsCommand;
}($Command));
export { ListInsightsCommand };
//# sourceMappingURL=ListInsightsCommand.js.map