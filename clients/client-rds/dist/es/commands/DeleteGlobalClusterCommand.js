import { __extends } from "tslib";
import { DeleteGlobalClusterMessage, DeleteGlobalClusterResult } from "../models/models_0";
import { deserializeAws_queryDeleteGlobalClusterCommand, serializeAws_queryDeleteGlobalClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Deletes a global database cluster. The primary and secondary clusters must already be detached or
 *         destroyed first.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGlobalClusterCommand = /** @class */ (function (_super) {
    __extends(DeleteGlobalClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGlobalClusterCommand(input) {
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
    DeleteGlobalClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteGlobalClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGlobalClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGlobalClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteGlobalClusterCommand(input, context);
    };
    DeleteGlobalClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteGlobalClusterCommand(output, context);
    };
    return DeleteGlobalClusterCommand;
}($Command));
export { DeleteGlobalClusterCommand };
//# sourceMappingURL=DeleteGlobalClusterCommand.js.map