import { __extends } from "tslib";
import { GetLaunchProfileDetailsRequest, GetLaunchProfileDetailsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLaunchProfileDetailsCommand, serializeAws_restJson1GetLaunchProfileDetailsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileDetailsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileDetailsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileDetailsCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileDetailsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchProfileDetailsCommand = /** @class */ (function (_super) {
    __extends(GetLaunchProfileDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchProfileDetailsCommand(input) {
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
    GetLaunchProfileDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetLaunchProfileDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchProfileDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLaunchProfileDetailsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchProfileDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLaunchProfileDetailsCommand(input, context);
    };
    GetLaunchProfileDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLaunchProfileDetailsCommand(output, context);
    };
    return GetLaunchProfileDetailsCommand;
}($Command));
export { GetLaunchProfileDetailsCommand };
//# sourceMappingURL=GetLaunchProfileDetailsCommand.js.map