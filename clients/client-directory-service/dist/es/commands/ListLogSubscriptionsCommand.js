import { __extends } from "tslib";
import { ListLogSubscriptionsRequest, ListLogSubscriptionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListLogSubscriptionsCommand, serializeAws_json1_1ListLogSubscriptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the active log subscriptions for the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListLogSubscriptionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListLogSubscriptionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListLogSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLogSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListLogSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLogSubscriptionsCommand = /** @class */ (function (_super) {
    __extends(ListLogSubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLogSubscriptionsCommand(input) {
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
    ListLogSubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ListLogSubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLogSubscriptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLogSubscriptionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLogSubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLogSubscriptionsCommand(input, context);
    };
    ListLogSubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLogSubscriptionsCommand(output, context);
    };
    return ListLogSubscriptionsCommand;
}($Command));
export { ListLogSubscriptionsCommand };
//# sourceMappingURL=ListLogSubscriptionsCommand.js.map