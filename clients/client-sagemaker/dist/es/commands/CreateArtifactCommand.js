import { __extends } from "tslib";
import { CreateArtifactRequest, CreateArtifactResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateArtifactCommand, serializeAws_json1_1CreateArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an <i>artifact</i>. An artifact is a lineage tracking entity that
 *         represents a URI addressable object or data. Some examples are the S3 URI of a dataset and
 *         the ECR registry path of an image. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateArtifact</code> can only be invoked from within an SageMaker managed
 *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *           notebooks. A call to <code>CreateArtifact</code> from outside one of these
 *           environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateArtifactCommand = /** @class */ (function (_super) {
    __extends(CreateArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateArtifactCommand(input) {
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
    CreateArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "CreateArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateArtifactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateArtifactCommand(input, context);
    };
    CreateArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateArtifactCommand(output, context);
    };
    return CreateArtifactCommand;
}($Command));
export { CreateArtifactCommand };
//# sourceMappingURL=CreateArtifactCommand.js.map