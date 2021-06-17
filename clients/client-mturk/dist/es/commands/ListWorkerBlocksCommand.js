import { __extends } from "tslib";
import { ListWorkerBlocksRequest, ListWorkerBlocksResponse } from "../models/models_0";
import { deserializeAws_json1_1ListWorkerBlocksCommand, serializeAws_json1_1ListWorkerBlocksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListWorkerBlocksCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListWorkerBlocksCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListWorkerBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkerBlocksCommandInput} for command's `input` shape.
 * @see {@link ListWorkerBlocksCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorkerBlocksCommand = /** @class */ (function (_super) {
    __extends(ListWorkerBlocksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorkerBlocksCommand(input) {
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
    ListWorkerBlocksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "ListWorkerBlocksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorkerBlocksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorkerBlocksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorkerBlocksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWorkerBlocksCommand(input, context);
    };
    ListWorkerBlocksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWorkerBlocksCommand(output, context);
    };
    return ListWorkerBlocksCommand;
}($Command));
export { ListWorkerBlocksCommand };
//# sourceMappingURL=ListWorkerBlocksCommand.js.map