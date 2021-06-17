import { __extends } from "tslib";
import { DescribeUserProfileRequest, DescribeUserProfileResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeUserProfileCommand, serializeAws_json1_1DescribeUserProfileCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "CodeStarClient";
        var commandName = "DescribeUserProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeUserProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeUserProfileResult.filterSensitiveLog,
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