import { __extends } from "tslib";
import { PutRetentionPolicyRequest, PutRetentionPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRetentionPolicyCommand, serializeAws_json1_1PutRetentionPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Puts a retention policy to the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRetentionPolicyCommand = /** @class */ (function (_super) {
    __extends(PutRetentionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRetentionPolicyCommand(input) {
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
    PutRetentionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "PutRetentionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRetentionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRetentionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRetentionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRetentionPolicyCommand(input, context);
    };
    PutRetentionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRetentionPolicyCommand(output, context);
    };
    return PutRetentionPolicyCommand;
}($Command));
export { PutRetentionPolicyCommand };
//# sourceMappingURL=PutRetentionPolicyCommand.js.map