import { __extends } from "tslib";
import { DescribeAccountPreferencesRequest, DescribeAccountPreferencesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAccountPreferencesCommand, serializeAws_restJson1DescribeAccountPreferencesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
var DescribeAccountPreferencesCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountPreferencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountPreferencesCommand(input) {
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
    DescribeAccountPreferencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeAccountPreferencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountPreferencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountPreferencesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountPreferencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAccountPreferencesCommand(input, context);
    };
    DescribeAccountPreferencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAccountPreferencesCommand(output, context);
    };
    return DescribeAccountPreferencesCommand;
}($Command));
export { DescribeAccountPreferencesCommand };
//# sourceMappingURL=DescribeAccountPreferencesCommand.js.map