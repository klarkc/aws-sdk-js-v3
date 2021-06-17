import { __extends } from "tslib";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_0";
import { deserializeAws_queryFailoverDBClusterCommand, serializeAws_queryFailoverDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forces a failover for a cluster.</p>
 *         <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances)
 *             in the cluster to be the primary instance (the cluster writer).</p>
 *         <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica,
 *             if one exists. You can force a failover when you want to simulate a failure of a primary
 *             instance for
 *             testing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, FailoverDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, FailoverDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "DocDBClient";
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