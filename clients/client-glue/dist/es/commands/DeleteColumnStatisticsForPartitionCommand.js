import { __extends } from "tslib";
import { DeleteColumnStatisticsForPartitionRequest, DeleteColumnStatisticsForPartitionResponse, } from "../models/models_0";
import { deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand, serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete the partition column statistics of a column.</p>
 *
 * 	        <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForPartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForPartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteColumnStatisticsForPartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteColumnStatisticsForPartitionCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForPartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteColumnStatisticsForPartitionCommand = /** @class */ (function (_super) {
    __extends(DeleteColumnStatisticsForPartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteColumnStatisticsForPartitionCommand(input) {
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
    DeleteColumnStatisticsForPartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteColumnStatisticsForPartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteColumnStatisticsForPartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteColumnStatisticsForPartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteColumnStatisticsForPartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(input, context);
    };
    DeleteColumnStatisticsForPartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteColumnStatisticsForPartitionCommand(output, context);
    };
    return DeleteColumnStatisticsForPartitionCommand;
}($Command));
export { DeleteColumnStatisticsForPartitionCommand };
//# sourceMappingURL=DeleteColumnStatisticsForPartitionCommand.js.map