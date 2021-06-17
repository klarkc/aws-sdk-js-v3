import { __extends } from "tslib";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_0";
import { deserializeAws_queryFailoverDBClusterCommand, serializeAws_queryFailoverDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>A failover for a DB cluster promotes one of the Read Replicas (read-only instances) in the
 *       DB cluster to be the primary instance (the cluster writer).</p>
 *          <p>Amazon Neptune will automatically fail over to a Read Replica, if one exists, when the
 *       primary instance fails. You can force a failover when you want to simulate a failure of a
 *       primary instance for testing. Because each instance in a DB cluster has its own endpoint
 *       address, you will need to clean up and re-establish any existing connections that use those
 *       endpoint addresses when the failover is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, FailoverDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, FailoverDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var FailoverDBClusterCommand = /** @class */ (function (_super) {
    __extends(FailoverDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function FailoverDBClusterCommand(input) {
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
    FailoverDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "FailoverDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: FailoverDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: FailoverDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    FailoverDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryFailoverDBClusterCommand(input, context);
    };
    FailoverDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryFailoverDBClusterCommand(output, context);
    };
    return FailoverDBClusterCommand;
}($Command));
export { FailoverDBClusterCommand };
//# sourceMappingURL=FailoverDBClusterCommand.js.map