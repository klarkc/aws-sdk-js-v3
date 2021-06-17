import { __extends } from "tslib";
import { DescribeModelPackageGroupInput, DescribeModelPackageGroupOutput } from "../models/models_1";
import { deserializeAws_json1_1DescribeModelPackageGroupCommand, serializeAws_json1_1DescribeModelPackageGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a description for the specified model group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeModelPackageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeModelPackageGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeModelPackageGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeModelPackageGroupCommand(input) {
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
    DescribeModelPackageGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeModelPackageGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeModelPackageGroupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeModelPackageGroupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeModelPackageGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeModelPackageGroupCommand(input, context);
    };
    DescribeModelPackageGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeModelPackageGroupCommand(output, context);
    };
    return DescribeModelPackageGroupCommand;
}($Command));
export { DescribeModelPackageGroupCommand };
//# sourceMappingURL=DescribeModelPackageGroupCommand.js.map