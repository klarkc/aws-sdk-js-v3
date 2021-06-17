import { __extends } from "tslib";
import { DisassociateExternalConnectionRequest, DisassociateExternalConnectionResult } from "../models/models_0";
import { deserializeAws_restJson1DisassociateExternalConnectionCommand, serializeAws_restJson1DisassociateExternalConnectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Removes an existing external connection from a repository.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DisassociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DisassociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DisassociateExternalConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateExternalConnectionCommandInput} for command's `input` shape.
 * @see {@link DisassociateExternalConnectionCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateExternalConnectionCommand = /** @class */ (function (_super) {
    __extends(DisassociateExternalConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateExternalConnectionCommand(input) {
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
    DisassociateExternalConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DisassociateExternalConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateExternalConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateExternalConnectionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateExternalConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateExternalConnectionCommand(input, context);
    };
    DisassociateExternalConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateExternalConnectionCommand(output, context);
    };
    return DisassociateExternalConnectionCommand;
}($Command));
export { DisassociateExternalConnectionCommand };
//# sourceMappingURL=DisassociateExternalConnectionCommand.js.map