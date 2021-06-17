import { __extends } from "tslib";
import { BatchUpdatePartitionRequest, BatchUpdatePartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchUpdatePartitionCommand, serializeAws_json1_1BatchUpdatePartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates one or more partitions in a batch operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchUpdatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchUpdatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchUpdatePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePartitionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdatePartitionCommand = /** @class */ (function (_super) {
    __extends(BatchUpdatePartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpdatePartitionCommand(input) {
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
    BatchUpdatePartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchUpdatePartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdatePartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdatePartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdatePartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchUpdatePartitionCommand(input, context);
    };
    BatchUpdatePartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchUpdatePartitionCommand(output, context);
    };
    return BatchUpdatePartitionCommand;
}($Command));
export { BatchUpdatePartitionCommand };
//# sourceMappingURL=BatchUpdatePartitionCommand.js.map