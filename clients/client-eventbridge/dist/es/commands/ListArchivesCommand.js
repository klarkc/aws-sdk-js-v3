import { __extends } from "tslib";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListArchivesCommand, serializeAws_json1_1ListArchivesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your archives. You can either list all the archives or you can provide a prefix to
 *       match to the archive names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListArchivesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListArchivesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListArchivesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArchivesCommandInput} for command's `input` shape.
 * @see {@link ListArchivesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListArchivesCommand = /** @class */ (function (_super) {
    __extends(ListArchivesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListArchivesCommand(input) {
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
    ListArchivesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "ListArchivesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListArchivesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListArchivesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListArchivesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListArchivesCommand(input, context);
    };
    ListArchivesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListArchivesCommand(output, context);
    };
    return ListArchivesCommand;
}($Command));
export { ListArchivesCommand };
//# sourceMappingURL=ListArchivesCommand.js.map