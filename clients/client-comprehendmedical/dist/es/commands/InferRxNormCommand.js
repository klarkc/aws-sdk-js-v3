import { __extends } from "tslib";
import { InferRxNormRequest, InferRxNormResponse } from "../models/models_0";
import { deserializeAws_json1_1InferRxNormCommand, serializeAws_json1_1InferRxNormCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>InferRxNorm detects medications as entities listed in a patient record and links to the
 *       normalized concept identifiers in the RxNorm database from the National Library of Medicine.
 *       Amazon Comprehend Medical only detects medical entities in English language texts.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferRxNormCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferRxNormCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new InferRxNormCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InferRxNormCommandInput} for command's `input` shape.
 * @see {@link InferRxNormCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InferRxNormCommand = /** @class */ (function (_super) {
    __extends(InferRxNormCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InferRxNormCommand(input) {
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
    InferRxNormCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "InferRxNormCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InferRxNormRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InferRxNormResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InferRxNormCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InferRxNormCommand(input, context);
    };
    InferRxNormCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InferRxNormCommand(output, context);
    };
    return InferRxNormCommand;
}($Command));
export { InferRxNormCommand };
//# sourceMappingURL=InferRxNormCommand.js.map