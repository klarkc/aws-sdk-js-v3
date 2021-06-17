import { __extends } from "tslib";
import { PublishMetricsInput, PublishMetricsOutput } from "../models/models_0";
import { deserializeAws_restJson1PublishMetricsCommand, serializeAws_restJson1PublishMetricsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * An operation for publishing metrics from the customers to the Ops plane.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, PublishMetricsCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, PublishMetricsCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new PublishMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishMetricsCommandInput} for command's `input` shape.
 * @see {@link PublishMetricsCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishMetricsCommand = /** @class */ (function (_super) {
    __extends(PublishMetricsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PublishMetricsCommand(input) {
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
    PublishMetricsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MWAAClient";
        var commandName = "PublishMetricsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PublishMetricsInput.filterSensitiveLog,
            outputFilterSensitiveLog: PublishMetricsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PublishMetricsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PublishMetricsCommand(input, context);
    };
    PublishMetricsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PublishMetricsCommand(output, context);
    };
    return PublishMetricsCommand;
}($Command));
export { PublishMetricsCommand };
//# sourceMappingURL=PublishMetricsCommand.js.map