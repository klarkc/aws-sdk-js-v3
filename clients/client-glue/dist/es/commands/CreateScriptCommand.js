import { __extends } from "tslib";
import { CreateScriptRequest, CreateScriptResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateScriptCommand, serializeAws_json1_1CreateScriptCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Transforms a directed acyclic graph (DAG) into code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateScriptCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateScriptCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScriptCommand = /** @class */ (function (_super) {
    __extends(CreateScriptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateScriptCommand(input) {
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
    CreateScriptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateScriptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateScriptRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateScriptResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateScriptCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateScriptCommand(input, context);
    };
    CreateScriptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateScriptCommand(output, context);
    };
    return CreateScriptCommand;
}($Command));
export { CreateScriptCommand };
//# sourceMappingURL=CreateScriptCommand.js.map