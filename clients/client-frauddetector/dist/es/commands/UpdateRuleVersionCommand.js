import { __extends } from "tslib";
import { UpdateRuleVersionRequest, UpdateRuleVersionResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateRuleVersionCommand, serializeAws_json1_1UpdateRuleVersionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateRuleVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRuleVersionCommand = /** @class */ (function (_super) {
    __extends(UpdateRuleVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRuleVersionCommand(input) {
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
    UpdateRuleVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateRuleVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRuleVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRuleVersionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRuleVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRuleVersionCommand(input, context);
    };
    UpdateRuleVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRuleVersionCommand(output, context);
    };
    return UpdateRuleVersionCommand;
}($Command));
export { UpdateRuleVersionCommand };
//# sourceMappingURL=UpdateRuleVersionCommand.js.map