import { __extends } from "tslib";
import { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListJobsCommand, serializeAws_restJson1ListJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the DataBrew jobs that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListJobsCommand = /** @class */ (function (_super) {
    __extends(ListJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListJobsCommand(input) {
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
    ListJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataBrewClient";
        var commandName = "ListJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListJobsCommand(input, context);
    };
    ListJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListJobsCommand(output, context);
    };
    return ListJobsCommand;
}($Command));
export { ListJobsCommand };
//# sourceMappingURL=ListJobsCommand.js.map