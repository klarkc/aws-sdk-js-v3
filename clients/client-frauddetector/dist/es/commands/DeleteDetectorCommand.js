import { __extends } from "tslib";
import { DeleteDetectorRequest, DeleteDetectorResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDetectorCommand, serializeAws_json1_1DeleteDetectorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p>
 * 	        <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DeleteDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DeleteDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new DeleteDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDetectorCommand = /** @class */ (function (_super) {
    __extends(DeleteDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDetectorCommand(input) {
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
    DeleteDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "DeleteDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDetectorResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDetectorCommand(input, context);
    };
    DeleteDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDetectorCommand(output, context);
    };
    return DeleteDetectorCommand;
}($Command));
export { DeleteDetectorCommand };
//# sourceMappingURL=DeleteDetectorCommand.js.map