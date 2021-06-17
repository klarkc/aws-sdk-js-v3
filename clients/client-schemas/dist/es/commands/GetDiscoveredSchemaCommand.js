import { __extends } from "tslib";
import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDiscoveredSchemaCommand, serializeAws_restJson1GetDiscoveredSchemaCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiscoveredSchemaCommand = /** @class */ (function (_super) {
    __extends(GetDiscoveredSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDiscoveredSchemaCommand(input) {
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
    GetDiscoveredSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "GetDiscoveredSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDiscoveredSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDiscoveredSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDiscoveredSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDiscoveredSchemaCommand(input, context);
    };
    GetDiscoveredSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDiscoveredSchemaCommand(output, context);
    };
    return GetDiscoveredSchemaCommand;
}($Command));
export { GetDiscoveredSchemaCommand };
//# sourceMappingURL=GetDiscoveredSchemaCommand.js.map