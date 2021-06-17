import { __extends } from "tslib";
import { StartModelRequest, StartModelResponse } from "../models/models_0";
import { deserializeAws_restJson1StartModelCommand, serializeAws_restJson1StartModelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
 *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
 *          <p>A model is ready to use when its status is <code>HOSTED</code>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectAnomalies</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *          model, call <a>StopModel</a>.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StartModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StartModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StartModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new StartModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartModelCommandInput} for command's `input` shape.
 * @see {@link StartModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartModelCommand = /** @class */ (function (_super) {
    __extends(StartModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartModelCommand(input) {
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
    StartModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutVisionClient";
        var commandName = "StartModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartModelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartModelCommand(input, context);
    };
    StartModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartModelCommand(output, context);
    };
    return StartModelCommand;
}($Command));
export { StartModelCommand };
//# sourceMappingURL=StartModelCommand.js.map