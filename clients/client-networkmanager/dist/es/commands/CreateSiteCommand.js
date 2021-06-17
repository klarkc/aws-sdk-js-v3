import { __extends } from "tslib";
import { CreateSiteRequest, CreateSiteResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSiteCommand, serializeAws_restJson1CreateSiteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new site in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateSiteCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateSiteCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSiteCommandInput} for command's `input` shape.
 * @see {@link CreateSiteCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSiteCommand = /** @class */ (function (_super) {
    __extends(CreateSiteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSiteCommand(input) {
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
    CreateSiteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "CreateSiteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSiteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSiteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSiteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSiteCommand(input, context);
    };
    CreateSiteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSiteCommand(output, context);
    };
    return CreateSiteCommand;
}($Command));
export { CreateSiteCommand };
//# sourceMappingURL=CreateSiteCommand.js.map