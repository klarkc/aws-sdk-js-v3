import { __extends } from "tslib";
import { RemoveFromGlobalClusterMessage, RemoveFromGlobalClusterResult } from "../models/models_1";
import { deserializeAws_queryRemoveFromGlobalClusterCommand, serializeAws_queryRemoveFromGlobalClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Detaches an Aurora secondary cluster from an Aurora global database cluster. The cluster becomes a
 *         standalone cluster with read-write capability instead of being read-only and receiving data from a
 *         primary cluster in a different region.
 *       </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RemoveFromGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RemoveFromGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RemoveFromGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFromGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveFromGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveFromGlobalClusterCommand = /** @class */ (function (_super) {
    __extends(RemoveFromGlobalClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveFromGlobalClusterCommand(input) {
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
    RemoveFromGlobalClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "RemoveFromGlobalClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveFromGlobalClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveFromGlobalClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveFromGlobalClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveFromGlobalClusterCommand(input, context);
    };
    RemoveFromGlobalClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveFromGlobalClusterCommand(output, context);
    };
    return RemoveFromGlobalClusterCommand;
}($Command));
export { RemoveFromGlobalClusterCommand };
//# sourceMappingURL=RemoveFromGlobalClusterCommand.js.map