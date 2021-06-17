import { __extends } from "tslib";
import { UpdateDetectorVersionRequest, UpdateDetectorVersionResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateDetectorVersionCommand, serializeAws_json1_1UpdateDetectorVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateDetectorVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDetectorVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateDetectorVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDetectorVersionCommand(input) {
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
    UpdateDetectorVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateDetectorVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDetectorVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDetectorVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDetectorVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDetectorVersionCommand(input, context);
    };
    UpdateDetectorVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDetectorVersionCommand(output, context);
    };
    return UpdateDetectorVersionCommand;
}($Command));
export { UpdateDetectorVersionCommand };
//# sourceMappingURL=UpdateDetectorVersionCommand.js.map