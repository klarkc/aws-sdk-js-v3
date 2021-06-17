import { __extends } from "tslib";
import { StartApplicationRequest, StartApplicationResponse } from "../models/models_0";
import { deserializeAws_json1_1StartApplicationCommand, serializeAws_json1_1StartApplicationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the specified Kinesis Data Analytics application. After creating an application, you must exclusively call this operation to
 *       start your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, StartApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, StartApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new StartApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartApplicationCommandInput} for command's `input` shape.
 * @see {@link StartApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartApplicationCommand = /** @class */ (function (_super) {
    __extends(StartApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartApplicationCommand(input) {
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
    StartApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisAnalyticsV2Client";
        var commandName = "StartApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartApplicationCommand(input, context);
    };
    StartApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartApplicationCommand(output, context);
    };
    return StartApplicationCommand;
}($Command));
export { StartApplicationCommand };
//# sourceMappingURL=StartApplicationCommand.js.map