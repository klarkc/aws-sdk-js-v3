import { __extends } from "tslib";
import { GetServersRequest, GetServersResponse } from "../models/models_0";
import { deserializeAws_json1_1GetServersCommand, serializeAws_json1_1GetServersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the servers in your server catalog.</p>
 *         <p>Before you can describe your servers, you must import them using <a>ImportServerCatalog</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetServersCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetServersCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServersCommandInput} for command's `input` shape.
 * @see {@link GetServersCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetServersCommand = /** @class */ (function (_super) {
    __extends(GetServersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetServersCommand(input) {
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
    GetServersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "GetServersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetServersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetServersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetServersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetServersCommand(input, context);
    };
    GetServersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetServersCommand(output, context);
    };
    return GetServersCommand;
}($Command));
export { GetServersCommand };
//# sourceMappingURL=GetServersCommand.js.map