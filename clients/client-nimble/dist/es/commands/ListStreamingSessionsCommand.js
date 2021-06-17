import { __extends } from "tslib";
import { ListStreamingSessionsRequest, ListStreamingSessionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListStreamingSessionsCommand, serializeAws_restJson1ListStreamingSessionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the streaming image resources in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingSessionsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingSessionsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingSessionsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListStreamingSessionsCommand = /** @class */ (function (_super) {
    __extends(ListStreamingSessionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListStreamingSessionsCommand(input) {
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
    ListStreamingSessionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "ListStreamingSessionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListStreamingSessionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListStreamingSessionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListStreamingSessionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListStreamingSessionsCommand(input, context);
    };
    ListStreamingSessionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListStreamingSessionsCommand(output, context);
    };
    return ListStreamingSessionsCommand;
}($Command));
export { ListStreamingSessionsCommand };
//# sourceMappingURL=ListStreamingSessionsCommand.js.map