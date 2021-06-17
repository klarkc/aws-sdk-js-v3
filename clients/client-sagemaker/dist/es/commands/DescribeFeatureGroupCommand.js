import { __extends } from "tslib";
import { DescribeFeatureGroupRequest, DescribeFeatureGroupResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeFeatureGroupCommand, serializeAws_json1_1DescribeFeatureGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes
 *          information on the creation time, <code>FeatureGroup</code> name, the unique identifier for
 *          each <code>FeatureGroup</code>, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeFeatureGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeFeatureGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeFeatureGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeatureGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFeatureGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeFeatureGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFeatureGroupCommand(input) {
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
    DescribeFeatureGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeFeatureGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFeatureGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFeatureGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFeatureGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFeatureGroupCommand(input, context);
    };
    DescribeFeatureGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFeatureGroupCommand(output, context);
    };
    return DescribeFeatureGroupCommand;
}($Command));
export { DescribeFeatureGroupCommand };
//# sourceMappingURL=DescribeFeatureGroupCommand.js.map