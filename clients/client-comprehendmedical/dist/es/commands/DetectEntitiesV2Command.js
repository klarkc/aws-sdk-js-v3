import { __extends } from "tslib";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/models_0";
import { deserializeAws_json1_1DetectEntitiesV2Command, serializeAws_json1_1DetectEntitiesV2Command, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information. Amazon Comprehend Medical only detects medical entities in English language
 *       texts.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
 *       operation. This new action uses a different model for determining the entities in your medical
 *       text and changes the way that some entities are returned in the output. You should use the
 *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
 *         <code>Direction</code> entities as attributes instead of types. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectEntitiesV2Command } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectEntitiesV2Command } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectEntitiesV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectEntitiesV2CommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesV2CommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetectEntitiesV2Command = /** @class */ (function (_super) {
    __extends(DetectEntitiesV2Command, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetectEntitiesV2Command(input) {
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
    DetectEntitiesV2Command.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DetectEntitiesV2Command";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetectEntitiesV2Request.filterSensitiveLog,
            outputFilterSensitiveLog: DetectEntitiesV2Response.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetectEntitiesV2Command.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetectEntitiesV2Command(input, context);
    };
    DetectEntitiesV2Command.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetectEntitiesV2Command(output, context);
    };
    return DetectEntitiesV2Command;
}($Command));
export { DetectEntitiesV2Command };
//# sourceMappingURL=DetectEntitiesV2Command.js.map