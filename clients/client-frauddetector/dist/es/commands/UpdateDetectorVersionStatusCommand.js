import { __extends } from "tslib";
import { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateDetectorVersionStatusCommand, serializeAws_json1_1UpdateDetectorVersionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the detector version’s status. You can perform the following promotions or
 *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateDetectorVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateDetectorVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateDetectorVersionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorVersionStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDetectorVersionStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateDetectorVersionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDetectorVersionStatusCommand(input) {
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
    UpdateDetectorVersionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateDetectorVersionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDetectorVersionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDetectorVersionStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDetectorVersionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateDetectorVersionStatusCommand(input, context);
    };
    UpdateDetectorVersionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateDetectorVersionStatusCommand(output, context);
    };
    return UpdateDetectorVersionStatusCommand;
}($Command));
export { UpdateDetectorVersionStatusCommand };
//# sourceMappingURL=UpdateDetectorVersionStatusCommand.js.map