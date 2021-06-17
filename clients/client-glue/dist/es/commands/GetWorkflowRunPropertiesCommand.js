import { __extends } from "tslib";
import { GetWorkflowRunPropertiesRequest, GetWorkflowRunPropertiesResponse } from "../models/models_1";
import { deserializeAws_json1_1GetWorkflowRunPropertiesCommand, serializeAws_json1_1GetWorkflowRunPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the workflow run properties which were set during the run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetWorkflowRunPropertiesCommand = /** @class */ (function (_super) {
    __extends(GetWorkflowRunPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetWorkflowRunPropertiesCommand(input) {
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
    GetWorkflowRunPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetWorkflowRunPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetWorkflowRunPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetWorkflowRunPropertiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetWorkflowRunPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetWorkflowRunPropertiesCommand(input, context);
    };
    GetWorkflowRunPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetWorkflowRunPropertiesCommand(output, context);
    };
    return GetWorkflowRunPropertiesCommand;
}($Command));
export { GetWorkflowRunPropertiesCommand };
//# sourceMappingURL=GetWorkflowRunPropertiesCommand.js.map