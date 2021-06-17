import { __extends } from "tslib";
import { CreatePresignedDomainUrlRequest, CreatePresignedDomainUrlResponse } from "../models/models_1";
import { deserializeAws_json1_1CreatePresignedDomainUrlCommand, serializeAws_json1_1CreatePresignedDomainUrlCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
 *        the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of
 *        the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume.
 *        This operation can only be called when the authentication mode equals IAM.
 *    </p>
 *          <note>
 *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
 *             are directed to the AWS console sign-in page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreatePresignedDomainUrlCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreatePresignedDomainUrlCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreatePresignedDomainUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePresignedDomainUrlCommandInput} for command's `input` shape.
 * @see {@link CreatePresignedDomainUrlCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePresignedDomainUrlCommand = /** @class */ (function (_super) {
    __extends(CreatePresignedDomainUrlCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePresignedDomainUrlCommand(input) {
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
    CreatePresignedDomainUrlCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreatePresignedDomainUrlCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePresignedDomainUrlRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePresignedDomainUrlResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePresignedDomainUrlCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePresignedDomainUrlCommand(input, context);
    };
    CreatePresignedDomainUrlCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePresignedDomainUrlCommand(output, context);
    };
    return CreatePresignedDomainUrlCommand;
}($Command));
export { CreatePresignedDomainUrlCommand };
//# sourceMappingURL=CreatePresignedDomainUrlCommand.js.map