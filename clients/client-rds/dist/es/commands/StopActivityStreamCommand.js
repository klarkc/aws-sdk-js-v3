import { __extends } from "tslib";
import { StopActivityStreamRequest, StopActivityStreamResponse } from "../models/models_1";
import { deserializeAws_queryStopActivityStreamCommand, serializeAws_queryStopActivityStreamCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a database activity stream that was started using the AWS console,
 *             the <code>start-activity-stream</code> AWS CLI command, or the <code>StartActivityStream</code> action.</p>
 *         <p>For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StopActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopActivityStreamCommand = /** @class */ (function (_super) {
    __extends(StopActivityStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopActivityStreamCommand(input) {
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
    StopActivityStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StopActivityStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopActivityStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopActivityStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopActivityStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStopActivityStreamCommand(input, context);
    };
    StopActivityStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStopActivityStreamCommand(output, context);
    };
    return StopActivityStreamCommand;
}($Command));
export { StopActivityStreamCommand };
//# sourceMappingURL=StopActivityStreamCommand.js.map