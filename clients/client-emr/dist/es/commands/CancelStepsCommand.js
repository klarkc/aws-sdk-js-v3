import { __extends } from "tslib";
import { CancelStepsInput, CancelStepsOutput } from "../models/models_0";
import { deserializeAws_json1_1CancelStepsCommand, serializeAws_json1_1CancelStepsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR
 *          versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
 *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
 *          that a step will be canceled, even if the request is successfully submitted. You can only
 *          cancel steps that are in a <code>PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, CancelStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, CancelStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new CancelStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelStepsCommandInput} for command's `input` shape.
 * @see {@link CancelStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelStepsCommand = /** @class */ (function (_super) {
    __extends(CancelStepsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelStepsCommand(input) {
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
    CancelStepsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "CancelStepsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelStepsInput.filterSensitiveLog,
            outputFilterSensitiveLog: CancelStepsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelStepsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CancelStepsCommand(input, context);
    };
    CancelStepsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CancelStepsCommand(output, context);
    };
    return CancelStepsCommand;
}($Command));
export { CancelStepsCommand };
//# sourceMappingURL=CancelStepsCommand.js.map