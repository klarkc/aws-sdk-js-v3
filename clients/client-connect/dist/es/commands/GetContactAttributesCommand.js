import { __extends } from "tslib";
import { GetContactAttributesRequest, GetContactAttributesResponse } from "../models/models_0";
import { deserializeAws_restJson1GetContactAttributesCommand, serializeAws_restJson1GetContactAttributesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the contact attributes for the specified contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetContactAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetContactAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetContactAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContactAttributesCommandInput} for command's `input` shape.
 * @see {@link GetContactAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContactAttributesCommand = /** @class */ (function (_super) {
    __extends(GetContactAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContactAttributesCommand(input) {
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
    GetContactAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "GetContactAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContactAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetContactAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContactAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetContactAttributesCommand(input, context);
    };
    GetContactAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetContactAttributesCommand(output, context);
    };
    return GetContactAttributesCommand;
}($Command));
export { GetContactAttributesCommand };
//# sourceMappingURL=GetContactAttributesCommand.js.map