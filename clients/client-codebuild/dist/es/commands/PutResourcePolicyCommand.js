import { __extends } from "tslib";
import { PutResourcePolicyInput, PutResourcePolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutResourcePolicyCommand, serializeAws_json1_1PutResourcePolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Stores a resource policy for the ARN of a <code>Project</code> or
 *                 <code>ReportGroup</code> object. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, PutResourcePolicyCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, PutResourcePolicyCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutResourcePolicyCommand = /** @class */ (function (_super) {
    __extends(PutResourcePolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutResourcePolicyCommand(input) {
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
    PutResourcePolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "PutResourcePolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutResourcePolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutResourcePolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutResourcePolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutResourcePolicyCommand(input, context);
    };
    PutResourcePolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutResourcePolicyCommand(output, context);
    };
    return PutResourcePolicyCommand;
}($Command));
export { PutResourcePolicyCommand };
//# sourceMappingURL=PutResourcePolicyCommand.js.map