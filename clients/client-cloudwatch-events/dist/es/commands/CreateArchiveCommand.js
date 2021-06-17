import { __extends } from "tslib";
import { CreateArchiveRequest, CreateArchiveResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateArchiveCommand, serializeAws_json1_1CreateArchiveCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an archive of events with the specified settings. When you create an archive,
 *       incoming events might not immediately start being sent to the archive. Allow a short period of
 *       time for changes to take effect. If you do not specify a pattern to filter events sent to the
 *       archive, all events are sent to the archive except replayed events. Replayed events are not
 *       sent to an archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new CreateArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArchiveCommandInput} for command's `input` shape.
 * @see {@link CreateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateArchiveCommand = /** @class */ (function (_super) {
    __extends(CreateArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateArchiveCommand(input) {
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
    CreateArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "CreateArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateArchiveRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateArchiveResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateArchiveCommand(input, context);
    };
    CreateArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateArchiveCommand(output, context);
    };
    return CreateArchiveCommand;
}($Command));
export { CreateArchiveCommand };
//# sourceMappingURL=CreateArchiveCommand.js.map