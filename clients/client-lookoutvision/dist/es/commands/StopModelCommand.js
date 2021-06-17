import { __extends } from "tslib";
import { StopModelRequest, StopModelResponse } from "../models/models_0";
import { deserializeAws_restJson1StopModelCommand, serializeAws_restJson1StopModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the hosting of a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeModel</a>. </p>
 *          <p>After the model hosting stops, the <code>Status</code> of the model is <code>TRAINED</code>.</p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StopModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StopModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StopModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new StopModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopModelCommandInput} for command's `input` shape.
 * @see {@link StopModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopModelCommand = /** @class */ (function (_super) {
    __extends(StopModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopModelCommand(input) {
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
    StopModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "StopModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopModelCommand(input, context);
    };
    StopModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopModelCommand(output, context);
    };
    return StopModelCommand;
}($Command));
export { StopModelCommand };
//# sourceMappingURL=StopModelCommand.js.map