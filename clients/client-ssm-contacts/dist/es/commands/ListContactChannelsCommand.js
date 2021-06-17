import { __extends } from "tslib";
import { ListContactChannelsRequest, ListContactChannelsResult } from "../models/models_0";
import { deserializeAws_json1_1ListContactChannelsCommand, serializeAws_json1_1ListContactChannelsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all contact channels for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListContactChannelsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListContactChannelsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new ListContactChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactChannelsCommandInput} for command's `input` shape.
 * @see {@link ListContactChannelsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContactChannelsCommand = /** @class */ (function (_super) {
    __extends(ListContactChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContactChannelsCommand(input) {
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
    ListContactChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMContactsClient";
        var commandName = "ListContactChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContactChannelsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContactChannelsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContactChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListContactChannelsCommand(input, context);
    };
    ListContactChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListContactChannelsCommand(output, context);
    };
    return ListContactChannelsCommand;
}($Command));
export { ListContactChannelsCommand };
//# sourceMappingURL=ListContactChannelsCommand.js.map