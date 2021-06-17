import { __extends } from "tslib";
import { StopProjectVersionRequest, StopProjectVersionResponse } from "../models/models_0";
import { deserializeAws_json1_1StopProjectVersionCommand, serializeAws_json1_1StopProjectVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeProjectVersions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StopProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StopProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StopProjectVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopProjectVersionCommandInput} for command's `input` shape.
 * @see {@link StopProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopProjectVersionCommand = /** @class */ (function (_super) {
    __extends(StopProjectVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopProjectVersionCommand(input) {
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
    StopProjectVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RekognitionClient";
        var commandName = "StopProjectVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopProjectVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopProjectVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopProjectVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopProjectVersionCommand(input, context);
    };
    StopProjectVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopProjectVersionCommand(output, context);
    };
    return StopProjectVersionCommand;
}($Command));
export { StopProjectVersionCommand };
//# sourceMappingURL=StopProjectVersionCommand.js.map