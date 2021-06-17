import { __extends } from "tslib";
import { MarkAsArchivedRequest, SourceServer } from "../models/models_0";
import { deserializeAws_restJson1MarkAsArchivedCommand, serializeAws_restJson1MarkAsArchivedCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle.state which equals DISCONNECTED or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, MarkAsArchivedCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, MarkAsArchivedCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new MarkAsArchivedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MarkAsArchivedCommandInput} for command's `input` shape.
 * @see {@link MarkAsArchivedCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MarkAsArchivedCommand = /** @class */ (function (_super) {
    __extends(MarkAsArchivedCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MarkAsArchivedCommand(input) {
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
    MarkAsArchivedCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "MarkAsArchivedCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MarkAsArchivedRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SourceServer.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MarkAsArchivedCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1MarkAsArchivedCommand(input, context);
    };
    MarkAsArchivedCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1MarkAsArchivedCommand(output, context);
    };
    return MarkAsArchivedCommand;
}($Command));
export { MarkAsArchivedCommand };
//# sourceMappingURL=MarkAsArchivedCommand.js.map