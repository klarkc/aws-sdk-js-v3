import { __extends } from "tslib";
import { CreateGlobalNetworkRequest, CreateGlobalNetworkResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGlobalNetworkCommand, serializeAws_restJson1CreateGlobalNetworkCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new, empty global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateGlobalNetworkCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateGlobalNetworkCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateGlobalNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGlobalNetworkCommandInput} for command's `input` shape.
 * @see {@link CreateGlobalNetworkCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGlobalNetworkCommand = /** @class */ (function (_super) {
    __extends(CreateGlobalNetworkCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGlobalNetworkCommand(input) {
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
    CreateGlobalNetworkCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "CreateGlobalNetworkCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGlobalNetworkRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGlobalNetworkResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGlobalNetworkCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGlobalNetworkCommand(input, context);
    };
    CreateGlobalNetworkCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGlobalNetworkCommand(output, context);
    };
    return CreateGlobalNetworkCommand;
}($Command));
export { CreateGlobalNetworkCommand };
//# sourceMappingURL=CreateGlobalNetworkCommand.js.map