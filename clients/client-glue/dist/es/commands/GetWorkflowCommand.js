import { __extends } from "tslib";
import { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_1";
import { deserializeAws_json1_1GetWorkflowCommand, serializeAws_json1_1GetWorkflowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves resource metadata for a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkflowCommand = /** @class */ (function (_super) {
    __extends(GetWorkflowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorkflowCommand(input) {
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
    GetWorkflowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetWorkflowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorkflowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorkflowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorkflowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWorkflowCommand(input, context);
    };
    GetWorkflowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWorkflowCommand(output, context);
    };
    return GetWorkflowCommand;
}($Command));
export { GetWorkflowCommand };
//# sourceMappingURL=GetWorkflowCommand.js.map