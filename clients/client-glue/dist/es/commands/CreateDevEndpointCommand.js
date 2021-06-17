import { __extends } from "tslib";
import { CreateDevEndpointRequest, CreateDevEndpointResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateDevEndpointCommand, serializeAws_json1_1CreateDevEndpointCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDevEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateDevEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDevEndpointCommand(input) {
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
    CreateDevEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "CreateDevEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDevEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDevEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDevEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateDevEndpointCommand(input, context);
    };
    CreateDevEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateDevEndpointCommand(output, context);
    };
    return CreateDevEndpointCommand;
}($Command));
export { CreateDevEndpointCommand };
//# sourceMappingURL=CreateDevEndpointCommand.js.map