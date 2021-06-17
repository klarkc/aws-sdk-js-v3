import { __extends } from "tslib";
import { ListPartnerEventSourceAccountsRequest, ListPartnerEventSourceAccountsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListPartnerEventSourceAccountsCommand, serializeAws_json1_1ListPartnerEventSourceAccountsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>An SaaS partner can use this operation to display the AWS account ID that a particular
 *       partner event source name is associated with. This operation is not used by AWS
 *       customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListPartnerEventSourceAccountsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListPartnerEventSourceAccountsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListPartnerEventSourceAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPartnerEventSourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPartnerEventSourceAccountsCommand = /** @class */ (function (_super) {
    __extends(ListPartnerEventSourceAccountsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPartnerEventSourceAccountsCommand(input) {
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
    ListPartnerEventSourceAccountsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "ListPartnerEventSourceAccountsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPartnerEventSourceAccountsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPartnerEventSourceAccountsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPartnerEventSourceAccountsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPartnerEventSourceAccountsCommand(input, context);
    };
    ListPartnerEventSourceAccountsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPartnerEventSourceAccountsCommand(output, context);
    };
    return ListPartnerEventSourceAccountsCommand;
}($Command));
export { ListPartnerEventSourceAccountsCommand };
//# sourceMappingURL=ListPartnerEventSourceAccountsCommand.js.map