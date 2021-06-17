import { __extends } from "tslib";
import { ListWorldGenerationJobsRequest, ListWorldGenerationJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListWorldGenerationJobsCommand, serializeAws_restJson1ListWorldGenerationJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists world generator jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldGenerationJobsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldGenerationJobsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new ListWorldGenerationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorldGenerationJobsCommandInput} for command's `input` shape.
 * @see {@link ListWorldGenerationJobsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWorldGenerationJobsCommand = /** @class */ (function (_super) {
    __extends(ListWorldGenerationJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWorldGenerationJobsCommand(input) {
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
    ListWorldGenerationJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "ListWorldGenerationJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWorldGenerationJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListWorldGenerationJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWorldGenerationJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListWorldGenerationJobsCommand(input, context);
    };
    ListWorldGenerationJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListWorldGenerationJobsCommand(output, context);
    };
    return ListWorldGenerationJobsCommand;
}($Command));
export { ListWorldGenerationJobsCommand };
//# sourceMappingURL=ListWorldGenerationJobsCommand.js.map