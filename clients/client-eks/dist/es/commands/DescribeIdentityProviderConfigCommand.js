import { __extends } from "tslib";
import { DescribeIdentityProviderConfigRequest, DescribeIdentityProviderConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeIdentityProviderConfigCommand, serializeAws_restJson1DescribeIdentityProviderConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns descriptive information about an identity provider configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeIdentityProviderConfigCommand = /** @class */ (function (_super) {
    __extends(DescribeIdentityProviderConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeIdentityProviderConfigCommand(input) {
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
    DescribeIdentityProviderConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "DescribeIdentityProviderConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeIdentityProviderConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeIdentityProviderConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeIdentityProviderConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeIdentityProviderConfigCommand(input, context);
    };
    DescribeIdentityProviderConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeIdentityProviderConfigCommand(output, context);
    };
    return DescribeIdentityProviderConfigCommand;
}($Command));
export { DescribeIdentityProviderConfigCommand };
//# sourceMappingURL=DescribeIdentityProviderConfigCommand.js.map