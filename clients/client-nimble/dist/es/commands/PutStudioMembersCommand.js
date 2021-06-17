import { __extends } from "tslib";
import { PutStudioMembersRequest, PutStudioMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1PutStudioMembersCommand, serializeAws_restJson1PutStudioMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Add/update users with given persona to studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, PutStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, PutStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new PutStudioMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutStudioMembersCommandInput} for command's `input` shape.
 * @see {@link PutStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutStudioMembersCommand = /** @class */ (function (_super) {
    __extends(PutStudioMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutStudioMembersCommand(input) {
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
    PutStudioMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "PutStudioMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutStudioMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutStudioMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutStudioMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutStudioMembersCommand(input, context);
    };
    PutStudioMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutStudioMembersCommand(output, context);
    };
    return PutStudioMembersCommand;
}($Command));
export { PutStudioMembersCommand };
//# sourceMappingURL=PutStudioMembersCommand.js.map