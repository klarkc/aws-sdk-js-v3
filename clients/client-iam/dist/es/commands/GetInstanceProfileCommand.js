import { __extends } from "tslib";
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0";
import { deserializeAws_queryGetInstanceProfileCommand, serializeAws_queryGetInstanceProfileCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Retrieves information about the specified instance profile, including the instance
 *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetInstanceProfileCommand = /** @class */ (function (_super) {
    __extends(GetInstanceProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetInstanceProfileCommand(input) {
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
    GetInstanceProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "GetInstanceProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetInstanceProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetInstanceProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetInstanceProfileCommand(input, context);
    };
    GetInstanceProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetInstanceProfileCommand(output, context);
    };
    return GetInstanceProfileCommand;
}($Command));
export { GetInstanceProfileCommand };
//# sourceMappingURL=GetInstanceProfileCommand.js.map