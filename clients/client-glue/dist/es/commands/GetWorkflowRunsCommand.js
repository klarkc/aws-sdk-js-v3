import { __extends } from "tslib";
import { GetWorkflowRunsRequest, GetWorkflowRunsResponse } from "../models/models_1";
import { deserializeAws_json1_1GetWorkflowRunsCommand, serializeAws_json1_1GetWorkflowRunsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves metadata for all runs of a given workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunsCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkflowRunsCommand = /** @class */ (function (_super) {
    __extends(GetWorkflowRunsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorkflowRunsCommand(input) {
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
    GetWorkflowRunsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetWorkflowRunsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorkflowRunsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorkflowRunsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorkflowRunsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWorkflowRunsCommand(input, context);
    };
    GetWorkflowRunsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWorkflowRunsCommand(output, context);
    };
    return GetWorkflowRunsCommand;
}($Command));
export { GetWorkflowRunsCommand };
//# sourceMappingURL=GetWorkflowRunsCommand.js.map