import { __extends } from "tslib";
import { ListGraphsRequest, ListGraphsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGraphsCommand, serializeAws_restJson1ListGraphsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the list of behavior graphs that the calling account is an administrator account
 *          of. This operation can only be called by an administrator account.</p>
 *          <p>Because an account can currently only be the administrator of one behavior graph within
 *          a Region, the results always contain a single behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListGraphsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListGraphsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGraphsCommand = /** @class */ (function (_super) {
    __extends(ListGraphsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGraphsCommand(input) {
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
    ListGraphsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "ListGraphsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGraphsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGraphsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGraphsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGraphsCommand(input, context);
    };
    ListGraphsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGraphsCommand(output, context);
    };
    return ListGraphsCommand;
}($Command));
export { ListGraphsCommand };
//# sourceMappingURL=ListGraphsCommand.js.map