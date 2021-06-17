import { __extends } from "tslib";
import { BacktrackDBClusterMessage, DBClusterBacktrack } from "../models/models_0";
import { deserializeAws_queryBacktrackDBClusterCommand, serializeAws_queryBacktrackDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Backtracks a DB cluster to a specific time, without creating a new DB cluster.</p>
 *         <p>For more information on backtracking, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html">
 *                 Backtracking an Aurora DB Cluster</a> in the
 *             <i>Amazon Aurora User Guide.</i>
 *         </p>
 *         <note>
 *             <p>This action only applies to Aurora MySQL DB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, BacktrackDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, BacktrackDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new BacktrackDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BacktrackDBClusterCommandInput} for command's `input` shape.
 * @see {@link BacktrackDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BacktrackDBClusterCommand = /** @class */ (function (_super) {
    __extends(BacktrackDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BacktrackDBClusterCommand(input) {
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
    BacktrackDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "BacktrackDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BacktrackDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterBacktrack.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BacktrackDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBacktrackDBClusterCommand(input, context);
    };
    BacktrackDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBacktrackDBClusterCommand(output, context);
    };
    return BacktrackDBClusterCommand;
}($Command));
export { BacktrackDBClusterCommand };
//# sourceMappingURL=BacktrackDBClusterCommand.js.map