import { __extends } from "tslib";
import { GetSitesRequest, GetSitesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSitesCommand, serializeAws_restJson1GetSitesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more of your sites in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetSitesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetSitesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetSitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSitesCommandInput} for command's `input` shape.
 * @see {@link GetSitesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSitesCommand = /** @class */ (function (_super) {
    __extends(GetSitesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSitesCommand(input) {
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
    GetSitesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetSitesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSitesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSitesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSitesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSitesCommand(input, context);
    };
    GetSitesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSitesCommand(output, context);
    };
    return GetSitesCommand;
}($Command));
export { GetSitesCommand };
//# sourceMappingURL=GetSitesCommand.js.map