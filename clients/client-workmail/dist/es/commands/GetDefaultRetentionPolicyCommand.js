import { __extends } from "tslib";
import { GetDefaultRetentionPolicyRequest, GetDefaultRetentionPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetDefaultRetentionPolicyCommand, serializeAws_json1_1GetDefaultRetentionPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the default retention policy details for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetDefaultRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetDefaultRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetDefaultRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDefaultRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDefaultRetentionPolicyCommand = /** @class */ (function (_super) {
    __extends(GetDefaultRetentionPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDefaultRetentionPolicyCommand(input) {
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
    GetDefaultRetentionPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "GetDefaultRetentionPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDefaultRetentionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDefaultRetentionPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDefaultRetentionPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDefaultRetentionPolicyCommand(input, context);
    };
    GetDefaultRetentionPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDefaultRetentionPolicyCommand(output, context);
    };
    return GetDefaultRetentionPolicyCommand;
}($Command));
export { GetDefaultRetentionPolicyCommand };
//# sourceMappingURL=GetDefaultRetentionPolicyCommand.js.map