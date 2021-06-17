import { __extends } from "tslib";
import { ListContactFlowsRequest, ListContactFlowsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListContactFlowsCommand, serializeAws_restJson1ListContactFlowsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about the contact flows for the specified Amazon Connect instance.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 *          <p>For more information about contact flows, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-contact-flows.html">Contact Flows</a> in the
 *     <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactFlowsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactFlowsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListContactFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactFlowsCommandInput} for command's `input` shape.
 * @see {@link ListContactFlowsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContactFlowsCommand = /** @class */ (function (_super) {
    __extends(ListContactFlowsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContactFlowsCommand(input) {
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
    ListContactFlowsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "ListContactFlowsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContactFlowsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContactFlowsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContactFlowsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListContactFlowsCommand(input, context);
    };
    ListContactFlowsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListContactFlowsCommand(output, context);
    };
    return ListContactFlowsCommand;
}($Command));
export { ListContactFlowsCommand };
//# sourceMappingURL=ListContactFlowsCommand.js.map