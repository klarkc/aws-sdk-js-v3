import { __extends } from "tslib";
import { PromoteReadReplicaDBClusterMessage, PromoteReadReplicaDBClusterResult } from "../models/models_0";
import { deserializeAws_queryPromoteReadReplicaDBClusterCommand, serializeAws_queryPromoteReadReplicaDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Not supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, PromoteReadReplicaDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, PromoteReadReplicaDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new PromoteReadReplicaDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PromoteReadReplicaDBClusterCommandInput} for command's `input` shape.
 * @see {@link PromoteReadReplicaDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PromoteReadReplicaDBClusterCommand = /** @class */ (function (_super) {
    __extends(PromoteReadReplicaDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PromoteReadReplicaDBClusterCommand(input) {
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
    PromoteReadReplicaDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "PromoteReadReplicaDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PromoteReadReplicaDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PromoteReadReplicaDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PromoteReadReplicaDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPromoteReadReplicaDBClusterCommand(input, context);
    };
    PromoteReadReplicaDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPromoteReadReplicaDBClusterCommand(output, context);
    };
    return PromoteReadReplicaDBClusterCommand;
}($Command));
export { PromoteReadReplicaDBClusterCommand };
//# sourceMappingURL=PromoteReadReplicaDBClusterCommand.js.map