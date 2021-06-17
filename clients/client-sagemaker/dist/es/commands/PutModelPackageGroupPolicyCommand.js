import { __extends } from "tslib";
import { PutModelPackageGroupPolicyInput, PutModelPackageGroupPolicyOutput } from "../models/models_2";
import { deserializeAws_json1_1PutModelPackageGroupPolicyCommand, serializeAws_json1_1PutModelPackageGroupPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a resouce policy to control access to a model group. For information about
 *             resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>AWS Identity and Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, PutModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, PutModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new PutModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutModelPackageGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(PutModelPackageGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutModelPackageGroupPolicyCommand(input) {
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
    PutModelPackageGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "PutModelPackageGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutModelPackageGroupPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutModelPackageGroupPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutModelPackageGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutModelPackageGroupPolicyCommand(input, context);
    };
    PutModelPackageGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutModelPackageGroupPolicyCommand(output, context);
    };
    return PutModelPackageGroupPolicyCommand;
}($Command));
export { PutModelPackageGroupPolicyCommand };
//# sourceMappingURL=PutModelPackageGroupPolicyCommand.js.map