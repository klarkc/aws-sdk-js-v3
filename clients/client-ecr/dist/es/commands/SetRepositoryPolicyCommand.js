import { __extends } from "tslib";
import { SetRepositoryPolicyRequest, SetRepositoryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1SetRepositoryPolicyCommand, serializeAws_json1_1SetRepositoryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a repository policy to the specified repository to control access permissions.
 *             For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository
 *                 Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, SetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, SetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new SetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link SetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetRepositoryPolicyCommand = /** @class */ (function (_super) {
    __extends(SetRepositoryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetRepositoryPolicyCommand(input) {
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
    SetRepositoryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "SetRepositoryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetRepositoryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SetRepositoryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetRepositoryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SetRepositoryPolicyCommand(input, context);
    };
    SetRepositoryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SetRepositoryPolicyCommand(output, context);
    };
    return SetRepositoryPolicyCommand;
}($Command));
export { SetRepositoryPolicyCommand };
//# sourceMappingURL=SetRepositoryPolicyCommand.js.map