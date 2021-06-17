import { __extends } from "tslib";
import { DeletePartitionIndexRequest, DeletePartitionIndexResponse } from "../models/models_0";
import { deserializeAws_json1_1DeletePartitionIndexCommand, serializeAws_json1_1DeletePartitionIndexCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified partition index from an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeletePartitionIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePartitionIndexCommand = /** @class */ (function (_super) {
    __extends(DeletePartitionIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePartitionIndexCommand(input) {
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
    DeletePartitionIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeletePartitionIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePartitionIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePartitionIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePartitionIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePartitionIndexCommand(input, context);
    };
    DeletePartitionIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePartitionIndexCommand(output, context);
    };
    return DeletePartitionIndexCommand;
}($Command));
export { DeletePartitionIndexCommand };
//# sourceMappingURL=DeletePartitionIndexCommand.js.map