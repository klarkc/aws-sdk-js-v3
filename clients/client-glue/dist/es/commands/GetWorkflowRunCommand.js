import { __extends } from "tslib";
import { GetWorkflowRunRequest, GetWorkflowRunResponse } from "../models/models_1";
import { deserializeAws_json1_1GetWorkflowRunCommand, serializeAws_json1_1GetWorkflowRunCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the metadata for a given workflow run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkflowRunCommand = /** @class */ (function (_super) {
    __extends(GetWorkflowRunCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorkflowRunCommand(input) {
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
    GetWorkflowRunCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetWorkflowRunCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorkflowRunRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorkflowRunResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorkflowRunCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWorkflowRunCommand(input, context);
    };
    GetWorkflowRunCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWorkflowRunCommand(output, context);
    };
    return GetWorkflowRunCommand;
}($Command));
export { GetWorkflowRunCommand };
//# sourceMappingURL=GetWorkflowRunCommand.js.map