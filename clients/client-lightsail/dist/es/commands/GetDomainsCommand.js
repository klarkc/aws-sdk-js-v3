import { __extends } from "tslib";
import { GetDomainsRequest, GetDomainsResult } from "../models/models_0";
import { deserializeAws_json1_1GetDomainsCommand, serializeAws_json1_1GetDomainsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all domains in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDomainsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDomainsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainsCommandInput} for command's `input` shape.
 * @see {@link GetDomainsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDomainsCommand = /** @class */ (function (_super) {
    __extends(GetDomainsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDomainsCommand(input) {
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
    GetDomainsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetDomainsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDomainsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDomainsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDomainsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetDomainsCommand(input, context);
    };
    GetDomainsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetDomainsCommand(output, context);
    };
    return GetDomainsCommand;
}($Command));
export { GetDomainsCommand };
//# sourceMappingURL=GetDomainsCommand.js.map