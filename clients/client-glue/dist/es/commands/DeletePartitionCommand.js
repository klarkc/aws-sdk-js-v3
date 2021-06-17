import { __extends } from "tslib";
import { DeletePartitionRequest, DeletePartitionResponse } from "../models/models_0";
import { deserializeAws_json1_1DeletePartitionCommand, serializeAws_json1_1DeletePartitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeletePartitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePartitionCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePartitionCommand = /** @class */ (function (_super) {
    __extends(DeletePartitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePartitionCommand(input) {
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
    DeletePartitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeletePartitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePartitionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePartitionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePartitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeletePartitionCommand(input, context);
    };
    DeletePartitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeletePartitionCommand(output, context);
    };
    return DeletePartitionCommand;
}($Command));
export { DeletePartitionCommand };
//# sourceMappingURL=DeletePartitionCommand.js.map