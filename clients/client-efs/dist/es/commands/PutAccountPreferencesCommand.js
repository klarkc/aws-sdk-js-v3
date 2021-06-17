import { __extends } from "tslib";
import { PutAccountPreferencesRequest, PutAccountPreferencesResponse } from "../models/models_0";
import { deserializeAws_restJson1PutAccountPreferencesCommand, serializeAws_restJson1PutAccountPreferencesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var PutAccountPreferencesCommand = /** @class */ (function (_super) {
    __extends(PutAccountPreferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccountPreferencesCommand(input) {
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
    PutAccountPreferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "PutAccountPreferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccountPreferencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAccountPreferencesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccountPreferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutAccountPreferencesCommand(input, context);
    };
    PutAccountPreferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutAccountPreferencesCommand(output, context);
    };
    return PutAccountPreferencesCommand;
}($Command));
export { PutAccountPreferencesCommand };
//# sourceMappingURL=PutAccountPreferencesCommand.js.map