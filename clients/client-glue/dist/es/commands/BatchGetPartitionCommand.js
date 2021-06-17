import { __extends } from "tslib";
import { BatchGetPartitionRequest, BatchGetPartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1BatchGetPartitionCommand, serializeAws_json1_1BatchGetPartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves partitions in a batch request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new BatchGetPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetPartitionCommandInput} for command's `input` shape.
 * @see {@link BatchGetPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetPartitionCommand = /** @class */ (function (_super) {
    __extends(BatchGetPartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetPartitionCommand(input) {
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
    BatchGetPartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "BatchGetPartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetPartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetPartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetPartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchGetPartitionCommand(input, context);
    };
    BatchGetPartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchGetPartitionCommand(output, context);
    };
    return BatchGetPartitionCommand;
}($Command));
export { BatchGetPartitionCommand };
//# sourceMappingURL=BatchGetPartitionCommand.js.map