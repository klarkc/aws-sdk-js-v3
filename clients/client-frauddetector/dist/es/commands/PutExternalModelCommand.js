import { __extends } from "tslib";
import { PutExternalModelRequest, PutExternalModelResult } from "../models/models_0";
import { deserializeAws_json1_1PutExternalModelCommand, serializeAws_json1_1PutExternalModelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutExternalModelCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutExternalModelCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutExternalModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutExternalModelCommandInput} for command's `input` shape.
 * @see {@link PutExternalModelCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutExternalModelCommand = /** @class */ (function (_super) {
    __extends(PutExternalModelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutExternalModelCommand(input) {
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
    PutExternalModelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutExternalModelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutExternalModelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutExternalModelResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutExternalModelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutExternalModelCommand(input, context);
    };
    PutExternalModelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutExternalModelCommand(output, context);
    };
    return PutExternalModelCommand;
}($Command));
export { PutExternalModelCommand };
//# sourceMappingURL=PutExternalModelCommand.js.map