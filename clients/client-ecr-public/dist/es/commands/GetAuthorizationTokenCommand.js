import { __extends } from "tslib";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1GetAuthorizationTokenCommand, serializeAws_json1_1GetAuthorizationTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *          authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *          principal has access to. The authorization token is valid for 12 hours. This API requires
 *          the <code>ecr-public:GetAuthorizationToken</code> and
 *             <code>sts:GetServiceBearerToken</code> permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetAuthorizationTokenCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetAuthorizationTokenCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetAuthorizationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAuthorizationTokenCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizationTokenCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAuthorizationTokenCommand = /** @class */ (function (_super) {
    __extends(GetAuthorizationTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAuthorizationTokenCommand(input) {
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
    GetAuthorizationTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "GetAuthorizationTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAuthorizationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAuthorizationTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAuthorizationTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAuthorizationTokenCommand(input, context);
    };
    GetAuthorizationTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAuthorizationTokenCommand(output, context);
    };
    return GetAuthorizationTokenCommand;
}($Command));
export { GetAuthorizationTokenCommand };
//# sourceMappingURL=GetAuthorizationTokenCommand.js.map