import { __extends } from "tslib";
import { ListSnapshotBlocksRequest, ListSnapshotBlocksResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSnapshotBlocksCommand, serializeAws_restJson1ListSnapshotBlocksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListSnapshotBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListSnapshotBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const command = new ListSnapshotBlocksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSnapshotBlocksCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSnapshotBlocksCommand = /** @class */ (function (_super) {
    __extends(ListSnapshotBlocksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSnapshotBlocksCommand(input) {
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
    ListSnapshotBlocksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EBSClient";
        var commandName = "ListSnapshotBlocksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSnapshotBlocksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSnapshotBlocksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSnapshotBlocksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSnapshotBlocksCommand(input, context);
    };
    ListSnapshotBlocksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSnapshotBlocksCommand(output, context);
    };
    return ListSnapshotBlocksCommand;
}($Command));
export { ListSnapshotBlocksCommand };
//# sourceMappingURL=ListSnapshotBlocksCommand.js.map