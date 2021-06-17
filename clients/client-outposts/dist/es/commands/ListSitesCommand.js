import { __extends } from "tslib";
import { ListSitesInput, ListSitesOutput } from "../models/models_0";
import { deserializeAws_restJson1ListSitesCommand, serializeAws_restJson1ListSitesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the sites for the specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListSitesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListSitesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListSitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSitesCommandInput} for command's `input` shape.
 * @see {@link ListSitesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSitesCommand = /** @class */ (function (_super) {
    __extends(ListSitesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSitesCommand(input) {
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
    ListSitesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OutpostsClient";
        var commandName = "ListSitesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSitesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSitesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSitesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSitesCommand(input, context);
    };
    ListSitesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSitesCommand(output, context);
    };
    return ListSitesCommand;
}($Command));
export { ListSitesCommand };
//# sourceMappingURL=ListSitesCommand.js.map