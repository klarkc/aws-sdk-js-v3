import { __extends } from "tslib";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_0";
import { deserializeAws_queryStopDBClusterCommand, serializeAws_queryStopDBClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops an Amazon Neptune DB cluster. When you stop a DB cluster, Neptune
 *       retains the DB cluster's metadata, including its endpoints and DB parameter
 *       groups.</p>
 *
 *          <p>Neptune also retains the transaction logs so you can do a point-in-time
 *       restore if necessary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, StopDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, StopDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "NeptuneClient";
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