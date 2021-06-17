import { __extends } from "tslib";
import { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/models_0";
import { deserializeAws_restJson1GetFederationTokenCommand, serializeAws_restJson1GetFederationTokenCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a token for federation.</p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *      Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetFederationTokenCommand = /** @class */ (function (_super) {
    __extends(GetFederationTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetFederationTokenCommand(input) {
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
    GetFederationTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "GetFederationTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetFederationTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetFederationTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetFederationTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetFederationTokenCommand(input, context);
    };
    GetFederationTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetFederationTokenCommand(output, context);
    };
    return GetFederationTokenCommand;
}($Command));
export { GetFederationTokenCommand };
//# sourceMappingURL=GetFederationTokenCommand.js.map