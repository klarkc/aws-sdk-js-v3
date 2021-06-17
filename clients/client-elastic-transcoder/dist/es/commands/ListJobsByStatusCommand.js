import { __extends } from "tslib";
import { ListJobsByStatusRequest, ListJobsByStatusResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJobsByStatusCommand, serializeAws_restJson1ListJobsByStatusCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The ListJobsByStatus operation gets a list of jobs that have a specified status. The response
 *             body contains one element for each job that satisfies the search criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticTranscoderClient, ListJobsByStatusCommand } from "@aws-sdk/client-elastic-transcoder"; // ES Modules import
 * // const { ElasticTranscoderClient, ListJobsByStatusCommand } = require("@aws-sdk/client-elastic-transcoder"); // CommonJS import
 * const client = new ElasticTranscoderClient(config);
 * const command = new ListJobsByStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsByStatusCommandInput} for command's `input` shape.
 * @see {@link ListJobsByStatusCommandOutput} for command's `response` shape.
 * @see {@link ElasticTranscoderClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobsByStatusCommand = /** @class */ (function (_super) {
    __extends(ListJobsByStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobsByStatusCommand(input) {
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
    ListJobsByStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticTranscoderClient";
        var commandName = "ListJobsByStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobsByStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobsByStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobsByStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobsByStatusCommand(input, context);
    };
    ListJobsByStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobsByStatusCommand(output, context);
    };
    return ListJobsByStatusCommand;
}($Command));
export { ListJobsByStatusCommand };
//# sourceMappingURL=ListJobsByStatusCommand.js.map