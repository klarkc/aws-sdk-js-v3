import { __extends } from "tslib";
import { CreateSamplingRuleRequest, CreateSamplingRuleResult } from "../models/models_0";
import { deserializeAws_restJson1CreateSamplingRuleCommand, serializeAws_restJson1CreateSamplingRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a rule to control sampling behavior for instrumented applications. Services
 *          retrieve rules with <a>GetSamplingRules</a>, and evaluate each rule in ascending
 *          order of <i>priority</i> for each request. If a rule matches, the service
 *          records a trace, borrowing it from the reservoir size. After 10 seconds, the service
 *          reports back to X-Ray with <a>GetSamplingTargets</a> to get updated versions of
 *          each in-use rule. The updated rule contains a trace quota that the service can use instead
 *          of borrowing from the reservoir.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, CreateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, CreateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new CreateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSamplingRuleCommand = /** @class */ (function (_super) {
    __extends(CreateSamplingRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSamplingRuleCommand(input) {
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
    CreateSamplingRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "XRayClient";
        var commandName = "CreateSamplingRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSamplingRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSamplingRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSamplingRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSamplingRuleCommand(input, context);
    };
    CreateSamplingRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSamplingRuleCommand(output, context);
    };
    return CreateSamplingRuleCommand;
}($Command));
export { CreateSamplingRuleCommand };
//# sourceMappingURL=CreateSamplingRuleCommand.js.map