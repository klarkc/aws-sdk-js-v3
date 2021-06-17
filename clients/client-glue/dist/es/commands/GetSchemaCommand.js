import { __extends } from "tslib";
import { GetSchemaInput, GetSchemaResponse } from "../models/models_1";
import { deserializeAws_json1_1GetSchemaCommand, serializeAws_json1_1GetSchemaCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified schema in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSchemaCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSchemaCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSchemaCommand = /** @class */ (function (_super) {
    __extends(GetSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSchemaCommand(input) {
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
    GetSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "GetSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSchemaInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSchemaCommand(input, context);
    };
    GetSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSchemaCommand(output, context);
    };
    return GetSchemaCommand;
}($Command));
export { GetSchemaCommand };
//# sourceMappingURL=GetSchemaCommand.js.map