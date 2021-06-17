import { __extends } from "tslib";
import { ListInputSecurityGroupsRequest, ListInputSecurityGroupsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListInputSecurityGroupsCommand, serializeAws_restJson1ListInputSecurityGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Produces a list of Input Security Groups for an account
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputSecurityGroupsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputSecurityGroupsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListInputSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ListInputSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInputSecurityGroupsCommand = /** @class */ (function (_super) {
    __extends(ListInputSecurityGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInputSecurityGroupsCommand(input) {
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
    ListInputSecurityGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "ListInputSecurityGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInputSecurityGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInputSecurityGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInputSecurityGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInputSecurityGroupsCommand(input, context);
    };
    ListInputSecurityGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInputSecurityGroupsCommand(output, context);
    };
    return ListInputSecurityGroupsCommand;
}($Command));
export { ListInputSecurityGroupsCommand };
//# sourceMappingURL=ListInputSecurityGroupsCommand.js.map