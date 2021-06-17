import { __extends } from "tslib";
import { PutOutcomeRequest, PutOutcomeResult } from "../models/models_0";
import { deserializeAws_json1_1PutOutcomeCommand, serializeAws_json1_1PutOutcomeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an outcome. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, PutOutcomeCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, PutOutcomeCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new PutOutcomeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOutcomeCommandInput} for command's `input` shape.
 * @see {@link PutOutcomeCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutOutcomeCommand = /** @class */ (function (_super) {
    __extends(PutOutcomeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutOutcomeCommand(input) {
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
    PutOutcomeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "PutOutcomeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutOutcomeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutOutcomeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutOutcomeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutOutcomeCommand(input, context);
    };
    PutOutcomeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutOutcomeCommand(output, context);
    };
    return PutOutcomeCommand;
}($Command));
export { PutOutcomeCommand };
//# sourceMappingURL=PutOutcomeCommand.js.map