import { __extends } from "tslib";
import { DeleteCacheSubnetGroupMessage } from "../models/models_0";
import { deserializeAws_queryDeleteCacheSubnetGroupCommand, serializeAws_queryDeleteCacheSubnetGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a cache subnet group.</p>
 *         <note>
 *             <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DeleteCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCacheSubnetGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteCacheSubnetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCacheSubnetGroupCommand(input) {
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
    DeleteCacheSubnetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DeleteCacheSubnetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCacheSubnetGroupMessage.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCacheSubnetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteCacheSubnetGroupCommand(input, context);
    };
    DeleteCacheSubnetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteCacheSubnetGroupCommand(output, context);
    };
    return DeleteCacheSubnetGroupCommand;
}($Command));
export { DeleteCacheSubnetGroupCommand };
//# sourceMappingURL=DeleteCacheSubnetGroupCommand.js.map