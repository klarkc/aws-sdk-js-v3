import { __extends } from "tslib";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_1";
import { deserializeAws_queryFailoverDBClusterCommand, serializeAws_queryFailoverDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Forces a failover for a DB cluster.</p>
 *          <p>A failover for a DB cluster promotes one of the Aurora Replicas (read-only instances)
 *           in the DB cluster to be the primary instance (the cluster writer).</p>
 *          <p>Amazon Aurora will automatically fail over to an Aurora Replica, if one exists,
 *           when the primary instance fails. You can force a failover when you want to simulate a failure of a primary instance for testing.
 *           Because each instance in a DB cluster has its own endpoint address, you will need to clean up and re-establish any existing
 *           connections that use those endpoint addresses when the failover is complete.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What Is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RDSClient";
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