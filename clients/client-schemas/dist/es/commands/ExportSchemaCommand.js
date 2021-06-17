import { __extends } from "tslib";
import { ExportSchemaRequest, ExportSchemaResponse } from "../models/models_0";
import { deserializeAws_restJson1ExportSchemaCommand, serializeAws_restJson1ExportSchemaCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var ExportSchemaCommand = /** @class */ (function (_super) {
    __extends(ExportSchemaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportSchemaCommand(input) {
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
    ExportSchemaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SchemasClient";
        var commandName = "ExportSchemaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportSchemaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportSchemaResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportSchemaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ExportSchemaCommand(input, context);
    };
    ExportSchemaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ExportSchemaCommand(output, context);
    };
    return ExportSchemaCommand;
}($Command));
export { ExportSchemaCommand };
//# sourceMappingURL=ExportSchemaCommand.js.map