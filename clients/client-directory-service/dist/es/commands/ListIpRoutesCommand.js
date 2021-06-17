import { __extends } from "tslib";
import { ListIpRoutesRequest, ListIpRoutesResult } from "../models/models_0";
import { deserializeAws_json1_1ListIpRoutesCommand, serializeAws_json1_1ListIpRoutesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the address blocks that you have added to a directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ListIpRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIpRoutesCommandInput} for command's `input` shape.
 * @see {@link ListIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIpRoutesCommand = /** @class */ (function (_super) {
    __extends(ListIpRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIpRoutesCommand(input) {
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
    ListIpRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "ListIpRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIpRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIpRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIpRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListIpRoutesCommand(input, context);
    };
    ListIpRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListIpRoutesCommand(output, context);
    };
    return ListIpRoutesCommand;
}($Command));
export { ListIpRoutesCommand };
//# sourceMappingURL=ListIpRoutesCommand.js.map