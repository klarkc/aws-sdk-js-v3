import { __extends } from "tslib";
import { ListChangedBlocksRequest, ListChangedBlocksResponse } from "../models/models_0";
import { deserializeAws_restJson1ListChangedBlocksCommand, serializeAws_restJson1ListChangedBlocksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListChangedBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListChangedBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListChangedBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListChangedBlocksCommandInput} for command's `input` shape.
 * @see {@link ListChangedBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListChangedBlocksCommand = /** @class */ (function (_super) {
    __extends(ListChangedBlocksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListChangedBlocksCommand(input) {
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
    ListChangedBlocksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "ListChangedBlocksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListChangedBlocksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListChangedBlocksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListChangedBlocksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListChangedBlocksCommand(input, context);
    };
    ListChangedBlocksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListChangedBlocksCommand(output, context);
    };
    return ListChangedBlocksCommand;
}($Command));
export { ListChangedBlocksCommand };
//# sourceMappingURL=ListChangedBlocksCommand.js.map