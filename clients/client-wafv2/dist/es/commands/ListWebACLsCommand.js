import { __extends } from "tslib";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListWebACLsCommand, serializeAws_json1_1ListWebACLsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListWebACLsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListWebACLsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebACLsCommandInput} for command's `input` shape.
 * @see {@link ListWebACLsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWebACLsCommand = /** @class */ (function (_super) {
    __extends(ListWebACLsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWebACLsCommand(input) {
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
    ListWebACLsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFV2Client";
        var commandName = "ListWebACLsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWebACLsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWebACLsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWebACLsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWebACLsCommand(input, context);
    };
    ListWebACLsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWebACLsCommand(output, context);
    };
    return ListWebACLsCommand;
}($Command));
export { ListWebACLsCommand };
//# sourceMappingURL=ListWebACLsCommand.js.map