import { __extends } from "tslib";
import { CreateRuleRequest, CreateRuleResult } from "../models/models_0";
import { deserializeAws_json1_1CreateRuleCommand, serializeAws_json1_1CreateRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a rule for use with the specified detector. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateRuleCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateRuleCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRuleCommand = /** @class */ (function (_super) {
    __extends(CreateRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRuleCommand(input) {
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
    CreateRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "CreateRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRuleResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateRuleCommand(input, context);
    };
    CreateRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateRuleCommand(output, context);
    };
    return CreateRuleCommand;
}($Command));
export { CreateRuleCommand };
//# sourceMappingURL=CreateRuleCommand.js.map