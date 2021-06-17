import { __extends } from "tslib";
import { DescribeFargateProfileRequest, DescribeFargateProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeFargateProfileCommand, serializeAws_restJson1DescribeFargateProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptive information about an AWS Fargate profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFargateProfileCommand = /** @class */ (function (_super) {
    __extends(DescribeFargateProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFargateProfileCommand(input) {
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
    DescribeFargateProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DescribeFargateProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFargateProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFargateProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFargateProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFargateProfileCommand(input, context);
    };
    DescribeFargateProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFargateProfileCommand(output, context);
    };
    return DescribeFargateProfileCommand;
}($Command));
export { DescribeFargateProfileCommand };
//# sourceMappingURL=DescribeFargateProfileCommand.js.map