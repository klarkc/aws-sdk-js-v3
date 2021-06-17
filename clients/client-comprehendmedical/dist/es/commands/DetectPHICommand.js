import { __extends } from "tslib";
import { DetectPHIRequest, DetectPHIResponse } from "../models/models_0";
import { deserializeAws_json1_1DetectPHICommand, serializeAws_json1_1DetectPHICommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Inspects the clinical text for protected health information (PHI) entities and returns
 *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
 *       only detects entities in English language texts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectPHICommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectPHICommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectPHICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectPHICommandInput} for command's `input` shape.
 * @see {@link DetectPHICommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetectPHICommand = /** @class */ (function (_super) {
    __extends(DetectPHICommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetectPHICommand(input) {
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
    DetectPHICommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DetectPHICommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetectPHIRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetectPHIResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetectPHICommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetectPHICommand(input, context);
    };
    DetectPHICommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetectPHICommand(output, context);
    };
    return DetectPHICommand;
}($Command));
export { DetectPHICommand };
//# sourceMappingURL=DetectPHICommand.js.map