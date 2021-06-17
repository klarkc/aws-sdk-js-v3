import { __extends } from "tslib";
import { GetStudioMemberRequest, GetStudioMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1GetStudioMemberCommand, serializeAws_restJson1GetStudioMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get a user's membership in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetStudioMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetStudioMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new GetStudioMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStudioMemberCommandInput} for command's `input` shape.
 * @see {@link GetStudioMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetStudioMemberCommand = /** @class */ (function (_super) {
    __extends(GetStudioMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetStudioMemberCommand(input) {
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
    GetStudioMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "GetStudioMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetStudioMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetStudioMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetStudioMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetStudioMemberCommand(input, context);
    };
    GetStudioMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetStudioMemberCommand(output, context);
    };
    return GetStudioMemberCommand;
}($Command));
export { GetStudioMemberCommand };
//# sourceMappingURL=GetStudioMemberCommand.js.map