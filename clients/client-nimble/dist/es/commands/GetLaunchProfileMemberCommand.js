import { __extends } from "tslib";
import { GetLaunchProfileMemberRequest, GetLaunchProfileMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLaunchProfileMemberCommand, serializeAws_restJson1GetLaunchProfileMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a user persona in launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetLaunchProfileMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchProfileMemberCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLaunchProfileMemberCommand = /** @class */ (function (_super) {
    __extends(GetLaunchProfileMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLaunchProfileMemberCommand(input) {
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
    GetLaunchProfileMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetLaunchProfileMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLaunchProfileMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLaunchProfileMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLaunchProfileMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLaunchProfileMemberCommand(input, context);
    };
    GetLaunchProfileMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLaunchProfileMemberCommand(output, context);
    };
    return GetLaunchProfileMemberCommand;
}($Command));
export { GetLaunchProfileMemberCommand };
//# sourceMappingURL=GetLaunchProfileMemberCommand.js.map