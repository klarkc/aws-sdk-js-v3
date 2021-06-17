import { __extends } from "tslib";
import { CreateWorkforceRequest, CreateWorkforceResponse } from "../models/models_1";
import { deserializeAws_json1_1CreateWorkforceCommand, serializeAws_json1_1CreateWorkforceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to create a workforce. This operation will return an error
 *       if a workforce already exists in the AWS Region that you specify. You can only
 *       create one workforce in each AWS Region per AWS account.</p>
 *
 *          <p>If you want to create a new workforce in an AWS Region where
 *       a workforce already exists, use the  API
 *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
 *       to create a new workforce.</p>
 *
 *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
 *     in <code>CognitoConfig</code>.
 *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
 *     For more information, see
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
 *       Create a Private Workforce (Amazon Cognito)</a>.</p>
 *
 *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
 *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
 *       because groups are used by Ground Truth and Amazon A2I to create work teams.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
 *       Create a Private Workforce (OIDC IdP)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkforceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateWorkforceCommand = /** @class */ (function (_super) {
    __extends(CreateWorkforceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateWorkforceCommand(input) {
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
    CreateWorkforceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateWorkforceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateWorkforceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateWorkforceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateWorkforceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateWorkforceCommand(input, context);
    };
    CreateWorkforceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateWorkforceCommand(output, context);
    };
    return CreateWorkforceCommand;
}($Command));
export { CreateWorkforceCommand };
//# sourceMappingURL=CreateWorkforceCommand.js.map