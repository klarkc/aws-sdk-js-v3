import { __extends } from "tslib";
import { DescribeModelPackageInput, DescribeModelPackageOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeModelPackageCommand, serializeAws_json1_1DescribeModelPackageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
 *             models or list them on AWS Marketplace.</p>
 *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
 *             Marketplace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelPackageCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelPackageCommand = /** @class */ (function (_super) {
    __extends(DescribeModelPackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelPackageCommand(input) {
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
    DescribeModelPackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeModelPackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelPackageInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelPackageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelPackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelPackageCommand(input, context);
    };
    DescribeModelPackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelPackageCommand(output, context);
    };
    return DescribeModelPackageCommand;
}($Command));
export { DescribeModelPackageCommand };
//# sourceMappingURL=DescribeModelPackageCommand.js.map