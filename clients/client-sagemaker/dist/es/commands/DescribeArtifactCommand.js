import { __extends } from "tslib";
import { DescribeArtifactRequest, DescribeArtifactResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeArtifactCommand, serializeAws_json1_1DescribeArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeArtifactCommand = /** @class */ (function (_super) {
    __extends(DescribeArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeArtifactCommand(input) {
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
    DescribeArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeArtifactResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeArtifactCommand(input, context);
    };
    DescribeArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeArtifactCommand(output, context);
    };
    return DescribeArtifactCommand;
}($Command));
export { DescribeArtifactCommand };
//# sourceMappingURL=DescribeArtifactCommand.js.map