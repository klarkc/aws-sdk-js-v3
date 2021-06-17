import { __extends } from "tslib";
import { PutLaunchProfileMembersRequest, PutLaunchProfileMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1PutLaunchProfileMembersCommand, serializeAws_restJson1PutLaunchProfileMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add/update users with given persona to launch profile membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutLaunchProfileMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutLaunchProfileMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutLaunchProfileMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLaunchProfileMembersCommandInput} for command's `input` shape.
 * @see {@link PutLaunchProfileMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLaunchProfileMembersCommand = /** @class */ (function (_super) {
    __extends(PutLaunchProfileMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLaunchProfileMembersCommand(input) {
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
    PutLaunchProfileMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "PutLaunchProfileMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLaunchProfileMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutLaunchProfileMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLaunchProfileMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutLaunchProfileMembersCommand(input, context);
    };
    PutLaunchProfileMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutLaunchProfileMembersCommand(output, context);
    };
    return PutLaunchProfileMembersCommand;
}($Command));
export { PutLaunchProfileMembersCommand };
//# sourceMappingURL=PutLaunchProfileMembersCommand.js.map