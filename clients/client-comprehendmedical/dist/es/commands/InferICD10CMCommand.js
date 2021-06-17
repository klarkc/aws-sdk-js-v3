import { __extends } from "tslib";
import { InferICD10CMRequest, InferICD10CMResponse } from "../models/models_0";
import { deserializeAws_json1_1InferICD10CMCommand, serializeAws_json1_1InferICD10CMCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
 *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
 *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
 *       English language texts.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferICD10CMCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferICD10CMCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new InferICD10CMCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InferICD10CMCommandInput} for command's `input` shape.
 * @see {@link InferICD10CMCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InferICD10CMCommand = /** @class */ (function (_super) {
    __extends(InferICD10CMCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InferICD10CMCommand(input) {
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
    InferICD10CMCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "InferICD10CMCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InferICD10CMRequest.filterSensitiveLog,
            outputFilterSensitiveLog: InferICD10CMResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InferICD10CMCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InferICD10CMCommand(input, context);
    };
    InferICD10CMCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InferICD10CMCommand(output, context);
    };
    return InferICD10CMCommand;
}($Command));
export { InferICD10CMCommand };
//# sourceMappingURL=InferICD10CMCommand.js.map