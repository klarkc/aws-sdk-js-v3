import { __extends } from "tslib";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_1";
import { deserializeAws_queryStopDBClusterCommand, serializeAws_queryStopDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *        Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
 *        metadata, including its endpoints and DB parameter groups. Aurora also
 *        retains the transaction logs so you can do a point-in-time restore if necessary.
 *      </p>
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
 * import { RDSClient, StopDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDBClusterCommand = /** @class */ (function (_super) {
    __extends(StopDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopDBClusterCommand(input) {
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
    StopDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StopDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: StopDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStopDBClusterCommand(input, context);
    };
    StopDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStopDBClusterCommand(output, context);
    };
    return StopDBClusterCommand;
}($Command));
export { StopDBClusterCommand };
//# sourceMappingURL=StopDBClusterCommand.js.map