import { __extends } from "tslib";
import { UpdateModelVersionStatusRequest, UpdateModelVersionStatusResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateModelVersionStatusCommand, serializeAws_json1_1UpdateModelVersionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of a model version.</p>
 *          <p>You can perform the following status updates:</p>
 *          <ol>
 *             <li>
 *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change <code>ACTIVE</code>to <code>INACTIVE</code>.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateModelVersionStatusCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateModelVersionStatusCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateModelVersionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelVersionStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateModelVersionStatusCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateModelVersionStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateModelVersionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateModelVersionStatusCommand(input) {
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
    UpdateModelVersionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateModelVersionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateModelVersionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateModelVersionStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateModelVersionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateModelVersionStatusCommand(input, context);
    };
    UpdateModelVersionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateModelVersionStatusCommand(output, context);
    };
    return UpdateModelVersionStatusCommand;
}($Command));
export { UpdateModelVersionStatusCommand };
//# sourceMappingURL=UpdateModelVersionStatusCommand.js.map