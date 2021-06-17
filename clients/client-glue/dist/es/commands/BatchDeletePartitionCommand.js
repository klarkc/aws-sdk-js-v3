import { __extends } from "tslib";
import { BatchDeletePartitionRequest, BatchDeletePartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchDeletePartitionCommand, serializeAws_json1_1BatchDeletePartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchDeletePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeletePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeletePartitionCommand = /** @class */ (function (_super) {
    __extends(BatchDeletePartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeletePartitionCommand(input) {
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
    BatchDeletePartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchDeletePartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeletePartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeletePartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeletePartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchDeletePartitionCommand(input, context);
    };
    BatchDeletePartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchDeletePartitionCommand(output, context);
    };
    return BatchDeletePartitionCommand;
}($Command));
export { BatchDeletePartitionCommand };
//# sourceMappingURL=BatchDeletePartitionCommand.js.map