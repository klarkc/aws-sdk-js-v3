import { __extends } from "tslib";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListIPSetsCommand, serializeAws_json1_1ListIPSetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListIPSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListIPSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIPSetsCommand = /** @class */ (function (_super) {
    __extends(ListIPSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIPSetsCommand(input) {
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
    ListIPSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListIPSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIPSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIPSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIPSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListIPSetsCommand(input, context);
    };
    ListIPSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListIPSetsCommand(output, context);
    };
    return ListIPSetsCommand;
}($Command));
export { ListIPSetsCommand };
//# sourceMappingURL=ListIPSetsCommand.js.map