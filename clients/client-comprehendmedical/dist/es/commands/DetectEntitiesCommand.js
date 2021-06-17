import { __extends } from "tslib";
import { DetectEntitiesRequest, DetectEntitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1DetectEntitiesCommand, serializeAws_json1_1DetectEntitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p>
 *          <p> Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectEntitiesCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetectEntitiesCommand = /** @class */ (function (_super) {
    __extends(DetectEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetectEntitiesCommand(input) {
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
    DetectEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendMedicalClient";
        var commandName = "DetectEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetectEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DetectEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetectEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DetectEntitiesCommand(input, context);
    };
    DetectEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DetectEntitiesCommand(output, context);
    };
    return DetectEntitiesCommand;
}($Command));
export { DetectEntitiesCommand };
//# sourceMappingURL=DetectEntitiesCommand.js.map