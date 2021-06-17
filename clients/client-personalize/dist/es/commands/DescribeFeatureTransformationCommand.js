import { __extends } from "tslib";
import { DescribeFeatureTransformationRequest, DescribeFeatureTransformationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeFeatureTransformationCommand, serializeAws_json1_1DescribeFeatureTransformationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the given feature transformation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeFeatureTransformationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeFeatureTransformationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeFeatureTransformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFeatureTransformationCommandInput} for command's `input` shape.
 * @see {@link DescribeFeatureTransformationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFeatureTransformationCommand = /** @class */ (function (_super) {
    __extends(DescribeFeatureTransformationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFeatureTransformationCommand(input) {
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
    DescribeFeatureTransformationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "DescribeFeatureTransformationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFeatureTransformationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFeatureTransformationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFeatureTransformationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeFeatureTransformationCommand(input, context);
    };
    DescribeFeatureTransformationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeFeatureTransformationCommand(output, context);
    };
    return DescribeFeatureTransformationCommand;
}($Command));
export { DescribeFeatureTransformationCommand };
//# sourceMappingURL=DescribeFeatureTransformationCommand.js.map