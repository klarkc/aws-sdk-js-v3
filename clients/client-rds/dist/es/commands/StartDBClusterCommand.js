import { __extends } from "tslib";
import { StartDBClusterMessage, StartDBClusterResult } from "../models/models_1";
import { deserializeAws_queryStartDBClusterCommand, serializeAws_queryStartDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an Amazon Aurora DB cluster that was stopped using the AWS console, the stop-db-cluster
 *        AWS CLI command, or the StopDBCluster action.</p>
 *
 *          <p>For more information, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
 *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBClusterCommandInput} for command's `input` shape.
 * @see {@link StartDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDBClusterCommand = /** @class */ (function (_super) {
    __extends(StartDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDBClusterCommand(input) {
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
    StartDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StartDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StartDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartDBClusterCommand(input, context);
    };
    StartDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartDBClusterCommand(output, context);
    };
    return StartDBClusterCommand;
}($Command));
export { StartDBClusterCommand };
//# sourceMappingURL=StartDBClusterCommand.js.map