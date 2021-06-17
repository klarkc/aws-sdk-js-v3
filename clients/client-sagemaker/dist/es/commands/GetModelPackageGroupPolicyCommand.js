import { __extends } from "tslib";
import { GetModelPackageGroupPolicyInput, GetModelPackageGroupPolicyOutput } from "../models/models_2";
import { deserializeAws_json1_1GetModelPackageGroupPolicyCommand, serializeAws_json1_1GetModelPackageGroupPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a resource policy that manages access for a model group. For information about
 *             resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>AWS Identity and
 *                     Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetModelPackageGroupPolicyCommand = /** @class */ (function (_super) {
    __extends(GetModelPackageGroupPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetModelPackageGroupPolicyCommand(input) {
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
    GetModelPackageGroupPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "GetModelPackageGroupPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetModelPackageGroupPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetModelPackageGroupPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetModelPackageGroupPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetModelPackageGroupPolicyCommand(input, context);
    };
    GetModelPackageGroupPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetModelPackageGroupPolicyCommand(output, context);
    };
    return GetModelPackageGroupPolicyCommand;
}($Command));
export { GetModelPackageGroupPolicyCommand };
//# sourceMappingURL=GetModelPackageGroupPolicyCommand.js.map