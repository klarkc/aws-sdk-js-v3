import { __extends } from "tslib";
import { DescribeUserProfileRequest, DescribeUserProfileResponse } from "../models/models_1";
import { deserializeAws_json1_1DescribeUserProfileCommand, serializeAws_json1_1DescribeUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a user profile. For more information, see <code>CreateUserProfile</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeUserProfileCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeUserProfileCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeUserProfileCommand = /** @class */ (function (_super) {
    __extends(DescribeUserProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeUserProfileCommand(input) {
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
    DescribeUserProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DescribeUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeUserProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeUserProfileCommand(input, context);
    };
    DescribeUserProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeUserProfileCommand(output, context);
    };
    return DescribeUserProfileCommand;
}($Command));
export { DescribeUserProfileCommand };
//# sourceMappingURL=DescribeUserProfileCommand.js.map