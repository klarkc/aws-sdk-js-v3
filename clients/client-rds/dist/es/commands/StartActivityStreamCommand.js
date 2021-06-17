import { __extends } from "tslib";
import { StartActivityStreamRequest, StartActivityStreamResponse } from "../models/models_1";
import { deserializeAws_queryStartActivityStreamCommand, serializeAws_queryStartActivityStreamCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a database activity stream to monitor activity on the database.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.html">Database Activity Streams</a>
 *             in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartActivityStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartActivityStreamCommandInput} for command's `input` shape.
 * @see {@link StartActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartActivityStreamCommand = /** @class */ (function (_super) {
    __extends(StartActivityStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartActivityStreamCommand(input) {
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
    StartActivityStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "StartActivityStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartActivityStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartActivityStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartActivityStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryStartActivityStreamCommand(input, context);
    };
    StartActivityStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryStartActivityStreamCommand(output, context);
    };
    return StartActivityStreamCommand;
}($Command));
export { StartActivityStreamCommand };
//# sourceMappingURL=StartActivityStreamCommand.js.map