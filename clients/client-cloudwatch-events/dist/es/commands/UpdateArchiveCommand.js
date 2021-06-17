import { __extends } from "tslib";
import { UpdateArchiveRequest, UpdateArchiveResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateArchiveCommand, serializeAws_json1_1UpdateArchiveCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, UpdateArchiveCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, UpdateArchiveCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new UpdateArchiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArchiveCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateArchiveCommand = /** @class */ (function (_super) {
    __extends(UpdateArchiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateArchiveCommand(input) {
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
    UpdateArchiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "UpdateArchiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateArchiveRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateArchiveResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateArchiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateArchiveCommand(input, context);
    };
    UpdateArchiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateArchiveCommand(output, context);
    };
    return UpdateArchiveCommand;
}($Command));
export { UpdateArchiveCommand };
//# sourceMappingURL=UpdateArchiveCommand.js.map