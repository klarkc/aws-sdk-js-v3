import { __extends } from "tslib";
import { PutDetectorRequest, PutDetectorResult } from "../models/models_0";
import { deserializeAws_json1_1PutDetectorCommand, serializeAws_json1_1PutDetectorCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutDetectorCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutDetectorCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDetectorCommandInput} for command's `input` shape.
 * @see {@link PutDetectorCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutDetectorCommand = /** @class */ (function (_super) {
    __extends(PutDetectorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutDetectorCommand(input) {
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
    PutDetectorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutDetectorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutDetectorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutDetectorResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutDetectorCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutDetectorCommand(input, context);
    };
    PutDetectorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutDetectorCommand(output, context);
    };
    return PutDetectorCommand;
}($Command));
export { PutDetectorCommand };
//# sourceMappingURL=PutDetectorCommand.js.map