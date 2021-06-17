import { __extends } from "tslib";
import { ListWorldExportJobsRequest, ListWorldExportJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListWorldExportJobsCommand, serializeAws_restJson1ListWorldExportJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists world export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldExportJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldExportJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListWorldExportJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorldExportJobsCommand = /** @class */ (function (_super) {
    __extends(ListWorldExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorldExportJobsCommand(input) {
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
    ListWorldExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListWorldExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorldExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorldExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorldExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWorldExportJobsCommand(input, context);
    };
    ListWorldExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWorldExportJobsCommand(output, context);
    };
    return ListWorldExportJobsCommand;
}($Command));
export { ListWorldExportJobsCommand };
//# sourceMappingURL=ListWorldExportJobsCommand.js.map