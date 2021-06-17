import { __extends } from "tslib";
import { PutWorkflowRunPropertiesRequest, PutWorkflowRunPropertiesResponse } from "../models/models_1";
import { deserializeAws_json1_1PutWorkflowRunPropertiesCommand, serializeAws_json1_1PutWorkflowRunPropertiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutWorkflowRunPropertiesCommand = /** @class */ (function (_super) {
    __extends(PutWorkflowRunPropertiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutWorkflowRunPropertiesCommand(input) {
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
    PutWorkflowRunPropertiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "PutWorkflowRunPropertiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutWorkflowRunPropertiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutWorkflowRunPropertiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutWorkflowRunPropertiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutWorkflowRunPropertiesCommand(input, context);
    };
    PutWorkflowRunPropertiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutWorkflowRunPropertiesCommand(output, context);
    };
    return PutWorkflowRunPropertiesCommand;
}($Command));
export { PutWorkflowRunPropertiesCommand };
//# sourceMappingURL=PutWorkflowRunPropertiesCommand.js.map