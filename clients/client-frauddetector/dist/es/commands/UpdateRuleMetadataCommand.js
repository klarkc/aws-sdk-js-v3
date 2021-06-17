import { __extends } from "tslib";
import { UpdateRuleMetadataRequest, UpdateRuleMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1UpdateRuleMetadataCommand, serializeAws_json1_1UpdateRuleMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a rule's metadata. The description attribute can be updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, UpdateRuleMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, UpdateRuleMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new UpdateRuleMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRuleMetadataCommand = /** @class */ (function (_super) {
    __extends(UpdateRuleMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRuleMetadataCommand(input) {
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
    UpdateRuleMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FraudDetectorClient";
        var commandName = "UpdateRuleMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRuleMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRuleMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRuleMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateRuleMetadataCommand(input, context);
    };
    UpdateRuleMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateRuleMetadataCommand(output, context);
    };
    return UpdateRuleMetadataCommand;
}($Command));
export { UpdateRuleMetadataCommand };
//# sourceMappingURL=UpdateRuleMetadataCommand.js.map